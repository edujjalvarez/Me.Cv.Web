export class Email {
  to: string | null;
  subject: string | null;
  body: string | null;
  reCaptcha: string | null;

  constructor() {
    this.to = null;
    this.subject = null;
    this.body = null;
    this.reCaptcha = null;
  }
}
