import { LightningElement, wire } from 'lwc';
import filterAccountType from '@salesforce/apex/AccountHandlerClass.filterAccountType';
export default class WireApexWithParams extends LightningElement {
    selectedType = ''
    @wire(filterAccountType, {type : '$selectedType'})
    filteredAccounts

    get typeOptions(){
        return [
            {label : 'Customer - Direct' , value : 'Customer - Direct'},
            {label : 'Customer - Channel' , value : 'Customer - Channel'},
            {label : 'Prospect' , value : 'Prospect'}
        ]
    }

    handleChange(event){
        this.selectedType = event.target.value
    }
}