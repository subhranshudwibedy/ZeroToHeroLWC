public class RUS_AccountHandler {
    public static void RollUpSummary(List<Contact> NewVersionContacts, List<Contact> OldVersionContacts){
        
        //declaring Set to store Account IDs related to Contact
        Set<Id> varSetAccIDs = new Set<Id>();
        
        //If we have new version of Contact records
        if(!NewVersionContacts.isEmpty()){
            for(Contact c1 : NewVersionContacts){
                if(c1.AccountId <> Null){
                    varSetAccIDs.add(c1.AccountId);
                }
            }
        }
        //If we have old version of Contact records
        else if(!OldVersionContacts.isEmpty()){	
            for(Contact c2 : OldVersionContacts){
                if(c2.AccountId <> Null){
                    varSetAccIDs.add(c2.AccountId);
                }
            }
        }
        
        //List for updating number of contacts related to Account records
        List<Account> updatedAccList = new List<Account>();
        
        List<Account> varAccList = [SELECT Id, No_Of_Contacts__c, (SELECT Id from Contacts) 
                                    FROM Account WHERE Id IN : varSetAccIDs];
        for(Account a : varAccList){
            if(a.Contacts.size() > 0){
                a.No_Of_Contacts__c = a.Contacts.size();
                updatedAccList.add(a);
            }
            else{
                a.No_Of_Contacts__c = 0;
                updatedAccList.add(a);
            }
        }
        
        if(!updatedAccList.isEmpty()){
            update updatedAccList;
        }        
    }
}