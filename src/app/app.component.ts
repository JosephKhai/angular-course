import { Component } from '@angular/core';
import { COURSES } from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;
  course = COURSES[0];
  startDate = new Date(2000, 0, 1)
  title = COURSES[0].description;
  price = 9.999999;
  rate = 0.67

  onCourseSelected(course: Course) {
    console.log("course", course);
  }


}
