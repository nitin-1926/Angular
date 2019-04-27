import { Component, OnInit } from '@angular/core';
//import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.css']
})
export class CourseListComponent implements OnInit {
  courses = [
    {courseId: 1, courseName: "Node JS"},
    {courseId: 2, courseName: "Typescript"},
    {courseId: 3, courseName: "Angular"},
    {courseId: 4, courseName: "React JS"}
  ];
  constructor(){

  }
  ngOnInit(){

  }
}
