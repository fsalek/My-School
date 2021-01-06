import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';
import {Niveau} from '../models/niveau';
import {AppUser} from '../models/app-user';
import {FormGroup} from '@angular/forms';
import {AppRole} from '../models/app-role';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  appUsers: AppUser[];
  jwtToken: string;
  private roles: Array<string> = [];
  public isAuthentecated: boolean;
  public userAuthentecated;
  public dataForm: FormGroup;
  private usename: string;

  apiUrl = 'http://localhost:8080/apisc';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

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
  constructor(private http: HttpClient ) {
    this.appUsers = [];
  }
  login(appUser: AppUser) {
    return this.http.post<AppUser>(this.apiUrl + '/login', appUser, {observe: 'response'}
    );
  }
  logOut() {
    this.jwtToken = null;
    localStorage.removeItem('token');
  }
  saveToken(jwtToken: string) {
    localStorage.setItem('token', jwtToken);
    this.jwtToken = jwtToken;
    this.parseJwt();
  }
  parseJwt() {
    const jwtHelper = new JwtHelperService();
    const objJwt = jwtHelper.decodeToken(this.jwtToken);
    this.usename = objJwt.obj;
    this.roles = objJwt.roles;
  }
  loadToken() {
    this.jwtToken = localStorage.getItem('token');
    return this.jwtToken;
  }
  createUser(appUser: AppUser) {
    return this.http.post(this.apiUrl + '/register', appUser);
  }
  createData(info: object): Observable<object> {
    return this.http.post(this.apiUrl + '/register', info, this.httpOptions);
  }

  isAdmin() {
    return this.roles.indexOf('ADMIN') >= 0;
  }
  /*isAdmin() {
  if (this.isAuthentecated) {
      if (this.userAuthentecated.roles.indexOf('ADMIN') > -1 ) {
        return true;
      }
      return  false;
    }
  }*/
  isUser() {
    return this.roles.indexOf('USER') >= 0;
  }
  isAuthenticated() {
     return this.roles && (this.isAdmin() || this.isUser());
  }
  /*isUser() {
    for (const rol of this.roles) {
      if (rol.roleName === 'USER') {
        return true;
      }
    }
    return  false;
  }*/
}
