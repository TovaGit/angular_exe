import { Time } from "@angular/common";

export class Student{
    id:number=0;
    firstName:string='';
    lastName:string='';
    adress:string='';
    phone:string='';
    active:boolean=false;
    avg:number=0;
    leaveDate?: Date = new Date();}