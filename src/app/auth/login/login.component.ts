import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service'; // Ensure this path is correct

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string | null = null;

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      const { email, password } = this.loginForm.value;

      // Simulating login logic for now
      console.log('Login attempt:', { email, password });

      // Uncomment and use the actual login service when the API is ready
      // this.authService.login(email, password).subscribe(
      //   () => {
      //     this.router.navigate(['/admin']); // Redirect to admin panel
      //   },
      //   () => {
      //     this.errorMessage = 'Invalid credentials'; // Handle error
      //   }
      // );

      // For demo purposes, let's assume the login is always successful
      this.router.navigate(['/admin']); // Remove this in actual implementation
    } else {
      this.errorMessage = 'Please fill in all fields correctly.';
    }
  }
}
