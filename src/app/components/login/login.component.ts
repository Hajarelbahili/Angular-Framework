import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], // Fixed typo: 'styleUrl' -> 'styleUrls'
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  errorMessage: string | undefined; // Corrected type to `string | undefined`

  constructor(
    private fb: FormBuilder,
    private route: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Add form validation: required fields
    this.formLogin = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  handleLogin() {
    if (this.formLogin.invalid) {
      this.errorMessage = 'Please enter both username and password.';
      return; // Prevent submission if form is invalid
    }

    let username = this.formLogin.value.username;
    let password = this.formLogin.value.password;

    // Encode password to base64 if needed
    let encodedPassword = btoa(password);

    // Call authService to handle login
    this.authService
      .login(username, encodedPassword)
      .then((resp) => {
        this.route.navigateByUrl('/admin');
      })
      .catch((error) => {
        // Provide user-friendly error message
        this.errorMessage = 'Invalid username or password.';
      });
  }
}
