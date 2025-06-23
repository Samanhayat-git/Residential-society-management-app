import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class Smaintainmemcakkw extends LightningElement {
    recordId;
    handleSuccess()
    {

    }
    handleSubmit()
    {

this.dispatchEvent(
    new ShowToastEvent({
        title:"Maintenance Record Successfully",
        message:"",
        variant:"success"
    })
);
    }
}