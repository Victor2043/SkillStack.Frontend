import { Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './features/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';
import { RegisterUserComponent } from './auth/register-user/register-user.component';
import { ActivateUserComponent } from './auth/activate-user/activate-user.component';
import { LinqPlaygroundComponent } from './features/linq-playground/linq-playground.component';
import { ProblemSolvingShowcaseComponent } from './features/problem-solving-showcase/problem-solving-showcase/problem-solving-showcase.component';
import { TechnologiesComponent } from './features/technologies/technologies.component';
import { ArticlesComponent } from './features/articles/articles.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterUserComponent },
  { path: 'activate', component: ActivateUserComponent },
  { path: 'linq-playground', component: LinqPlaygroundComponent },  
  { path: 'problem-solving-showcase', component: ProblemSolvingShowcaseComponent  },
  { path: 'technologies', component: TechnologiesComponent  },
  { path: 'articles', component: ArticlesComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];