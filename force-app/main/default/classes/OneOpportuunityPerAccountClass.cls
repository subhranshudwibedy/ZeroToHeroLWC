public class OneOpportuunityPerAccountClass {
    public static void OnlyOneOpportunity(List<Opportunity> NewVersionoppty){
        Set<Id> accIds = new Set<Id>();
        if(!NewVersionoppty.isEmpty()){
            for(Opportunity o : NewVersionoppty){
                if(o.AccountId <> Null){
                    accIds.add(o.AccountId);
                }
            }
        }
        
        Map<Id, Account> accMap = new Map<Id, Account>([SELECT Id, (SELECT Id FROM 
                                                                    Opportunities WHERE CreatedDate = TODAY) 
                                                       FROM Account WHERE Id IN : accIds]);
        
        for(Opportunity oppty : NewVersionoppty){
            if(oppty.AccountId <> Null && accMap.containsKey(oppty.AccountId)){
                Account a = accMap.get(oppty.AccountId);
                if(a.Opportunities.size() > 0){
                    oppty.addError('Only one Opportunity can be associated to an account');
                }
            }
        }
    }
}