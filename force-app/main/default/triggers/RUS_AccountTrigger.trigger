trigger RUS_AccountTrigger on Contact (after insert, after update, after delete, after undelete) {
    if(Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate || Trigger.isDelete || Trigger.isUndelete)){
        RUS_AccountHandler.RollUpSummary(Trigger.New, Trigger.Old);
    }
}