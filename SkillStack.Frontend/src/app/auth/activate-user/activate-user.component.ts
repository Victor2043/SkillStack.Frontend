import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-activate-user',
  standalone: true,
  imports: [CommonModule, MatCardModule, RouterModule, MatButtonModule ],
  templateUrl: './activate-user.component.html',
  styleUrls: ['./activate-user.component.scss'] 
})
export class ActivateUserComponent implements OnInit {
  isActivated: boolean = false;
  message: string | null = null;
  loading: boolean = true;
  isSuccess: boolean = false;

  constructor(private route: ActivatedRoute, private authService: AuthService) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      const activationToken = params.get('token');
      if (activationToken) {
        this.activateUser(activationToken);
      } else {
        this.loading = false;
        this.message = "Activation token not provided.";
      }
    });
  }

  private activateUser(token: string) {
    this.authService.activateUser(token).subscribe({
      next: (response) => {
        this.loading = false;
        this.message = response.message;
        this.isSuccess = true;
      },
      error: (error) => {
        this.loading = false;
        this.message = error.error?.message || 'An error occurred during user activation.';
        this.isSuccess = false;
      }
    });
  }
}
