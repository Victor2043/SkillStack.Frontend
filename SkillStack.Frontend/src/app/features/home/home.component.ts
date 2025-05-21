import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, TranslateModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  experiences = [
    {
      company: 'HOME.EXPERIENCES.BE3.COMPANY',
      period: 'HOME.EXPERIENCES.BE3.PERIOD',
      roles: [
        {
          title: 'HOME.EXPERIENCES.BE3.ROLE1.TITLE',
          period: 'HOME.EXPERIENCES.BE3.ROLE1.PERIOD',
          activities: [
            'HOME.EXPERIENCES.BE3.ROLE1.ACTIVITY1',
            'HOME.EXPERIENCES.BE3.ROLE1.ACTIVITY2'
          ]
        },
        {
          title: 'HOME.EXPERIENCES.BE3.ROLE2.TITLE',
          period: 'HOME.EXPERIENCES.BE3.ROLE2.PERIOD',
          activities: [
            'HOME.EXPERIENCES.BE3.ROLE2.ACTIVITY1',
            'HOME.EXPERIENCES.BE3.ROLE2.ACTIVITY2'
          ]
        }
      ]
    },
    {
      company: 'HOME.EXPERIENCES.VICERI.COMPANY',
      period: 'HOME.EXPERIENCES.VICERI.PERIOD',
      roles: [
        {
          title: 'HOME.EXPERIENCES.VICERI.ROLE1.TITLE',
          period: 'HOME.EXPERIENCES.VICERI.ROLE1.PERIOD',
          activities: [
            'HOME.EXPERIENCES.VICERI.ROLE1.ACTIVITY1',
            'HOME.EXPERIENCES.VICERI.ROLE1.ACTIVITY2'
          ]
        },
        {
          title: 'HOME.EXPERIENCES.VICERI.ROLE2.TITLE',
          period: 'HOME.EXPERIENCES.VICERI.ROLE2.PERIOD',
          activities: [
            'HOME.EXPERIENCES.VICERI.ROLE2.ACTIVITY1',
            'HOME.EXPERIENCES.VICERI.ROLE2.ACTIVITY2',
            'HOME.EXPERIENCES.VICERI.ROLE2.ACTIVITY3'
          ]
        }
      ]
    }
  ];

  technologies = ['Angular', '.NET', 'C#', 'TypeScript', 'Python', 'SQL'];

  constructor(private router: Router) {}

  navigateToProject(project: string) {
    this.router.navigate([`/${project}`]);
  }
}