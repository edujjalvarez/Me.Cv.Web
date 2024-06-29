import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss'],
})
export class SkillComponent {
  TAG = 'SkillComponent';
  @Input() title: string;
  @Input() color: string;
  @Input() percent: number;

  constructor() {
    this.title = 'Untitled';
    this.color = '#33373d';
    this.percent = 70;
  }
}
