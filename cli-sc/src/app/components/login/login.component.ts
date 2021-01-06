import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service';
import {Router} from '@angular/router';
import {AppUser} from '../../models/app-user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  appUsers: AppUser[];
  mode = 0;
  username: string;
  password: string;

  constructor(public authService: AuthenticationService, private  router: Router) {
  }
  ngOnInit() {
    this.appUsers = [];
  }

  onLogin(appUser) {
    this.authService.login(appUser)
      .subscribe(res => {
        const jwtToken = res.headers.get('Authorization');
        this.authService.saveToken(jwtToken);
        this.router.navigateByUrl('/home');
      });
  }
}
