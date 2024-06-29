import { NgModule } from '@angular/core';
import { CvSummaryComponent } from './cv-summary/cv-summary.component';
import { PersonalInformationComponent } from './personal-information/personal-information.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { SharedModule } from 'src/app/shared/shared.module';
import { HardSkillsComponent } from './hard-skills/hard-skills.component';
import { SkillComponent } from './skill/skill.component';
import { SoftSkillsComponent } from './soft-skills/soft-skills.component';
import { ProfessionalExperiencesComponent } from './professional-experiences/professional-experiences.component';
import { ProfessionalExperienceComponent } from './professional-experiences/professional-experience/professional-experience.component';
import { MatIconModule } from '@angular/material/icon';
import { EducationsComponent } from './educations/educations.component';
import { EducationComponent } from './educations/education/education.component';
import { CoursesComponent } from './courses/courses.component';
import { LanguagesComponent } from './languages/languages.component';
import { AboutThisCvComponent } from './about-this-cv/about-this-cv.component';

@NgModule({
  declarations: [
    CvSummaryComponent,
    PersonalInformationComponent,
    SkillComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProfessionalExperiencesComponent,
    ProfessionalExperienceComponent,
    EducationsComponent,
    EducationComponent,
    CoursesComponent,
    LanguagesComponent,
    AboutThisCvComponent,
  ],
  imports: [SharedModule, MatIconModule, MatTooltipModule],
  exports: [
    CvSummaryComponent,
    PersonalInformationComponent,
    SkillComponent,
    HardSkillsComponent,
    SoftSkillsComponent,
    ProfessionalExperiencesComponent,
    ProfessionalExperienceComponent,
    EducationsComponent,
    EducationComponent,
    CoursesComponent,
    LanguagesComponent,
    AboutThisCvComponent,
  ],
})
export class AboutMeSectionsModule {}
