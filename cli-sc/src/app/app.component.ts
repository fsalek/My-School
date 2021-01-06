import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './services/authentication.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLoggedIn: boolean;
  constructor( public authService: AuthenticationService, private  router: Router) { }

  onLogout() {
    this.authService.logOut();
    this.router.navigateByUrl('/login');
  }

  onRegister() {
  }

  isAdmin() {
    return this.authService.isAdmin();
  }
  isUser() {
    return this.authService.isUser();
  }
  isAuthenticated() {
    return this.authService.isAuthenticated();
  }
}
