import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  currentYear: number = new Date().getFullYear();
  lang = '';

  constructor(
    private translateService: TranslateService,
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.loadLanguage();
    this.addSvgIcons();
  }

  loadLanguage(): void {
    const appLanguage = localStorage.getItem('AppLanguage');
    if (appLanguage == null) {
      const browserLang = this.translateService.getBrowserLang();
      this.lang = browserLang?.match(/en|es/) ? browserLang : 'en';
    } else {
      this.lang = appLanguage;
    }
    this.translateService.use(this.lang);
  }

  addSvgIcons(): void {
    this.matIconRegistry.addSvgIcon(
      'argentina',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './../assets/icons/flags/argentina.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'united_kingdom',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        './../assets/icons/flags/united_kingdom.svg'
      )
    );
  }

  changeLanguage(lang: string): void {
    this.lang = lang;
    this.translateService.use(this.lang);
    localStorage.setItem('AppLanguage', lang);
  }
}
