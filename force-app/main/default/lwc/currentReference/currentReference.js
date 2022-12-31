import { LightningElement, wire, api } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation'
export default class CurrentReference extends LightningElement {

    @wire(CurrentPageReference)
    pageRef

    @api get pageReference(){
        return this.pageRef ? JSON.stringify(this.pageRef, null, 2) : ''
    }
}