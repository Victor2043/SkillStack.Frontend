import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { LinqService } from '../../../services/linq-service';
import { Product } from '../../../core/entities/product';
import * as monaco from 'monaco-editor';
import loader from '@monaco-editor/loader';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-linq-playground',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './linq-playground.component.html',
  styleUrl: './linq-playground.component.scss'
})
export class LinqPlaygroundComponent implements AfterViewInit {
  editor: monaco.editor.IStandaloneCodeEditor | null = null;
  results: any[] = [];
  dadosExemplo: Product[] = [
    { id: 1, name: 'Notebook', price: 2500 },
    { id: 2, name: 'Smartphone', price: 1500 },
    { id: 3, name: 'Tablet', price: 800 }
  ];
  constructor(
    private linqService: LinqService,
    private el: ElementRef
  ) {}

  ngAfterViewInit() {
    loader.init().then(() => {
      this.editor = monaco.editor.create(
        this.el.nativeElement.querySelector('#editor-container'), 
        {
          value: 'products.Where(p => p.Price > 100);',
          language: 'csharp',
          theme: 'vs-dark'
        }
      );
    });
  }

  execute() {
    let query = this.editor?.getValue() || '';

    query = query.trim().replace(/;+$/, '');

    const escapedQuery = query.replace(/"/g, '\"');
    console.log('Query escapada:', escapedQuery); // Para depuração
    this.linqService.executeQuery(escapedQuery).subscribe({
      next: (res) => {
        this.results = res;
        console.log('Resultados:', res);
      },
      error: (err) => console.error('Erro:', err)
    });
  }
}