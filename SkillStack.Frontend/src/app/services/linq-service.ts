import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../core/entities/product";
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class LinqService {
  private readonly apiUrl = `${environment.apiUrl}/linq-playground`;

  constructor(private http: HttpClient) {}

  // linq.service.ts
  executeQuery(query: string) {
    const body = { Query: query }; // Objeto compatível com o DTO do back-end
    return this.http.post<any[]>(`${this.apiUrl}/execute`, body, {
      headers: { 'Content-Type': 'application/json' } // Garante o header correto
    });
  }
}