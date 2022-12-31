import { LightningElement, wire } from 'lwc';
import { createRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact'
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class CreateRecordDemo extends LightningElement {

    formFields = {}
    changeHandler(event){
        const {name, value} = event.target
        this.formFields[name] = value
        /*
        If u start typing your FistName as Subhranshu, then the above statement will
        form object in the below manner:

            formFields = { 
                "FirstName" : "Subharnshu",
                "LastName" : "Dwibedy"
            }
         */
    }

    createContact(){
        const recordInput = {apiName : CONTACT_OBJECT.objectApiName, fields : this.formFields}
        createRecord(recordInput).then(result => {
            this.showToastEvent('Success!!', `Contact Created with Id : ${result.id}`)
            this.template.querySelector('form.createForm').reset()
            this.formFields={}
        }).catch(error => { 
            this.showToastEvent('Error creating record', error.body.message, 'error')
        })
    }

    showToastEvent(title, message, variant){
        this.dispatchEvent(new ShowToastEvent({
            title,
            message,
            variant : variant || 'success'
        }))
    }
}