import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';

@Component({
  selector: 'app-listar-analise',
  templateUrl: './listar-analise.component.html',
  styleUrls: ['./listar-analise.component.css']
})
export class ListarAnaliseComponent {
  analises: any[] = [];
  specificAnalysis: any;

  constructor(private router: Router,
    private service: APIService
  ) { }

  ngOnInit(): void {
    this.loadAllAnalyses();
  }

  redirecionarParaDetalhes(id: any) {
    this.router.navigate(['/resultado-analise', id]);
  }
  formatarData(data: any) {
    const option: any = {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };

    return new Date(data).toLocaleString('pt-BR', option);
  }

  async loadAllAnalyses() {
    try {
      (await this.service.getTodasAnalises()).subscribe((analises: any[]) =>
        this.analises = analises,
        (error: any) =>
          console.error('Erro ao carregar análises:', error)
      );
    } catch (error) {
      console.error('Erro ao carregar análises:', error);
    }
  }
}
