import { Component } from '@angular/core';
import { professionalExperiences } from './professional-experiences';

@Component({
  selector: 'app-professional-experiences',
  templateUrl: './professional-experiences.component.html',
  styleUrls: ['./professional-experiences.component.scss'],
})
export class ProfessionalExperiencesComponent {
  COM = 'ProfessionalExperiencesComponent';
  professionalExperiences = professionalExperiences;

  constructor() {}
}
