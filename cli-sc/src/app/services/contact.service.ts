import { Injectable } from '@angular/core';
import {Contact} from '../models/contact';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contacts: Contact[];
  apiUrl = 'http://localhost:8080/apisc/contacts';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private  authService: AuthenticationService) {
    this.contacts = [];
  }
  handleError(error) {
    let errorMessage = '';
    if ( error.error instanceof ErrorEvent ) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
  getContacts(): Observable<Contact[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<Contact[]>(this.apiUrl,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getOneContact(id: number): Observable<Contact> {
    return this.http.get<Contact>(this.apiUrl + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addContact(contact: Contact) {
    return this.http.post<Contact>(this.apiUrl ,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  updateContact(contact: Contact) {
    return this.http.put<Contact>(this.apiUrl + '/' + contact.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteContact(id: number): Observable<Contact> {
    return this.http.delete<Contact>(this.apiUrl + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
