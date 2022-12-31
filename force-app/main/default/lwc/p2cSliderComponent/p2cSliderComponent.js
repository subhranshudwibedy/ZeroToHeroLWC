import { LightningElement, api } from 'lwc';

export default class P2cSliderComponent extends LightningElement {
    myValue = 10

    handleChange(event){
        this.myValue = event.target.value
    }

    @api resetSlider(){
        this.myValue = 50
    }
}