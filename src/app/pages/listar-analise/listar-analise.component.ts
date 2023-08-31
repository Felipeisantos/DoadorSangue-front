import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoadorSangueService } from 'src/app/services/doador-sangue.service';

@Component({
  selector: 'app-listar-analise',
  templateUrl: './listar-analise.component.html',
  styleUrls: ['./listar-analise.component.css']
})
export class ListarAnaliseComponent {
  analyses: any[] = [];
  specificAnalysis: any;

  constructor(
    private route: ActivatedRoute,
    private service: DoadorSangueService
  ) { }

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

    console.log("lista tudo");
    this.analyses = [
      { title: 'Analysis 1', description: 'Description of Analysis 1' },
      { title: 'Analysis 2', description: 'Description of Analysis 2' },
      { title: 'Analysis 3', description: 'Description of Analysis 3' },
    ];
  }

  loadSpecificAnalysis(id: Number) {
    const retorno = this.service.getAnalisePorId(id)
    console.log(retorno)
    this.specificAnalysis = null;
  }
}
