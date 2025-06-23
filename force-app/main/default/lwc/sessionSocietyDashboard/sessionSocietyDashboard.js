import { LightningElement ,track} from 'lwc';
import getMembers from '@salesforce/apex/MemberController.getMembers';
export default class SessionSocietyDashboard extends LightningElement {
    @track Members=[];
     showMember=false;
    getMember()
    {
        getMembers()
        .then(result=>{
            this.Members=result;
            this.showMember=true;
          }
        ) 
        .catch(error=>{
            console.error(error);
        });
    }
}