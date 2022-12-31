import { LightningElement, api } from 'lwc';

export default class SetterChildA extends LightningElement {
    userDetail

    @api
    get detail(){
        return this.userDetail
    }
    set detail(data){
        let newAge = data.Age * 2
        this.userDetail = {...data, Age:newAge, 'Location':'Black Water'}
    }
}