import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule, MatSnackBarModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  isLoading = false;
  
  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    if (!this.email || !this.password) {
      this.snackBar.open('Please fill in all fields.', 'Close', { duration: 3000 });
      return;
    }

    this.isLoading = true;

    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        sessionStorage.setItem('token', response.token);
        this.router.navigate(['/home']);
      },
      error: (error) => {
        this.snackBar.open(error.error.message || 'Login error', 'Close', { duration: 3000 });
        this.isLoading = false;
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}