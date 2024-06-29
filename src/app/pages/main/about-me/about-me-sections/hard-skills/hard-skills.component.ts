import { Component } from '@angular/core';
import { hardSkills } from './hard-skills';

@Component({
  selector: 'app-hard-skills',
  templateUrl: './hard-skills.component.html',
  styleUrls: ['./hard-skills.component.scss'],
})
export class HardSkillsComponent {
  COM = 'HardSkillsComponent';
  hardSkills = hardSkills;
}
