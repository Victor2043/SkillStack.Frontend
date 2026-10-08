import { Injectable, inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs';
import { environment } from '../../environments/environment';
import { Visit } from '../core/entities/visit';

@Injectable({ providedIn: 'root' })
export class TrackingService {
  private router = inject(Router);
  private http = inject(HttpClient);

   init() {
    if (this.shouldIgnore()) return;
        this.router.events
        .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
        .subscribe(e => {
            const visit: Visit = {
            visitId: this.getVisitId(),
            path: e.urlAfterRedirects,
            referrer: document.referrer || null
            };

            this.http
            .post<void>(`${environment.apiUrl}/users/visits`, visit)
            .subscribe({ error: () => {} });
        });
  }

  private shouldIgnore(): boolean {
    try { return localStorage.getItem('ignore-tracking') === '1'; } catch { return false; }
  }

  private getVisitId(): string {
    try {
      let id = sessionStorage.getItem('vid');
      if (!id) { id = crypto.randomUUID(); sessionStorage.setItem('vid', id); }
      return id;
    } catch { return crypto.randomUUID(); }
  }
}