import { Component, OnInit } from '@angular/core';
import {AppUser} from '../../../models/app-user';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {Classe} from '../../../models/classe';
import {UserService} from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: AppUser[];
  isLoading: boolean;
  constructor(private userService: UserService, private router: Router, private authService: AuthenticationService) { }
  ngOnInit() {
    this.isLoading = true;
    this.userService.getUsers()
      .subscribe((data: AppUser[]) => {
        this.users = data;
        this.isLoading = false;
      }, error => {
        this.authService.logOut();
        this.router.navigateByUrl('/home');
      });
  }
  deleteUsere(id: number): void {
    this.isLoading = true;
    this.userService.deleteUser(id).subscribe(then => {
       this.userService.getUsers().subscribe((data: AppUser[]) => {
         this.users = data;
         this.isLoading = false;
       });
     });
  }

}
