import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface Achievement {
  icon: string;
  title: string;
  description: string;
}

interface TimelineItem {
  year: string;
  company: string;
  achievements: Achievement[];
}

@Component({
  selector: 'app-problem-solving-showcase',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatCardModule, MatButtonModule],
  templateUrl: './problem-solving-showcase.component.html',
  styleUrl: './problem-solving-showcase.component.scss'
})
export class ProblemSolvingShowcaseComponent {
  timelineItems: TimelineItem[] = [
    {
      year: 'PROBLEM-SOLVING.TIMELINE.XPTO.YEAR',
      company: 'PROBLEM-SOLVING.TIMELINE.XPTO.COMPANY',
      achievements: [
        {
          icon: '⚡',
          title: 'PROBLEM-SOLVING.TIMELINE.XPTO.ACHIEVEMENTS.SQL.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.XPTO.ACHIEVEMENTS.SQL.DESCRIPTION'
        },
        {
          icon: '🔧',
          title: 'PROBLEM-SOLVING.TIMELINE.XPTO.ACHIEVEMENTS.CICD.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.XPTO.ACHIEVEMENTS.CICD.DESCRIPTION'
        }
      ]
    },
    {
      year: 'PROBLEM-SOLVING.TIMELINE.ABC.YEAR',
      company: 'PROBLEM-SOLVING.TIMELINE.ABC.COMPANY',
      achievements: [
        {
          icon: '🛡️',
          title: 'PROBLEM-SOLVING.TIMELINE.ABC.ACHIEVEMENTS.JWT.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.ABC.ACHIEVEMENTS.JWT.DESCRIPTION'
        },
        {
          icon: '🚀',
          title: 'PROBLEM-SOLVING.TIMELINE.ABC.ACHIEVEMENTS.ANGULAR.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.ABC.ACHIEVEMENTS.ANGULAR.DESCRIPTION'
        }
      ]
    }
  ];

  constructor(private router: Router, private translate: TranslateService) {}

  navigateToProject(project: string) {
    this.router.navigate([`/${project}`]);
  }

  trackByFn(index: number, item: TimelineItem): number {
    return index;
  }
}