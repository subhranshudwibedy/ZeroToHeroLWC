import { LightningElement } from 'lwc';

export default class LifeCycleParent extends LightningElement {

    constructor(){
        super()
        console.log('Parent Component Constructor')
    }

    connectedCallback(){
        console.log('Parent Component connectedCallback')
    }

    renderedCallback(){
        console.log('Parent Component renderedCallback')
    }

    name
    changeHandler(event){
        this.name = event.target.value
    }
}