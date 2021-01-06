import { Component, OnInit } from '@angular/core';
import {AppUser} from '../../models/app-user';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/authentication.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  appUser: AppUser;
  submitted = false;
  form: any = {};

  constructor(private authService: AuthenticationService, public fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.infoForm();
  }


  infoForm() {
    this.authService.dataForm = this.fb.group({
      id: null,
      username: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onRegister() {
    const val = this.authService.dataForm.value;
    if (val.password === val.repassword) {
      this.addData();
    } else {
      // this.toastr.warning( 'Check your password please');
    }
    /*this.authService.register(this.appUser).subscribe(then => {
      this.router.navigateByUrl('/home');
    });*/
  }
  addData() {
    this.authService.createData(this.authService.dataForm.value).
    subscribe( data => {
      // this.toastr.success( 'Validation Faite avec Success');
      this.router.navigate(['/my-scool']);
    });
  }
  onReset() {
    this.submitted = false;
    this.form.reset();
  }

  }
