import { Injectable } from '@angular/core';
import {Referent} from '../models/referent';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ReferentService {
  referents: Referent[];
  apiUrl = 'http://localhost:8080/apisc/referents';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private  authService: AuthenticationService) {
    this.referents = [];
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
  getReferents(): Observable<Referent[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<Referent[]>(this.apiUrl,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  getOneReferent(id: number): Observable<Referent> {
    return this.http.get<Referent>(this.apiUrl + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addReferent(referent: Referent) {
    return this.http.post<Referent>(this.apiUrl ,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  updateReferent(referent: Referent) {
    return this.http.put<Referent>(this.apiUrl + '/' + referent.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteReferent(id: number): Observable<Referent> {
    return this.http.delete<Referent>(this.apiUrl + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
