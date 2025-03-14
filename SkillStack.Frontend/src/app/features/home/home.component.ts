import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslationService } from '../../services/translation.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material/select'; 
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, TranslateModule, MatSelectModule ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  translatedLogout: string = '';
  selectedLanguage: string = '';

  languages = [
    { value: 'en-us', label: '🇺🇸 English (US)' },
    { value: 'pt-br', label: '🇧🇷 Português (BR)' },
  ];


  constructor(
    private router: Router,
    private translationService: TranslationService,
    private translate: TranslateService
  ) {
    // Assina o Observable para obter a tradução dinâmica
    this.translate.get('LOGOUT').subscribe((text: string) => {
      this.translatedLogout = text;
    });

    // Define o idioma atual da aplicação
    this.selectedLanguage = this.translationService.getCurrentLanguage();
  }

  logout() {
    console.log('Logout');
    this.router.navigate(['/login']);
  }

  changeLanguage(language: string) {
    this.translationService.setLanguage(language);
    this.translate.get('HOME.LOGOUT').subscribe((text: string) => {
      this.translatedLogout = text;
    });
  }
}
