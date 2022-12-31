import { LightningElement, wire } from 'lwc';
import { getListUi } from 'lightning/uiListApi';
import { updateRecord } from 'lightning/uiRecordApi';
import CONTACT_OBJECT from '@salesforce/schema/Contact';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshApex } from '@salesforce/apex'
const COLS = [
    {label: 'Id', fieldName: 'Id'},
    {label: 'Name', fieldName: 'Name'},
    {label: 'Title', fieldName: 'Title'},
    {label: 'Phone', fieldName: 'Phone', editable : true},
    {label: 'Email', fieldName: 'Email', type : 'email', editable : true},
]
export default class UpdateRecordDemo extends LightningElement {
    columns = COLS
    contacts = []
    draftValues = []
    @wire(getListUi, {
        objectApiName : CONTACT_OBJECT, 
        listViewApiName : 'AllContacts'
    })listViewHandler({data, error}){
        if(data){
            console.log(data)
            this.contacts = data.records.records.map(record =>{
                return {
                    "Id" : this.getValue(record, 'Id'),
                    "Name" : this.getValue(record, 'Name'),
                    "Title" : this.getValue(record, 'Title'),
                    "Phone" : this.getValue(record, 'Phone'),
                    "Email" : this.getValue(record, 'Email')
                }
            })
        }
        if(error){
            console.error(error)
        }
    }

    getValue(data, field){
        return data.fields[field].value
    }

    handleSave(event){
        console.log(JSON.stringify(event.detail.draftValues))
        const recordInputs = event.detail.draftValues.map(draft => {
            const fields = {...draft}
            return {fields:fields}
        })
        const promises = recordInputs.map(recordInput => updateRecord(recordInput))
        Promise.all(promises).then( (result) =>{
            this.showToastEvent('Success!!', 'Contacts updated Successfully')
            this.draftValues = []
            return refreshApex(result)
        }).catch(error =>{
            this.showToastEvent('Error updating the record', error.body.message, 'error')
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