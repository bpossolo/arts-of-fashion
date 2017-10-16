import { Component, ElementRef, ViewChild } from '@angular/core';
import { SafeStyle, DomSanitizer } from '@angular/platform-browser';
import * as studentData from '../assets/json/students.json';
import * as judgeData from '../assets/json/judges.json';

interface Student {
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  students = studentData;
  judges = judgeData;

  @ViewChild('teaser')
  videoEl: ElementRef;

  playing = false;

  constructor(private sanitizer: DomSanitizer) {}

  playVideo(): void {
    const video = this.getVideoEl();
    video.play();
    this.playing = true;
  }

  onVideoEnded(): void {
    this.playing = false;
    const video = this.getVideoEl();
    video.load();
  }

  getSketchBackgroundImageStyle(student: Student): SafeStyle {
    const url = student.image;
    const style = `url('${url}')`;
    const safeStyle = this.sanitizer.bypassSecurityTrustStyle(style);
    return safeStyle;
  }

  private getVideoEl(): HTMLVideoElement {
    return this.videoEl.nativeElement as HTMLVideoElement;
  }
}
