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
      year: 'PROBLEM-SOLVING.TIMELINE.MAP_FEATURE.YEAR',
      company: 'PROBLEM-SOLVING.TIMELINE.MAP_FEATURE.COMPANY',
      achievements: [
        {
          icon: '🗺️',
          title: 'PROBLEM-SOLVING.TIMELINE.MAP_FEATURE.ACHIEVEMENTS.KML_UPLOAD.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.MAP_FEATURE.ACHIEVEMENTS.KML_UPLOAD.DESCRIPTION'
        },
        {
          icon: '👥',
          title: 'PROBLEM-SOLVING.TIMELINE.LEADERSHIP.ACHIEVEMENTS.TEAM_LEAD.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.LEADERSHIP.ACHIEVEMENTS.TEAM_LEAD.DESCRIPTION'
        }
      ]
    },
    {
      year: 'PROBLEM-SOLVING.TIMELINE.CI_CD.YEAR',
      company: 'PROBLEM-SOLVING.TIMELINE.CI_CD.COMPANY',
      achievements: [
        {
          icon: '🔧',
          title: 'PROBLEM-SOLVING.TIMELINE.CI_CD.ACHIEVEMENTS.PIPELINES.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.CI_CD.ACHIEVEMENTS.PIPELINES.DESCRIPTION'
        },        
        {
          icon: '🧑‍🏫',
          title: 'PROBLEM-SOLVING.TIMELINE.CI_CD.ACHIEVEMENTS.TEAM_GROWTH.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.CI_CD.ACHIEVEMENTS.TEAM_GROWTH.DESCRIPTION'
        }
      ]
    },
    {
      year: 'PROBLEM-SOLVING.TIMELINE.SQL_OPTIMIZATION.YEAR',
      company: 'PROBLEM-SOLVING.TIMELINE.SQL_OPTIMIZATION.COMPANY',
      achievements: [
        {
          icon: '⚡',
          title: 'PROBLEM-SOLVING.TIMELINE.SQL_OPTIMIZATION.ACHIEVEMENTS.TEMP_TABLES.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.SQL_OPTIMIZATION.ACHIEVEMENTS.TEMP_TABLES.DESCRIPTION'
        },
        {
          icon: '🤝',
          title: 'PROBLEM-SOLVING.TIMELINE.TEAM_SUPPORT.ACHIEVEMENTS.CROSS_TEAM_HELP.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.TEAM_SUPPORT.ACHIEVEMENTS.CROSS_TEAM_HELP.DESCRIPTION'
        }
      ]
    },
    {
      year: 'PROBLEM-SOLVING.TIMELINE.RPA_FIX.YEAR',
      company: 'PROBLEM-SOLVING.TIMELINE.RPA_FIX.COMPANY',
      achievements: [
        {
          icon: '🛡️',
          title: 'PROBLEM-SOLVING.TIMELINE.RPA_FIX.ACHIEVEMENTS.RPA_RESILIENCE.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.RPA_FIX.ACHIEVEMENTS.RPA_RESILIENCE.DESCRIPTION'
        }
      ]
    },
    {
      year: 'PROBLEM-SOLVING.TIMELINE.LOGO_RATING.YEAR',
      company: 'PROBLEM-SOLVING.TIMELINE.LOGO_RATING.COMPANY',
      achievements: [
        {
          icon: '✨',
          title: 'PROBLEM-SOLVING.TIMELINE.LOGO_RATING.ACHIEVEMENTS.CUSTOM_FEEDBACK.TITLE',
          description: 'PROBLEM-SOLVING.TIMELINE.LOGO_RATING.ACHIEVEMENTS.CUSTOM_FEEDBACK.DESCRIPTION'
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
