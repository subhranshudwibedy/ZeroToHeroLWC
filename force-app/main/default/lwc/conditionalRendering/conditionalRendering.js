import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    clickedButtonLabel = 'Show Data'
    isVisible = false
    name
    showTextHandler(event){
        const label = event.target.label

        if(label === 'Show Data'){
            this.clickedButtonLabel = 'Hide Data'
            this.isVisible = true
        } else if(label === 'Hide Data'){
            this.clickedButtonLabel = 'Show Data'
            this.isVisible = false
        }
    }

    changeHandler(event){
        this.name = event.target.value
    }

    get helloMethod(){
        return this.name === 'hello'
    }
}