import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../student-list/student-list.model';
import { FormsModule } from '@angular/forms'; // חובה לשימוש ב-[(ngModel)]

@Component({
  selector: 'app-students-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentsDetailsComponent {

  @Input()
dStudent:Student| null = null;


@Output()
onSaveNewStudent: EventEmitter<Student> = new EventEmitter();

saveNewStudent() {
  this.onSaveNewStudent.emit();
}

}