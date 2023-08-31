import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoadorSangueService } from 'src/app/services/doador-sangue.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-resultado-analise',
  templateUrl: './resultado-analise.component.html',
  styleUrls: ['./resultado-analise.component.css']
})
export class ResultadoAnaliseComponent {
  candidatoPorEstado: any[] = []; // Ou utilize um tipo mais específico
  constructor(
    private route: ActivatedRoute,
    private service: DoadorSangueService
  ) {

  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    if (id) {
      this.loadSpecificAnalysis(id);
    } else {
      this.loadAllAnalyses();
    }
  }
  // Load all analyses
  loadAllAnalyses() {

   
  }

  loadSpecificAnalysis(id: Number) {
    this.service.getAnalisePorId(id).subscribe((data: any) => {
      this.candidatoPorEstado = data.resultadoAnalise.candidatoPorEstado;
    });
    console.log(this.candidatoPorEstado)
  }
}
