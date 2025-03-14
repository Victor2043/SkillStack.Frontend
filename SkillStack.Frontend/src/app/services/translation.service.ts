import { Injectable } from '@angular/core';
import { TranslateService as NgxTranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  constructor(private translate: NgxTranslateService) {    
    this.translate.addLangs(['pt-br', 'en-us']);
    this.translate.setDefaultLang('pt-br');

    // Define o idioma salvo no localStorage ou usa 'pt-br' como padrão
    const savedLanguage = localStorage.getItem('appLanguage') || 'pt-br';
    this.translate.use(savedLanguage);

    console.log('Idiomas disponíveis:', this.translate.getLangs());
    console.log('Idioma atual:', this.translate.currentLang);
  }

  setLanguage(lang: string) {
    console.log(`Alterando idioma para: ${lang}`);
    this.translate.use(lang);
    localStorage.setItem('appLanguage', lang); // Salva o idioma no localStorage
  }

  getTranslation(key: string): Observable<string> {
    return this.translate.get(key);
  }

  getCurrentLanguage(): string {
    return this.translate.currentLang;
  }
}
