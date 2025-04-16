import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: number;
  company: string;
  achievements: Achievement[];
}

@Component({
  selector: 'app-problem-solving-showcase',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './problem-solving-showcase.component.html',
  styleUrl: './problem-solving-showcase.component.scss'
})
export class ProblemSolvingShowcaseComponent {
  timelineItems: TimelineItem[] = [
    {
      year: 2021,
      company: 'XPTO Solutions',
      achievements: [
        {
          icon: '⚡',
          title: 'Otimizei consultas SQL',
          description: 'Redução de 80% no tempo de execução de relatórios críticos'
        },
        {
          icon: '🔧',
          title: 'Criei pipelines de CI/CD',
          description: 'Automatização de deploys com Azure DevOps, eliminando erros manuais'
        }
      ]
    },
    {
      year: 2022,
      company: 'ABC Tech',
      achievements: [
        {
          icon: '🛡️',
          title: 'Implementei autenticação JWT',
          description: 'Aumento de 300% na segurança das APIs'
        },
        {
          icon: '🚀',
          title: 'Migração para Angular 14',
          description: 'Melhoria de 40% no desempenho do frontend'
        }
      ]
    }
  ];

  trackByFn(index: number, item: TimelineItem): number {
    return index;
  }
}
