import { Injectable } from '@angular/core';
import {Eleve} from '../models/eleve';
import {HttpClient, HttpEvent, HttpHeaders, HttpRequest} from '@angular/common/http';
import {AuthenticationService} from './authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EleveService {
  eleves: Eleve[];
  apiUrl = 'http://localhost:8080/apisc/eleves';
  host = 'http://localhost:8080/apisc';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private  authService: AuthenticationService) {
    this.eleves = [];
  }
  getOneEleve(id: number): Observable<Eleve> {
    return this.http.get<Eleve>(this.apiUrl + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addEleve(eleve: Eleve) {
    return this.http.post<Eleve>(this.apiUrl ,
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
  getEleves(): Observable<Eleve[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<Eleve[]>(this.apiUrl,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateEleve(eleve: Eleve) {
    return this.http.put<Eleve>(this.apiUrl + '/' + eleve.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteEleve(id: number): Observable<Eleve> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.delete<Eleve>(this.apiUrl + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  uploadPhotoEleve(file: File, id): Observable<HttpEvent<{}>> {
    const formData: FormData = new FormData();
    formData.append('file', file);
    const req = new HttpRequest('POST', this.apiUrl + '/uploadPhoto/' + id, formData, {
      reportProgress: true,
      responseType: 'text',
      headers: new HttpHeaders({Authorization: this.authService.jwtToken})
    });
    return this.http.request(req);
  }
}
