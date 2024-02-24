import { MOCKCOURSES } from '../mock-courses';
import { Component } from '@angular/core';
import { Course } from '../course';
import { countReset } from 'console';
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {

  courses2 = MOCKCOURSES;
  
  selectedCourse : Course;

  onSelect (course: Course): void{
    this.selectedCourse = course;
  }
}
