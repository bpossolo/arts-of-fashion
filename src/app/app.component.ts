import { Component } from '@angular/core';
import * as studentData from '../assets/json/students.json';
import * as judgeData from '../assets/json/judges.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  students = studentData;
  judges = judgeData;
}
