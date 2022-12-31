import { LightningElement } from 'lwc';

export default class ShowFullName extends LightningElement {
    FirstName
    LastName
    FullName

    changeHandler(event){
        const name = event.target.name
        if(name === 'FirstName'){
            this.FirstName = event.target.value
        } else if(name === 'LastName'){
            this.LastName = event.target.value
        }
    }

    showFullName(){
        this.FullName = this.FirstName + ' ' + this.LastName
    }
}