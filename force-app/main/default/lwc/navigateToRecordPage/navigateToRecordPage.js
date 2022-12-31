import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToRecordPage extends NavigationMixin(LightningElement) {
    navigateToViewMode(){
        this[NavigationMixin.Navigate]({ 
            type : 'standard__recordPage',
            attributes : { 
                recordId : '001N0000028KWqfIAG',
                objectApiName : 'Account',
                actionName : 'view'
            }
        })
    }

    navigateToEditMode(){
        this[NavigationMixin.Navigate]({ 
            type : 'standard__recordPage',
            attributes : { 
                recordId : '001N0000028KWqfIAG',
                objectApiName : 'Account',
                actionName : 'edit'
            }
        })        
    }
}