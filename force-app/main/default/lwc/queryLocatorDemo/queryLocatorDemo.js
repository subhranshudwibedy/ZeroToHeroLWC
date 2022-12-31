import { LightningElement } from 'lwc';

export default class QueryLocatorDemo extends LightningElement {

    userNames = ['Aurthur', 'John', 'Charles', 'Abigail']

    showDetailsHandler(){
        //QuerySelector and adding Styling
        const elem = this.template.querySelector('h1')
        elem.style.border = "1px solid red";
        console.log(elem);
        console.log(elem.innerText);

        //QuerySelectorAll
        const userElements = this.template.querySelectorAll('.names');
        Array.from(userElements).forEach(element=>{
            console.log(element.innerText)
            element.setAttribute("title",element.innerText)
        })

        //lwc:dom="manual"
        const child = this.template.querySelector('.child')
        child.innerHTML = '<p>Hey I am a child element</p>'
    }
}