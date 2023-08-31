import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DoadorSangueService } from 'src/app/services/doador-sangue.service';

@Component({
  selector: 'app-listar-analise',
  templateUrl: './listar-analise.component.html',
  styleUrls: ['./listar-analise.component.css']
})
export class ListarAnaliseComponent {
  analises: any[] = [];
  specificAnalysis: any;

  constructor(private router: Router,
    private service: DoadorSangueService
  ) { }

  ngOnInit(): void {
    this.loadAllAnalyses();
  }

  redirecionarParaDetalhes(id: any) {
    console.log("passei")
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
    this.analises = await this.service.getTodasAnalises();
    this.analises.forEach(analise => {
      analise.dataRequisicaoFormatada = this.formatarData(analise.dataRequisicao);
    });

  }
}
