import { Component } from '@angular/core';
import { softSkills } from './soft-skills';

@Component({
  selector: 'app-soft-skills',
  templateUrl: './soft-skills.component.html',
  styleUrls: ['./soft-skills.component.scss'],
})
export class SoftSkillsComponent {
  softSkills = softSkills;
}
