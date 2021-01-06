import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Professeur} from '../models/professeur';
import {catchError, retry} from 'rxjs/operators';
import {AuthenticationService} from './authentication.service';
@Injectable({
  providedIn: 'root'
})
export class ProfesseurService {
  professeurs: Professeur[];
  apiURL = 'http://localhost:8080/apisc/professeurs';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private  authService: AuthenticationService) {
    this.professeurs = [];
  }
  getOneProfesseur(id: number): Observable<Professeur> {
    return this.http.get<Professeur>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addProfesseur(professeur: Professeur) {
    return this.http.post<Professeur>(this.apiURL ,
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
  getProfesseurs(): Observable<Professeur[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<Professeur[]>(this.apiURL,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateProfesseur(professeur: Professeur) {
    return this.http.put<Professeur>(this.apiURL + '/' + professeur.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteProfesseur(id: number): Observable<Professeur> {
    return this.http.delete<Professeur>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  uploadPhotoProfesseur(file: File, id): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.apiURL + '/uploadPhoto/' + id, formData, {
      reportProgress: true,
      responseType: 'text'
    });
    return this.http.request(req);
  }
}
