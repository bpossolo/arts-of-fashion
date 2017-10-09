import { Component } from '@angular/core';
import * as studentData from '../assets/json/students.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  students = studentData;
}
