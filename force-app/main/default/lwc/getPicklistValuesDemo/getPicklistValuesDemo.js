import { LightningElement, wire } from 'lwc';
import { getPicklistValues, getObjectInfo } from 'lightning/uiObjectInfoApi';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import INDUSTRY_NAME from '@salesforce/schema/Account.Industry'
import TYPE_NAME from '@salesforce/schema/Account.Type'
export default class GetPicklistValuesDemo extends LightningElement {

    selectedIndustry = ''
    selectedType = ''
    industryOptions = []
    typeOptions = []

    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    accountInfo

    @wire(getPicklistValues, {recordTypeId : '$accountInfo.data.defaultRecordTypeId', fieldApiName : INDUSTRY_NAME})
    industryPicklist({data, error}){ 
        if(data){
            //console.log(data)
            this.industryOptions = [...this.generatePicklist(data)]
        } if(error){
            console.error(error)
        }
    }

    @wire(getPicklistValues, {recordTypeId : '$accountInfo.data.defaultRecordTypeId', fieldApiName : TYPE_NAME})
    typePicklist({data, error}){ 
        if(data){
            //console.log(data)
            this.typeOptions = [...this.generatePicklist(data)]
        } if(error){
            console.error(error)
        }
    }

    generatePicklist(data){
        return data.values.map(item =>({
            label : item.label, 
            value : item.value
        }))
    }

    handleIndustryChange(event){
        this.selectedIndustry = event.target.value
    }

    handleTypeChange(event){
        this.selectedType = event.target.value
    }
}