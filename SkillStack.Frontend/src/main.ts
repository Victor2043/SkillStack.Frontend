import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { HttpClient, HttpClientModule, provideHttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { routes } from '../src/app/app.routes';
import { provideRouter } from '@angular/router';
export function HttpLoaderFactory(http: any) {
  return new TranslateHttpLoader(http, 'assets/i18n/', '.json');
}

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
     importProvidersFrom(
       TranslateModule.forRoot({
         loader: {
           provide: TranslateLoader,
           useFactory: HttpLoaderFactory,
           deps: [HttpClient],
         },
       })
     ),
  ],
}).catch((err) => console.error(err));
