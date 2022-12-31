import { LightningElement, api } from 'lwc';

export default class P2cChildComponent extends LightningElement {
    @api number1
    @api number2
    @api heading
    calc
    res
    resultedString
    
    Calculate(event){
        this.calc = event.target.name

        if(this.calc === 'Sum'){
            this.res = parseInt(this.number1) + parseInt(this.number2)
        } else if(this.calc === 'Sub'){
            this.res = parseInt(this.number1) - parseInt(this.number2)
        } else if(this.calc === 'Mul'){
            this.res = parseInt(this.number1) * parseInt(this.number2)
        } else if(this.calc === 'Div'){
            this.res = parseInt(this.number1) / parseInt(this.number2)
        }
        this.resultedString = `The Sum of ${this.number1} & ${this.number2} is : ${this.res}`
    }
}