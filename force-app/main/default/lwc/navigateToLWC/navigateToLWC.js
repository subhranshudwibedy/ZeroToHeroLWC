import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToLWC extends NavigationMixin(LightningElement) {
    
    navigateToLWC(){ 
        var definition={ 
            componentDef : 'c:navigationLwcTarget',
            attributes : { 
                recordId : '001N0000028KWqfIAG'
            }
        }
        this[NavigationMixin.Navigate]({ 
            type : 'standard__webPage',
            attributes : { 
                url : '/one/one.app#' + btoa(JSON.stringify(definition))
            }
        })
    }
}