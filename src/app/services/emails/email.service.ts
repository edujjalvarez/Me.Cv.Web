import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { SendEmailRequest } from 'src/app/models/emails/send-email-request';

@Injectable()
export class EmailService {
  TAG = 'EmailService';

  constructor(private _httpClient: HttpClient) {}

  public send(sendEmailRequest: SendEmailRequest): Observable<any> {
    const url: string = `${environment.endpoints.cv.v1}/Emails/Send`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json; charset=utf-8',
      // Authorization: `Bearer ${environment.endpoints.sendGrid.token}`,
    });
    return this._httpClient
      .post<any>(url, sendEmailRequest, {
        headers: headers,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError(this.httpError)
      );
  }

  httpError(error: any) {
    let msg = '';
    if (error.error instanceof ErrorEvent) {
      // client side error
      msg = error.error.message;
    } else {
      // server side error
      msg = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(`${this.TAG}> httpError > msg`, msg);
    return throwError(msg);
  }
}
