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
import { MatMenuModule } from '@angular/material/menu';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatDividerModule } from '@angular/material/divider';

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
    MatSelectModule,
    MatMenuModule,
    MatDividerModule
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
  developerMenuLabel: string = '';
  isMobile = false;


  languages = [
    { value: 'en-us', label: '🇺🇸 English (US)' },
    { value: 'pt-br', label: '🇧🇷 Português (BR)' },
  ];

  pages = [
    { path: 'home', labelKey: 'HOME.TITLE', label: '' },
    { path: 'problem-solving-showcase', labelKey: 'PROBLEM-SOLVING.TITLE', label: '' },
    { path: 'technologies', labelKey: 'TECHNOLOGIES-PAGE.TITLE', label: '' },
    { path: 'linq-playground', labelKey: 'LINQ.TITLE', label: '' }
  ];  

  private routeTitleMap: { [key: string]: string } = {
    '/linq-playground': 'LINQ.TITLE',
    '/problem-solving-showcase': 'PROBLEM-SOLVING.TITLE',
    '/technologies':'TECHNOLOGIES-PAGE.TITLE',
    '': 'HOME.TITLE' 
  };
  constructor(
    private router: Router,
    private translationService: TranslationService,
    private translate: TranslateService,
    private authService: AuthService,
    private breakpointObserver: BreakpointObserver
  ) {
    this.translate.get('LOGOUT').subscribe((text: string) => {
      this.translatedLogout = text;
    });

    this.translate.get('MENU.DEVELOPERS').subscribe((text: string) => {
      this.developerMenuLabel = text;
    });

    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isMobile = result.matches;
    });
    

    this.selectedLanguage = this.translationService.getCurrentLanguage();

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
    const url = this.router.url.split('?')[0]; 
    const titleKey = this.routeTitleMap[url] || 'HOME.TITLE'; 

    this.translate.get(titleKey).subscribe((text: string) => {
      this.currentPageTitle = text;
    });
  }

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

    this.translate.get('MENU.DEVELOPERS').subscribe((text: string) => {
      this.developerMenuLabel = text;
    });
    
    this.updatePageTitle();
    this.updatePageLabels(); 
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

  getPageLabel(path: string): string {
    const page = this.pages.find(p => p.path === path);
    return page ? page.label : '';
  }
  
}