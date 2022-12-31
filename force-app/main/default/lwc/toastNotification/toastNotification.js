import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'
export default class ToastNotification extends LightningElement {
    toastHandlerOne(){
        this.showToast("Success!!", "{0} Account Created Successfully! {1}", "success")
    }

    toastHandlerTwo(){
        this.showToast("Error!!", "Account Creation Failed!!", "error")
    }

    toastHandlerThree(){
        this.showToast("Warning!!", "Password should have 15 characters!!", "warning")
    }

    toastHandlerFour(){
        this.showToast("Info!!", "Spring 23 will going to release in Jan 2023", "info")
    }

    showToast(title, message, variant){
        const event = new ShowToastEvent({ 
            title,
            message,
            variant,
            messageData : [
                'Salesforce', { 
                    url : 'https://developer.salesforce.com',
                    label : 'Click Here' 
                }
            ],
            mode : 'dismissable'
        })
        this.dispatchEvent(event)
    }
}