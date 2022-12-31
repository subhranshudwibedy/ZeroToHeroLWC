import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    fullName = 'Zero to Hero'
    title = 'aura'

    changeHandler(event){
        this.title = event.target.value
    }

    /***@track binding example */
    @track address = {
        city : 'Melborne',
        postcode : 3008,
        country : 'Australia'
    }

    trackHandler(event){
        this.address.city = event.target.value
    }

    /* Getter Example */
    users = ["Aurthur", "John", "Charles"]
    num1 = 10
    num2 = 20

    get firstUser(){
        return this.users[0].toUpperCase()
    }

    get multiply(){
        return this.num1 * this.num2
    }
}