import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CandidatoPorEstado } from 'src/app/core/model/candidato-por-estado';
import { ImcMedioPorIdade } from 'src/app/core/model/imc-medio-por-idade';
import { MediaIdadeTipoSanguineo } from 'src/app/core/model/media-idade-tipo-sanguineo';
import { PorcentagemObesidadeGenero } from 'src/app/core/model/porcentagem-obesidade-genero';
import { PotencialDoadorTipoSanguineo } from 'src/app/core/model/potencial-doador-tipo-sanguineo';
import { DoadorSangueService } from 'src/app/services/doador-sangue.service';

@Component({
  selector: 'app-resultado-analise',
  templateUrl: './resultado-analise.component.html',
  styleUrls: ['./resultado-analise.component.css']
})
export class ResultadoAnaliseComponent {
  id: Number = 0;
  candidatoPorEstado: CandidatoPorEstado[] = [];
  imcMedioPorFaixaDeIdade: ImcMedioPorIdade[] = [];
  mediaIdadeTipoSanguineo: MediaIdadeTipoSanguineo[] = [];
  porcentagemObesidadePorGenero: PorcentagemObesidadeGenero[] = [];
  potencialDoadorPorTipoSanguineo: PotencialDoadorTipoSanguineo[] = [];

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

  loadAllAnalyses() {


  }
  roundValue = (value: number) => Math.round((value + Number.EPSILON) * 100) / 100

  loadSpecificAnalysis(id: Number) {
    this.id = id;
    this.service.getAnalisePorId(id).subscribe((data: any) => {
      this.candidatoPorEstado = data.resultadoAnalise.candidatoPorEstado;
      this.imcMedioPorFaixaDeIdade = data.resultadoAnalise.imcMedioPorFaixaDeIdade;
      this.porcentagemObesidadePorGenero = data.resultadoAnalise.porcentagemObesidadePorGenero;
      this.mediaIdadeTipoSanguineo = data.resultadoAnalise.mediaIdadeTipoSanguineo;
      this.potencialDoadorPorTipoSanguineo = data.resultadoAnalise.potenciaisDoadoresPorTipoSanguineo;
    });
    console.log(this.candidatoPorEstado)
  }
}
