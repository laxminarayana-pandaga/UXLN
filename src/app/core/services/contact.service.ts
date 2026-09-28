import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { ContactMessage, ContactResult } from '../models/portfolio.models';

@Injectable({ providedIn: 'root' })
export class ContactService {
  /**
   * Sends a contact message.
   *
   * Currently simulated on the client — nothing leaves the browser.
   * Components depend only on this method's signature, so swapping in a real
   * transport (e.g. `HttpClient.post`) requires no component changes.
   */
  submitContactForm(message: ContactMessage): Observable<ContactResult> {
    // TODO: Connect contact form to backend/email service
    void message;
    return of({ ok: true, message: 'Thanks — your message has been received.' }).pipe(delay(700));
  }
}
