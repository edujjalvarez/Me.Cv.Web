import { AfterViewChecked, ChangeDetectorRef, Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import * as moment from 'moment';

@Component({
  selector: 'app-personal-information',
  templateUrl: './personal-information.component.html',
  styleUrls: ['./personal-information.component.scss'],
})
export class PersonalInformationComponent implements AfterViewChecked {
  COM = 'PersonalInformationComponent';
  age = moment().diff('1986-03-13', 'years');
  countryStateTooltip = '';

  constructor(
    private translateService: TranslateService,
    private changeDetectorRef: ChangeDetectorRef
  ) {}

  ngAfterViewChecked(): void {
    this.translateService
      .get('sections.personal_info.country_state')
      .subscribe((value: string) => {
        console.log(`${this.COM} > ngAfterViewInit > value`, value);
        this.countryStateTooltip = value;
        this.changeDetectorRef.detectChanges();
      });
  }
}
