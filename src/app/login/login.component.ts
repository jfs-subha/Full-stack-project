import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {first} from 'rxjs/operators';
// import {AuthenticationService} from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  invalidLogin = false;
  // constructor(private formBuilder: FormBuilder, private router: Router, private authService: AuthenticationService) { }
constructor(private formBuilder: FormBuilder, private router: Router) { }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
// tslint:disable-next-line: max-line-length
    if ((this.loginForm.controls.email.value === 'maker@mail.com' && this.loginForm.controls.password.value === 'maker')||(this.loginForm.controls.email.value === 'checker@mail.com' && this.loginForm.controls.password.value === 'checker')) {
        this.router.navigate(['list-user']);
        } else{
      this.invalidLogin = true;
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}
