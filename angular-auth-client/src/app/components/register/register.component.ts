import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/utils/custom.validations';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  nameInput: FormControl;
  emailInput: FormControl;
  passwordInput: FormControl;
  passwordConfirmationInput: FormControl;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {
    this.nameInput = new FormControl('', [Validators.required]);
    this.emailInput = new FormControl('', [Validators.required, Validators.email]);
    this.passwordInput = new FormControl('', [Validators.required]);
    this.passwordConfirmationInput = new FormControl('', [Validators.required]);
    this.registerForm = new FormGroup({
      name: this.nameInput,
      email: this.emailInput,
      password: this.passwordInput,
      passwordConfirmation: this.passwordConfirmationInput
    }, [CustomValidators.passwordMatch]);
  }

  ngOnInit(): void {
  }

  register() {
    this.authService.register(this.registerForm.value.name, this.registerForm.value.email, this.registerForm.value.password).subscribe(
      (user: User) => {
        alert('Register successful');
        console.log(user);

        // Redirect to home page
        this.router.navigate(['/login']);
      },
      (error) => {
        alert('Register failed');
        console.log(error);
      }
    );
  }


}
