import { LightningElement, wire, api } from 'lwc';
import { getRecord, getFieldValue, getFieldDisplayValue } from 'lightning/uiRecordApi';
import NAME_FIELD from '@salesforce/schema/Account.Name'
import OWNER_FIELD from '@salesforce/schema/Account.Owner.Name'
import ANNUAL_REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue'
const fields = [NAME_FIELD, OWNER_FIELD, ANNUAL_REVENUE_FIELD]
export default class GetRecordDemo extends LightningElement {

    name
    owner
    AnnualRevenue
    @api recordId
    @wire(getRecord,{recordId:'$recordId', fields})
    accountHandler({data}){
        if(data){
            //console.log(data)
            this.name = getFieldValue(data, NAME_FIELD)
            this.owner = getFieldValue(data, OWNER_FIELD)
            this.AnnualRevenue = getFieldDisplayValue(data, ANNUAL_REVENUE_FIELD)
        }
    }
}