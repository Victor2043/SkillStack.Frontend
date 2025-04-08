import { Component } from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { TranslationService } from './services/translation.service';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { AuthService } from './services/auth/auth.service';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    TranslateModule,
    MatSelectModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'SkillStack.Frontend';
  showToolbar = true;
  translatedLogout: string = '';
  selectedLanguage: string = '';
  currentPageTitle: string = '';

  languages = [
    { value: 'en-us', label: '🇺🇸 English (US)' },
    { value: 'pt-br', label: '🇧🇷 Português (BR)' },
  ];

  pages = [
    { path: '', labelKey: 'HOME.TITLE', label: '' }
  ];

  constructor(
    private router: Router,
    private translationService: TranslationService,
    private translate: TranslateService,
    private authService: AuthService
  ) {
    this.translate.get('LOGOUT').subscribe((text: string) => {
      this.translatedLogout = text;
    });

    this.selectedLanguage = this.translationService.getCurrentLanguage();

    // Atualiza os rótulos das páginas com base no idioma
    this.updatePageLabels();

    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.updatePageTitle();
    });
  }

  ngOnInit() {
    this.authService.isLoggedIn().subscribe((loggedIn: boolean) => {
      this.showToolbar = loggedIn;
    });
    this.updatePageTitle();
  }

  private updatePageTitle() {
    const url = this.router.url;
    let titleKey = 'HOME.TITLE';    

    this.translate.get(titleKey).subscribe((text: string) => {
      this.currentPageTitle = text;
    });
  }

  // Atualiza os rótulos das páginas com traduções
  private updatePageLabels() {
    this.pages.forEach(page => {
      this.translate.get(page.labelKey).subscribe((text: string) => {
        page.label = text;
      });
    });
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: () => {
        sessionStorage.removeItem('token');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Erro ao fazer logout', error);
      }
    });
  }

  changeLanguage(language: string) {
    this.translationService.setLanguage(language);
    this.translate.get('HOME.LOGOUT').subscribe((text: string) => {
      this.translatedLogout = text;
    });
    this.updatePageTitle();
    this.updatePageLabels(); // Atualiza os rótulos do menu ao mudar o idioma
  }

  // Navega para a página selecionada
  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}