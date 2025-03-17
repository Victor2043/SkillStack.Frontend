import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl; 

  constructor(private http: HttpClient) {}

  isAuthenticated(): boolean {
    return !!localStorage.getItem('token');
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/auth/login`, 
      { email, password },
      { withCredentials: true }
    );
  }

  refreshToken(): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/auth/refresh-token`, 
      {}, 
      { withCredentials: true }
    );
  }

  logout(): Observable<{ message: string }> {
    const token = localStorage.getItem('token');
    return this.http.post<{ message: string }>(
      `${this.apiUrl}/auth/logout`, 
      {},
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        }),
        withCredentials: true
      }
    );
  }
}