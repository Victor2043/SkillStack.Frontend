import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Article } from '../../core/entities/article';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.scss'
})
export class ArticlesComponent {
  articles: Article[] = [
    {
      id: 1,
      title: 'Otimização de Memória no .NET',
      subtitle: 'Entendendo Span<T> e Memory<T>',
      summary: 'Aprenda a reduzir alocações na Gen 0 e evitar pressure no Garbage Collector utilizando tipos de memória eficientes.',
      imageUrl: 'https://picsum.photos/400/200?random=1',
      author: 'Victor',
      date: '02/10/2026'
    },
    {
      id: 2,
      title: 'Arquitetura de Mensageria com RabbitMQ',
      subtitle: 'Topologias e Dead Letter Queues',
      summary: 'Estratégias para garantir resiliência em microsserviços tratando falhas com Dead Letter Exchanges.',
      imageUrl: 'https://picsum.photos/400/200?random=2',
      author: 'Victor',
      date: '28/09/2026'
    }
  ];

  constructor(private router: Router) {}

  // Redirecionamento programático ao clicar no card
  openArticle(id: number): void {
    this.router.navigate(['/articles', id]);
  }
}