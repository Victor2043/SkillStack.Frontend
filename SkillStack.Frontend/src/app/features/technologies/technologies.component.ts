import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';

interface TechPeriod {
  period: string;
  backend: string[];
  frontend: string[];
}

interface TechUsage {
  name: string;
  usageCount: number;
  percentage: number;
  icon: string;
}

interface OverallUsage {
  name: string;
  percentage: number;
  icon: string;
}

@Component({
  selector: 'app-technologies',
  standalone: true,
  imports: [CommonModule, TranslateModule, NgChartsModule],
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {
  techPeriods: TechPeriod[] = [
    { period: 'Mar 2020 - Dec 2020', backend: ['.NET Core 3.0'], frontend: ['AngularJS', 'Angular 8'] },
    { period: 'Jan 2021 - Jun 2021', backend: ['Python 3.8', 'Docker', 'Linux'], frontend: [] },
    { period: 'Jul 2021 - Dec 2021', backend: ['.NET Core 3.0'], frontend: ['Angular 8'] },
    { period: 'Jan 2022 - Jul 2022', backend: ['.NET 4.5'], frontend: ['HTML', 'CSS', 'jQuery'] },
    { period: 'Jul 2022 - Dec 2022', backend: ['.NET Core 3.0', 'Amazon SQS'], frontend: ['Angular 8'] },
    { period: 'Jan 2023 - May 2023', backend: ['.NET 4.0', '.NET 6'], frontend: ['HTML', 'CSS', 'jQuery', 'Angular 8'] },
    { period: 'May 2023 - Dec 2023', backend: ['.NET 6', 'Docker', 'Linux'], frontend: [] },
    { period: 'Jan 2024 - Jul 2024', backend: ['.NET 4.0'], frontend: ['HTML', 'CSS', 'jQuery'] },
    { period: 'Jul 2024 - Dec 2024', backend: ['.NET 8', 'Docker', 'Lambda Functions (Python 3.12)', 'Linux'], frontend: [] },
    { period: 'Jan 2025 - Mar 2025', backend: ['.NET 8', '.NET 4.0', 'Docker', 'Linux','Lambda Functions (Python 3.12)'], frontend: [] }
  ];

  // Dados para os gráficos de pizza
  public backendPieChartData: ChartData<'pie'> = { labels: [], datasets: [] };
  public frontendPieChartData: ChartData<'pie'> = { labels: [], datasets: [] };
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw} periods (${((context.raw as number) / this.techPeriods.length * 100).toFixed(1)}%)`
        }
      }
    }
  };
  public pieChartType: ChartType = 'pie';

  // Dados para as barras de progresso
  public backendTechUsage: TechUsage[] = [];
  public frontendTechUsage: TechUsage[] = [];

  public overallUsage: OverallUsage[] = [
    { name: 'Backend', percentage: 70, icon: '🛠️' },
    { name: 'Frontend', percentage: 30, icon: '🎨' }
  ];

  // Ícones para as tecnologias (para a timeline visual)
  private techIcons: { [key: string]: string } = {
    '.NET Core 3.0': '⚙️',
    'Python 3.8': '🐍',
    'Docker': '🐳',
    'AngularJS': '🅰️',
    'Angular 8': '🅰️',
    '.NET 4.5': '⚙️',
    'HTML': '🌐',
    'CSS': '🎨',
    'jQuery': '📜',
    '.NET 4.0': '⚙️',
    '.NET 6': '⚙️',
    '.NET 8': '⚙️',
    'Lambda Functions (Python 3.12)': 'λ',
    'Python 3.12': '🐍',
    'Linux': '🐧',
    'Amazon SQS': '📬'
  };

  ngOnInit() {
    this.prepareChartData();
  }

  private prepareChartData() {
    // Total de períodos
    const totalPeriods = this.techPeriods.length;

    // Listar todas as tecnologias únicas (backend e frontend)
    const allBackendTechs = [...new Set(this.techPeriods.flatMap(period => period.backend))];
    const allFrontendTechs = [...new Set(this.techPeriods.flatMap(period => period.frontend))];

    // Calcular a frequência de uso para backend
    this.backendTechUsage = allBackendTechs.map(tech => {
      const usageCount = this.techPeriods.filter(period => period.backend.includes(tech)).length;
      const percentage = (usageCount / totalPeriods) * 100;
      return { name: tech, usageCount, percentage, icon: this.techIcons[tech] || '💻' };
    }).sort((a, b) => b.usageCount - a.usageCount);

    // Calcular a frequência de uso para frontend
    this.frontendTechUsage = allFrontendTechs.map(tech => {
      const usageCount = this.techPeriods.filter(period => period.frontend.includes(tech)).length;
      const percentage = (usageCount / totalPeriods) * 100;
      return { name: tech, usageCount, percentage, icon: this.techIcons[tech] || '💻' };
    }).sort((a, b) => b.usageCount - a.usageCount);

    // Preparar dados para o gráfico de pizza (backend)
    this.backendPieChartData = {
      labels: this.backendTechUsage.map(tech => tech.name),
      datasets: [{
        data: this.backendTechUsage.map(tech => tech.usageCount),
        backgroundColor: this.generateColors(this.backendTechUsage.length)
      }]
    };

    // Preparar dados para o gráfico de pizza (frontend)
    this.frontendPieChartData = {
      labels: this.frontendTechUsage.map(tech => tech.name),
      datasets: [{
        data: this.frontendTechUsage.map(tech => tech.usageCount),
        backgroundColor: this.generateColors(this.frontendTechUsage.length)
      }]
    };
  }

  private generateColors(count: number): string[] {
    const colors = [
      '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
      '#FF9F40', '#66BB6A', '#EF5350', '#42A5F5', '#FFD54F'
    ];
    return Array.from({ length: count }, (_, i) => colors[i % colors.length]);
  }

  getTechIcon(tech: string): string {
    return this.techIcons[tech] || '💻';
  }
}