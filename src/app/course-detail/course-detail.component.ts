import { Course } from '../course';
import { Component } from '@angular/core';


import { Input } from '@angular/core';
@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.css'
})
export class CourseDetailComponent {

  @Input() course: Course;
}
