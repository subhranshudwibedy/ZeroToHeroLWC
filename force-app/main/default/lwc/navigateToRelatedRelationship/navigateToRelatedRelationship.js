import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToRelatedRelationship extends NavigationMixin(LightningElement) {
    navigateToRelationShipTab(){
        this[NavigationMixin.Navigate]({ 
            type : 'standard__recordRelationshipPage',
            attributes : { 
                recordId : '001N0000028KWqfIAG',
                objectApiName : 'Account',
                relationshipApiName : 'Contacts',
                actionName : 'view'
            }
        })
    }
}