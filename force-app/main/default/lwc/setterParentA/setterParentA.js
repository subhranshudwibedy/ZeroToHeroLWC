import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHandlerClass.getAccountList'
export default class SetterParentA extends LightningElement {
    userDetails={
        Name:"Aurthur Morgan",
        Age:20
    }
}