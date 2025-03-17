import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AuthService } from '../app/services/auth/auth.service';
import { routes } from './app.routes';
import { LoginComponent } from '../app/auth/login/login.component';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig = {
  providers: [
    provideHttpClient(), 
    provideRouter(routes), 
    provideAnimations(),
    AuthService, 
  ],
  declarations: [
    LoginComponent, 
  ]
};
