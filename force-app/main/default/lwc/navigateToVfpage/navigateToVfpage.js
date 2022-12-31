import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'
export default class NavigateToVfpage extends NavigationMixin(LightningElement) {
    navigateToVFPage(){
        this[NavigationMixin.Navigate]({ 
            type : 'standard__webPage',
            attributes : { 
                url : '/apex/navigateVfPage'
            }
        }).then(generatedURL => { 
            console.log(generatedURL)
            window.open(generatedURL)
        })
    }
}


/*
this[NavigationMixin.Navigate]({ 
            type : 'standard__webPage',
            attributes : { 
                url : '/apex/navigateVfPage'
            }
        })

The above code returns a Promise, in order to listen Promise we use .then() method
*/