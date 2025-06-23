public with sharing class MemberController {
     @AuraEnabled(cacheable=true)
     public static List<Member__c> getMembers(){
        return [SELECT Member_ID__c ,Name,Flat_Number__c,Total_Maintenance_Paid__c FROM Member__c];
     }
}