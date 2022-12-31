global class batchUpdateAccountsContacts implements Database.Batchable<sObject>, Database.Stateful {
    
    Set<Id> successRecord = new Set<Id>();
    Set<Id> failedRecord = new Set<Id>();
    
    global Database.QueryLocator start(Database.BatchableContext bc){
        String query = 'SELECT Id, Name, NumberOfEmployees, Description, (SELECT Id, MobilePhone FROM Contacts) FROM Account';
        return database.getQueryLocator(query);
    }
    
    global void execute(Database.BatchableContext bc, List<Account> scope){
        List<Account> accUpdate = new List<Account>();
        List<Contact> conUpdate = new List<Contact>();

        for(Account a : scope){
            a.NumberOfEmployees = 50;
            a.Description = 'Description field updated from Batch Apex';
            accUpdate.add(a);
            for(Contact c : a.Contacts){
                c.MobilePhone = '07123456789';
                conUpdate.add(c);
            }
        }
        
        List<Database.SaveResult> accList = Database.update(accUpdate, false);
        List<Database.SaveResult> conList = Database.update(conUpdate, false);
        
        for(Database.SaveResult ds1 : accList){
            if(ds1.isSuccess() == true){
                // Operation was successful, so get the ID of the record that was processed
                successRecord.add(ds1.getId());
            } else {
                for(Database.Error er1 : ds1.getErrors()){                   
                }
                failedRecord.add(ds1.getId());
            }
        }
        
        for(Database.SaveResult ds2 : conList){
            if(ds2.isSuccess() == true){
                successRecord.add(ds2.getId());
            } else {
                for(Database.Error er2 : ds2.getErrors()){                   
                }
                failedRecord.add(ds2.getId());
            }            
        }
    }
    
    global void finish(Database.BatchableContext bc){
        
        // Get the ID of the AsyncApexJob representing this batch job
        // from Database.BatchableContext.
        // Query the AsyncApexJob object to retrieve the current job's information.
        AsyncApexJob a = [SELECT Id, Status, NumberOfErrors, JobItemsProcessed, 
                         TotalJobItems, CreatedBy.Email FROM AsyncApexJob WHERE Id =: bc.getJobId()];
        
        // Send an email to the Apex job's submitter notifying of job completion.
        Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
        
        List<String> toAddressess = new List<String>{a.CreatedBy.Email};
        mail.setToAddresses(toAddressess);
        mail.setSubject('Account and contact update ' + a.Status);
        mail.setPlainTextBody('The batch Apex job processed ' + a.TotalJobItems +
             ' batches with ' + a.NumberOfErrors + ' failures.' + successRecord + 'successRecordids: ' + 'failRecordids: ' + failedRecord);
        Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
    }
}