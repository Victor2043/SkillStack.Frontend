import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ActivateUserComponent } from './auth/activate-user/activate-user.component';
import { LinqPlaygroundComponent } from './features/linq-playground/linq-playground/linq-playground.component';
import { ProblemSolvingShowcaseComponent } from './features/problem-solving-showcase/problem-solving-showcase/problem-solving-showcase.component';
import { TechnologiesComponent } from './features/technologies/technologies.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'register', component: RegisterUserComponent },
  { path: 'activate', component: ActivateUserComponent },
  { path: 'linq-playground', component: LinqPlaygroundComponent, canActivate: [AuthGuard] },  
  { path: 'problem-solving-showcase', component: ProblemSolvingShowcaseComponent, canActivate: [AuthGuard] },
  { path: 'technologies', component: TechnologiesComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];