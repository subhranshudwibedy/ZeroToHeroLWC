import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentB extends LightningElement {
    showFullName
    
    connectedCallback(){
        this.callSubscriber()
    }

    callSubscriber(){
        pubsub.subscribe('ComponentA', (FullName) => { 
            this.showFullName = FullName
        })
    }
}