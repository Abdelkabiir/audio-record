import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isRecording = false;
  constructor(private router: Router) {
  }

  ngOnInit() {}

  record() {
    // this.router.navigate(['record']);
    this.isRecording = true;
  }

  recordingStoped() {
    this.isRecording = false;
  }
}
