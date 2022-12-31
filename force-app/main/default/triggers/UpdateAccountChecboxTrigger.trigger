trigger UpdateAccountChecboxTrigger on Contact (after insert, after update) {
    if(Trigger.isAfter && (Trigger.isInsert || Trigger.isUpdate)){
		UpdateAccountChecboxHandler.AccountChecboxMethod(Trigger.new, Trigger.oldMap);        
    }
}