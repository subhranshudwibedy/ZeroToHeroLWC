import { LightningElement } from 'lwc';

export default class C2pModelComponent extends LightningElement {
    closeModal(){
        const myEvent = new CustomEvent('close', { 
            detail : { 
                message : 'Modal Closed Successfully!'
            }
        })
        this.dispatchEvent(myEvent)
    }
}