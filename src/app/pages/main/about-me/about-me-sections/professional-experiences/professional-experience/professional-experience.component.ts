import { Component, Input } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-professional-experience',
  templateUrl: './professional-experience.component.html',
  styleUrls: ['./professional-experience.component.scss'],
})
export class ProfessionalExperienceComponent {
  COM = 'ProfessionalExperienceComponent';
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

  get antiquity(): string {
    const antiquity = this.calculateAntiquity();
    return antiquity;
  }

  duration(): moment.Duration {
    const toDate = moment(
      this.toDate == 'common.current' ? new Date() : this.toDate
    );
    const fromDate = moment(this.fromDate);
    const duration = moment.duration(toDate.diff(fromDate));
    return duration;
  }

  get years(): number {
    return this.duration().years();
  }

  get months(): number {
    return this.duration().months();
  }

  calculateAntiquity(): string {
    let years =
      this.years > 0 ? (this.years == 1 ? `common.year` : `common.years`) : '';
    let months =
      this.months > 0
        ? this.months == 1
          ? `common.month`
          : `common.months`
        : '';
    let antiquity = 'common.error';
    switch (`${years}_${months}`) {
      case 'common.year_':
        antiquity = 'common.year';
        break;
      case 'common.years_':
        antiquity = 'common.years';
        break;
      case '_common.month':
        antiquity = 'common.month';
        break;
      case '_common.months':
        antiquity = 'common.months';
        break;
      case 'common.year_common.month':
        antiquity = 'common.year_and_month';
        break;
      case 'common.year_common.months':
        antiquity = 'common.year_and_months';
        break;
      case 'common.years_common.month':
        antiquity = 'common.years_and_month';
        break;
      case 'common.years_common.months':
        antiquity = 'common.years_and_months';
        break;
    }
    return antiquity;
  }
}
