import { LightningElement } from 'lwc';

export default class LifeCycleChild extends LightningElement {

    constructor(){
        super()
        console.log('Child Component Constructor')
    }

    connectedCallback(){
        console.log('Child Component connectedCallback')
    }

    renderedCallback(){
        console.log('Child Component renderedCallback')
    }
}