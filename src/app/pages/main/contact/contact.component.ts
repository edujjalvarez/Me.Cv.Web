import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NgxSpinnerService } from 'ngx-spinner';
import { Email } from 'src/app/models/emails/email.model';
import { SendEmailRequest } from 'src/app/models/emails/send-email-request';
import { EmailService } from 'src/app/services/emails/email.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  TAG = 'ContactComponent';
  formGroup: FormGroup;
  // emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  siteKey: string;

  constructor(
    private _formBuilder: FormBuilder,
    private _spinner: NgxSpinnerService,
    private _matSnackBar: MatSnackBar,
    private _emailService: EmailService
  ) {
    this.formGroup = this.createFormGroup();
    this.siteKey = environment.reCaptcha.siteKey;
    console.log(`${this.TAG} > constructor > this.siteKey`, this.siteKey);
  }

  createFormGroup(): FormGroup {
    const formGroup = this._formBuilder.group({
      to: [
        {
          value: null,
          disabled: false,
        },
        [
          Validators.required,
          Validators.email,
          // Validators.pattern(this.emailPattern),
        ],
      ],
      subject: [
        {
          value: null,
          disabled: false,
        },
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(128),
        ],
      ],
      body: [
        {
          value: null,
          disabled: false,
        },
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(1024),
        ],
      ],
      reCaptcha: [
        {
          value: null,
          disabled: false,
        },
        [Validators.required],
      ],
    });
    return formGroup;
  }

  onResolved($event: string): void {
    console.log(`${this.TAG} > onResolved > $event`, $event);
  }

  send(): void {
    console.log(
      `${this.TAG} > send > this.formGroup.errors`,
      this.formGroup.errors
    );
    console.log(
      `${this.TAG} > send > this.formGroup.get('subject')`,
      this.formGroup.get('subject')?.errors
    );
    this._spinner.show();
    const email: Email = this.formGroup.getRawValue();
    email.body += `<br><br>Email de contacto: ${email.to}`;
    email.to = 'edujjalvarez@gmail.com';
    console.log(`${this.TAG} > send > email`, email);
    const sendEmailRequest: SendEmailRequest = {
      email: email,
    };
    console.log(`${this.TAG} > send > sendEmailRequest`, sendEmailRequest);
    this._emailService.send(sendEmailRequest).subscribe({
      next: (response) => {
        console.log(`${this.TAG} > send > response`, response);
        this.formGroup.reset();
        this._spinner.hide();
        this._matSnackBar.open('Message sending successfully', undefined, {
          duration: 5000,
          panelClass: 'mat-snack-bar-bg-success',
        });
      },
      error: (error) => {
        console.error(`${this.TAG} > send > error`, error);
        this._spinner.hide();
        this._matSnackBar.open('An error occurred sending message', undefined, {
          duration: 5000,
          panelClass: 'mat-snack-bar-bg-error',
        });
      },
    });
  }
}
