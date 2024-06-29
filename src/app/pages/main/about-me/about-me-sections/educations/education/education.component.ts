import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss'],
})
export class EducationComponent {
  COM = 'EducationComponent';
  @Input() title: string;
  @Input() fromDate: string;
  @Input() toDate: string;
  @Input() description: string;

  constructor() {
    this.title = 'Untitled';
    this.fromDate = '';
    this.toDate = '';
    this.description = '';
  }
}
