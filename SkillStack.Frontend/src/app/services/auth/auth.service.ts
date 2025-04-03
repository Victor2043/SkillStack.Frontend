import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;
  private loggedIn = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {   
    this.loggedIn.next(this.isAuthenticated());
  }

  isLoggedIn(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  isAuthenticated(): boolean {
    return !!sessionStorage.getItem('token');
  }

  login(email: string, password: string): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/auth/login`,
      { email, password },
      { withCredentials: true }
    ).pipe(
      tap(response => {
        sessionStorage.setItem('token', response.token);
        this.loggedIn.next(true);
      })
    );
  }

  refreshToken(): Observable<{ token: string }> {
    return this.http.post<{ token: string }>(
      `${this.apiUrl}/auth/refresh-token`,
      {},
      { withCredentials: true }
    ).pipe(
      tap(response => {
        sessionStorage.setItem('token', response.token);
        this.loggedIn.next(true);
      })
    );
  }

  logout(): Observable<{ message: string }> {
    const token = sessionStorage.getItem('token');
    return this.http.post<{ message: string }>(
      `${this.apiUrl}/auth/logout`,
      {},
      {
        headers: new HttpHeaders({
          'Authorization': `Bearer ${token}`
        }),
        withCredentials: true
      }
    ).pipe(
      tap(() => {
        sessionStorage.removeItem('token');
        this.loggedIn.next(false);
      })
    );
  }

  activateUser(token: string): Observable<any> {
    return this.http.get<string>(`${this.apiUrl}/users/activate?token=${token}`).pipe(
      tap(response => {
        console.log(response); 
      })
    );
  }
}