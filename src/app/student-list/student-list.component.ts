import { Component } from '@angular/core';
import { Student } from './student-list.model';

@Component({
  selector: 'app-students',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentsComponent {

  students:Student[]=[{id:1,firstName:"Joe",lastName:"Black",adress:"A",phone:"0552645858",active:false,avg:85,leaveDate:new Date('2024-11-20')},
    {id:2,firstName:"Key",lastName:"Novok",adress:"B",phone:"0523655858",active:true,avg:98},
    {id:3,firstName:"Bro",lastName:"Gasiy",adress:"C",phone:"0122147874",active:true,avg:95}]

  deletStudent(id:number){
    let index=this.students.findIndex(student => student.id === id);
    this.students.splice(index,1);
  }
  selectedStudent: Student | null = null;
  editStudent(selectedStudent:Student)
  {
    this.selectedStudent=selectedStudent;
  }
  addStudent(st:Student)
  {
    let found=this.students.findIndex(student=>student.id===st.id)
    if(found==-1){
      this.students.push(st);
      console.log(this.students)
    }
    else
    {
      this.students[found]=st;
    }
  }
  addNewStudent() {
    this.selectedStudent = { id: 0, firstName: '', lastName: '', adress: '', phone: '', active: false, avg: 0 };
  }
  
  
}