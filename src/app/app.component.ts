import { Component } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
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

  constructor(private sanitizer: DomSanitizer) {}

  getSketchBackgroundImageStyle(url: string): SafeStyle {
    const style = `url('${url}')`;
    const safeStyle = this.sanitizer.bypassSecurityTrustStyle(style);
    return safeStyle;
  }
}
