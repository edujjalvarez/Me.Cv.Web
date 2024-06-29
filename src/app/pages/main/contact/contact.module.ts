import { NgModule } from '@angular/core';

import { ContactRoutingModule } from './contact-routing.module';
import { ContactComponent } from '../contact/contact.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RecaptchaFormsModule, RecaptchaModule } from 'ng-recaptcha';
import { EmailService } from 'src/app/services/emails/email.service';

@NgModule({
  declarations: [ContactComponent],
  imports: [
    SharedModule,
    ContactRoutingModule,
    MatButtonModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatSnackBarModule,
    RecaptchaModule, //this is the recaptcha main module
    RecaptchaFormsModule, //this is the module for form incase form validation
  ],
  providers: [EmailService],
})
export class ContactModule {}
