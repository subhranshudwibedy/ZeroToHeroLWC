public class UpdateAccountChecboxHandler {
    public static void AccountChecboxMethod(List<Contact> newVersionContacts, Map<Id, Contact> oldContactMap){
        Set<Id> accIds = new Set<Id>();
        if(!newVersionContacts.isEmpty()){
            for(Contact c : newVersionContacts){
                if(c.AccountId <> Null){
                    accIds.add(c.AccountId);
                }
            }
        }
        
        List<Account> accList = new List<Account>();
        Map<Id, Account> accMap = new Map<Id, Account>([SELECT Id, Account_Checkbox__c, (SELECT Id, FirstName, LastName
                                                                                        FROM Contacts)
                                                        FROM Account WHERE Id IN : accIds]);
        
        for(Contact con : newVersionContacts){
            if(con.AccountId <> Null && accMap.containsKey(con.AccountId)){
                Account acc = accMap.get(con.AccountId);
                if(con.FirstName <> oldContactMap.get(con.Id).FirstName || con.LastName <> oldContactMap.get(con.Id).LastName){
                    acc.Account_Checkbox__c = true;
                    accList.add(acc);
                } else {
                    acc.Account_Checkbox__c = false;
                    accList.add(acc);
                }
            }
        }
        
        if(!accList.isEmpty()){
            update accList;
        }
    }
}