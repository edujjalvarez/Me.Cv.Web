import { Component } from '@angular/core';
import { langSkills } from './lang-skills';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss'],
})
export class LanguagesComponent {
  langSkills = langSkills;
}
