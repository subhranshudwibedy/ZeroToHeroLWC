import { LightningElement, wire } from 'lwc';
import { getObjectInfo, getObjectInfos } from 'lightning/uiObjectInfoApi'
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import OPPTY_OBJECT from '@salesforce/schema/Opportunity'

export default class GetObjectInfoDemo extends LightningElement {

    apiName 
    defaultRecordTypeId 
    label 
    labelPlural
    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfo({data, error}){
        if(data){
            this.apiName = data.apiName
            this.defaultRecordTypeId = data.defaultRecordTypeId
            this.label = data.label
            this.labelPlural = data.labelPlural
        }
    }

    @wire(getObjectInfo, {objectApiName : ACCOUNT_OBJECT})
    objectInfoProperty

    objectAPINames = [ACCOUNT_OBJECT, OPPTY_OBJECT]

    objectInfos
    @wire(getObjectInfos, {objectApiNames : '$objectAPINames'})
    objectInfosHandler({data, error}){
        if(data){
            this.objectInfos = data
        }
    }
}