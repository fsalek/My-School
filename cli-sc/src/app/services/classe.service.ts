import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {Classe} from '../models/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {
  classes: Classe[];
  apiURL = 'http://localhost:8080/apisc/classes';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private  authService: AuthenticationService, private http: HttpClient) {
    this.classes = [];
  }
  getOneClasse(id: number): Observable<Classe> {
    return this.http.get<Classe>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addClasse(classe: Classe) {
    return this.http.post<Classe>(this.apiURL ,
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
  getClasses(): Observable<Classe[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<Classe[]>(this.apiURL,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateClasse(classe: Classe) {
    return this.http.put<Classe>(this.apiURL + '/' + classe.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteClasse(id: number): Observable<Classe> {
    return this.http.delete<Classe>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
