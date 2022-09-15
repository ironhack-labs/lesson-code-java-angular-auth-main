import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  emailInput: FormControl;
  passwordInput: FormControl
  externalErrorMsg: string;

  constructor(
    private router: Router
  ) {
    this.emailInput = new FormControl('', [Validators.required, Validators.email]);
    this.passwordInput = new FormControl('', [Validators.required]);
    this.loginForm = new FormGroup({
      email: this.emailInput,
      password: this.passwordInput
    });
    this.externalErrorMsg = '';
  }

  ngOnInit(): void {
  }

  login() {
    // Attempt to login
  }

  clearErrorMsg() {
    this.externalErrorMsg = '';
  }
}
