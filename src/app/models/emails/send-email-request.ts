import { Email } from './email.model';

export class SendEmailRequest {
  email: Email | null;

  constructor() {
    this.email = null;
  }
}
