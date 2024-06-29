import { Component } from '@angular/core';
import { educations } from './educations';

@Component({
  selector: 'app-educations',
  templateUrl: './educations.component.html',
  styleUrls: ['./educations.component.scss'],
})
export class EducationsComponent {
  TAG = 'EducationComponent';
  educations = educations;
}
