import { Component } from '@angular/core';
import { CourseService } from '../course.service';
import { MOCKCOURSES } from '../mock-courses';
import { Course } from '../course';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  courses: Course[];  
  selectedCourse : Course;
  
  constructor(private CourseService: CourseService){

  }

  ngOnInit() {
    this.getCourses();
  }

  onSelect (course: Course): void{
    this.selectedCourse = course;
  }

  getCourses() : void {
    this.CourseService.getCourses().subscribe(courses => this.courses=courses);
  }

}
