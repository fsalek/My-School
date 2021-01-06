import { Injectable } from '@angular/core';
import {Niveau} from '../models/niveau';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NiveauService {

  niveaux: Niveau[];
  apiURL = 'http://localhost:8080/apisc/niveaux';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private  authService: AuthenticationService) {
    this.niveaux = [];
  }
  getOneNiveau(id: number): Observable<Niveau> {
    return this.http.get<Niveau>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addNiveau(niveau: Niveau) {
    return this.http.post<Niveau>(this.apiURL ,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
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
  getNiveaux(): Observable<Niveau[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<Niveau[]>(this.apiURL,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateNiveau(niveau: Niveau) {
    return this.http.put<Niveau>(this.apiURL + '/' + niveau.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteNiveau(id: number): Observable<Niveau> {
    return this.http.delete<Niveau>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
