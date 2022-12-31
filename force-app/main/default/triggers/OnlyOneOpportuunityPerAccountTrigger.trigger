trigger OnlyOneOpportuunityPerAccountTrigger on Opportunity (before insert, before update) {
    if(Trigger.isBefore && (Trigger.isInsert || Trigger.isUpdate)){
        OneOpportuunityPerAccountClass.OnlyOneOpportunity(Trigger.new);
    }
}