import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
import { encodeDefaultFieldValues } from 'lightning/pageReferenceUtils'
export default class NavigateToObjectPage extends NavigationMixin(LightningElement) {
    navigateToRecord(){
        this[NavigationMixin.Navigate]({ 
            type : 'standard__objectPage',
            attributes : { 
                objectApiName : 'Account',
                actionName : 'new'
            }
        })
    }

    navigateToRecordWithDefault(){
        const defaultValues = encodeDefaultFieldValues({ 
            FirstName : 'Aurthur',
            LastName : 'Morgan',
            LeadSource : 'Web'
        })
        this[NavigationMixin.Navigate]({ 
            type : 'standard__objectPage',
            attributes : { 
                objectApiName : 'Contact',
                actionName : 'new'
            },
            state : { 
                defaultFieldValues : defaultValues
            }
        })
    }

    navigateToListView(){
        this[NavigationMixin.Navigate]({ 
            type : 'standard__objectPage',
            attributes : { 
                objectApiName : 'Account',
                actionName : 'list'
            },
            state : { 
                filterName : '00BN0000007O2Z9MAK' // All or specify 'Recent'
            }
        })
    }

    navigateToFiles(){
        this[NavigationMixin.Navigate]({ 
            type : 'standard__objectPage',
            attributes : { 
                objectApiName : 'ContentDocument',
                actionName : 'home'
            }
        })
    }
}