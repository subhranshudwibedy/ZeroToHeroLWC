import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub'
export default class PubsubComponentA extends LightningElement {
    firstName
    lastName
    FullName
    name
    HandleChange(event){
        this.name = event.target.name
        if(this.name === 'FirstName'){
            this.firstName = event.target.value
        } else if(this.name === 'SecondName'){
            this.lastName = event.target.value
        }
    }
    
    SubmitHandler(){
        this.FullName = this.firstName + ' ' + this.lastName
        pubsub.publish('ComponentA',this.FullName)
    }
}