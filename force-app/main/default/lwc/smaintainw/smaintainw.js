import { LightningElement } from 'lwc';

export default class Smaintainw extends LightningElement {
    currentStep='1';
    handleClick(event)
    {
        this.currentStep=event.target.value;
    }
   get isstepOne()
   {
    return this.currentStep==="1";
   }
   get isstepTwo()
   {
    return this.currentStep==="2";
   }
   get isstepThree()
   {
    return this.currentStep==="3";
   }
   handleback()
   {
    if(this.currentStep==="3")
    {
       this.currentStep="2";
    }
    else if(this.currentStep==="2")
    {
        this.currentStep="1";
    }
   }
   handleNext()
   {
    if(this.currentStep==="1")
    {
        this.currentStep="2";
        alert('click next button ,page will redirect');
    }
    else if(this.currentStep==="2")
        {
        this.currentStep="3";
    }
   }
   handlefinish()
   {
    alert('thanks your record is save');
   }
   get isEnablePrev()
   {
    return this.currentStep!=="1";
   }
   get isEnableNext()
   {
    return this.currentStep!=="3";
   }
   get isEnableFinish()
   {
    return this.currentStep==="3";
   }
}