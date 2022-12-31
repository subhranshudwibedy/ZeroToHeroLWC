import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {
    num1
    num2
    childHeading = 'Calculator using Primitive Data Types'
    name
    ChangeHandler(event){
        this.name = event.target.name
        if(this.name === 'num1'){
            this.num1 = event.target.value
        } else if(this.name === 'num2') {
            this.num2 = event.target.value
        }
    }

    carousel = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description.",
            alternativetext : "First card accessible description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description.",
            alternativetext : "Second card accessible description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "Third Card",
            description : "Third card description.",
            alternativetext : "Third card accessible description."
        }
    ]

    percentage = 10
    ProgressHandler(event){
        this.percentage = event.target.value
    }

    handleChange(){
        this.template.querySelector('c-p2c-slider-component').resetSlider()
    }
}