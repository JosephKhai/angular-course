import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible(){
    return this.course && this.course.iconUrl
  }

  onCourseViewed(){
    console.log("card button click");
    this.courseEmitter.emit(this.course)
  }

  cardClass(){
      if(this.course.category == 'BEGINNER'){
        return 'beginner';
      }
  }

  cardStyle(){
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }

}
