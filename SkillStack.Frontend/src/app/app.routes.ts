import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ActivateUserComponent } from './auth/activate-user/activate-user.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterUserComponent },
  { path: 'activate', component: ActivateUserComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];