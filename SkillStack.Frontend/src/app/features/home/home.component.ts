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
  // TODO: substitua pelos seus dados reais
  socialLinks = [
    {
      name: 'whatsapp',
      label: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      url: 'https://wa.me/5511994321354',
      external: true
    },
    {
      name: 'linkedin',
      label: 'LinkedIn',
      icon: 'fa-brands fa-linkedin-in',
      url: 'https://www.linkedin.com/in/victor2043',
      external: true
    },
    {
      name: 'email',
      label: 'Email',
      icon: 'fa-solid fa-envelope',
      url: 'mailto:Victor.alves19@outlook.com.br',
      external: false
    },
    {
      name: 'github',
      label: 'GitHub',
      icon: 'fa-brands fa-github',
      url: 'https://github.com/Victor2043/',
      external: true
    }
  ];

  experiences = [
    {
      company: 'HOME.EXPERIENCES.DQR_TECH.COMPANY',
      period: 'HOME.EXPERIENCES.DQR_TECH.PERIOD',
      roles: [
        {
          title: 'HOME.EXPERIENCES.DQR_TECH.ROLE1.TITLE',
          period: 'HOME.EXPERIENCES.DQR_TECH.ROLE1.PERIOD',
          activities: [
            'HOME.EXPERIENCES.DQR_TECH.ROLE1.ACTIVITY1',
            'HOME.EXPERIENCES.DQR_TECH.ROLE1.ACTIVITY2',
            'HOME.EXPERIENCES.DQR_TECH.ROLE1.ACTIVITY3',
            'HOME.EXPERIENCES.DQR_TECH.ROLE1.ACTIVITY4'
          ]
        }
      ]
    },
    {
      company: 'HOME.EXPERIENCES.VICERI.COMPANY',
      period: 'HOME.EXPERIENCES.VICERI.PERIOD',
      roles: [
        {
          title: 'HOME.EXPERIENCES.VICERI.ROLE2.TITLE',
          period: 'HOME.EXPERIENCES.VICERI.ROLE2.PERIOD',
          activities: [
            'HOME.EXPERIENCES.VICERI.ROLE2.ACTIVITY1',
            'HOME.EXPERIENCES.VICERI.ROLE2.ACTIVITY2',
            'HOME.EXPERIENCES.VICERI.ROLE2.ACTIVITY3'
          ]
        },
        {
          title: 'HOME.EXPERIENCES.VICERI.ROLE1.TITLE',
          period: 'HOME.EXPERIENCES.VICERI.ROLE1.PERIOD',
          activities: [
            'HOME.EXPERIENCES.VICERI.ROLE1.ACTIVITY1',
            'HOME.EXPERIENCES.VICERI.ROLE1.ACTIVITY2'
          ]
        }
      ]
    },
    {
      company: 'HOME.EXPERIENCES.BE3.COMPANY',
      period: 'HOME.EXPERIENCES.BE3.PERIOD',
      roles: [
        {
          title: 'HOME.EXPERIENCES.BE3.ROLE2.TITLE',
          period: 'HOME.EXPERIENCES.BE3.ROLE2.PERIOD',
          activities: [
            'HOME.EXPERIENCES.BE3.ROLE2.ACTIVITY1',
            'HOME.EXPERIENCES.BE3.ROLE2.ACTIVITY2'
          ]
        },
        {
          title: 'HOME.EXPERIENCES.BE3.ROLE1.TITLE',
          period: 'HOME.EXPERIENCES.BE3.ROLE1.PERIOD',
          activities: [
            'HOME.EXPERIENCES.BE3.ROLE1.ACTIVITY1',
            'HOME.EXPERIENCES.BE3.ROLE1.ACTIVITY2'
          ]
        }
      ]
    }
  ];

  technologies = ['.NET', 'Angular', 'Python', 'SQL', 'RabbitMQ', 'Docker', 'Linux', 'AWS', 'Rancher', 'Kubernetes'];

  constructor(private router: Router) {}

  navigateToProject(project: string) {
    this.router.navigate([`/${project}`]);
  }
}