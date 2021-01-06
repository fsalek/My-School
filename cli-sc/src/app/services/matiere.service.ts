import { Injectable } from '@angular/core';
import {Matiere} from '../models/matiere';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MatiereService {
  matieres: Matiere[];
  apiURL = 'http://localhost:8080/apisc/matieres';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private  authService: AuthenticationService) {
    this.matieres = [];
  }
  getOneMatiere(id: number): Observable<Matiere> {
    return this.http.get<Matiere>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addMatiere(matiere: Matiere) {
    return this.http.post<Matiere>(this.apiURL ,
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
  getMatieres(): Observable<Matiere[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<Matiere[]>(this.apiURL,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateMatiere(matiere: Matiere) {
    return this.http.put<Matiere>(this.apiURL + '/' + matiere.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteMatiere(id: number): Observable<Matiere> {
    return this.http.delete<Matiere>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
