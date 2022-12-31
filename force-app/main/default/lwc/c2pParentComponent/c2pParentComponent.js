import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {
    msg
    showModal = false
    HandleClick(){
        this.showModal = true
    }

    closeHandler(event){
        this.msg = event.detail.message
        this.showModal = false
    }
}