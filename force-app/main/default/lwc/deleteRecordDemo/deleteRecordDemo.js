import { LightningElement } from 'lwc';
import { deleteRecord } from 'lightning/uiRecordApi';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class DeleteRecordDemo extends LightningElement {
    recordId
    changeHandler(event){
        this.recordId = event.target.value
    }

    deleteHandler(){
        deleteRecord(this.recordId).then(()=>{
            this.showNotification("Success!!","Deleted Successfully!!", 'success')
        }).catch(error =>{
            this.showNotification("Error!!","Error Occured!!", 'error')
        })
    }

    showNotification(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({ 
            title, 
            message,
            variant
        }))
    }
}