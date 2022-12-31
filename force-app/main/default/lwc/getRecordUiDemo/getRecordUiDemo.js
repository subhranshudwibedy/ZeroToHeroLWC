import { LightningElement, wire, api } from 'lwc';
import { getRecordUi } from 'lightning/uiRecordApi';
export default class GetRecordUiDemo extends LightningElement {

    formFields = [
        {'fieldName' : 'Name', 'label' : 'Name'},
        {'fieldName' : 'Industry', 'label' : 'Industry'},
        {'fieldName' : 'Phone', 'label' : 'Phone'},
        {'fieldName' : 'AnnualRevenue', 'label' : 'Annual Revenue'}
    ]

    @api recordId
    @wire(getRecordUi, {recordIds : '$recordId', layoutTypes : 'Full', modes : 'Edit'})
    accountRecordHandler({data, error}){
        if(data){
            //console.log(data)
            this.formFields = this.formFields.map(item => {
                return {...item, value : data.records[this.recordId].fields[item.fieldName].value}
            })
        }
        if(error){
            console.error(error)
        }
    }
}