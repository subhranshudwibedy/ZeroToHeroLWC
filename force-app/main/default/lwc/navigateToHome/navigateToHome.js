import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation'

export default class NavigateToHome extends NavigationMixin(LightningElement) {

    homeHandler(){ 
        this[NavigationMixin.Navigate]({ 
            type : 'standard__namedPage',
            attributes : { 
                pageName : 'home'
            }
        })
    }

    chatterHandler(){ 
        this[NavigationMixin.Navigate]({ 
            type : 'standard__namedPage',
            attributes : { 
                pageName : 'chatter'
            }
        })
    }    
}