import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHandlerClass.getAccountList'
export default class ApexWireDemo extends LightningElement {
    accountList
    @wire(getAccountList)
    accounts

    @wire(getAccountList)
    accountsHandler({data, error}){
        if(data){
            this.accountList = data.map(item =>{
                let newType = item.Type === 'Customer - Channel' ? 'Channel' : 
                item.Type === 'Prospect' ? 'Prospect - Channel' : '-------'
                return {...item, newType}
            })
        }
        if(error){
            console.error(error)
        }
    }
}