import { LightningElement } from 'lwc';
import findAccounts from '@salesforce/apex/AccountHandlerClass.findAccounts'
export default class ApexImperativeWithParamsDemo extends LightningElement {
    searchKey = ''
    accounts
    serachHandler(event){
        window.clearTimeout(this.timer)
        this.searchKey = event.target.value
        const timer = setTimeout(()=>{
            this.callApex()
        }, 1000)
    }

    callApex(){
        findAccounts({searchKey : this.searchKey})
        .then((result)=>{
            this.accounts = result
        }).catch((error)=>{
            console.error(error)
        })
    }
}