import { LightningElement, wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c'
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from 'lightning/messageService'
export default class LmsComponentX extends LightningElement {
    recievedMessage
    subscription
    @wire(MessageContext)
    context

    // Standard lifecycle hooks used to subscribe and unsubsubscribe to the message channel
    connectedCallback(){ 
        this.subscribeToMessageChannel()
    }

    // Encapsulate logic for Lightning message service subscribe and unsubsubscribe
    subscribeToMessageChannel(){ 
        this.subscription = subscribe(this.context, SAMPLEMC, (message)=>{this.handleMessage(message)}, {scope : APPLICATION_SCOPE})
    }

    // Handler for message received by component
    handleMessage(message) {
        this.recievedMessage = message.lmsData.value ? message.lmsData.value : 'No data Received';
    }

    unsubscribeMessage(){ 
        unsubscribe(this.subscription)
        this.subscription = null
    }
}