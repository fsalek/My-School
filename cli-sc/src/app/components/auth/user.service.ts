import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthenticationService} from '../../services/authentication.service';
import {Observable, throwError} from 'rxjs';
import {catchError, retry} from 'rxjs/operators';
import {AppUser} from '../../models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: AppUser[];
  apiURL = 'http://localhost:8080/apiscool/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http: HttpClient, private  authService: AuthenticationService) {
    this.users = [];
  }
  getOneAppUser(id: number): Observable<AppUser> {
    return this.http.get<AppUser>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  addUser(appUser: AppUser) {
    return this.http.post<AppUser>(this.apiURL ,
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
  getUsers(): Observable<AppUser[]> {
    if (this.authService.jwtToken == null) { this.authService.loadToken(); }
    return this.http.get<AppUser[]>(this.apiURL,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
  updateUser(appUser: AppUser) {
    return this.http.put<AppUser>(this.apiURL + '/' + appUser.id,
      this.httpOptions, {headers: new HttpHeaders({Authorization: this.authService.jwtToken})}).pipe(
      catchError(this.handleError)
    );
  }
  deleteUser(id: number): Observable<AppUser> {
    return this.http.delete<AppUser>(this.apiURL + '/' + id,
      {headers: new HttpHeaders({Authorization: this.authService.jwtToken})})
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }
}
