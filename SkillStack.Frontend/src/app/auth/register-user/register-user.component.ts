import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-register-user',
  standalone: true,
  imports: [ReactiveFormsModule, MatSnackBarModule, CommonModule],
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent {
  registerForm: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      username: ['', Validators.required],
      passwordHash	: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';

    const userData = this.registerForm.value;

    this.userService.registerUser(userData).subscribe({
      next: () => {
        this.successMessage = 'Registration successful! Please check your email to activate your account.';
        this.registerForm.reset();
        this.isLoading = false;
        this.snackBar.open(this.successMessage, 'Close', { duration: 3000 });
        this.navigateToLogin();
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed. Please try again.';
        this.isLoading = false;
        this.snackBar.open(this.errorMessage, 'Close', { duration: 3000 });
      }
    });
  }

  navigateToLogin() {
    this.router.navigate(['/login']);
  }
}
