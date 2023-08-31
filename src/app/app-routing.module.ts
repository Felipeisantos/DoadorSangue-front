import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAnaliseComponent } from './pages/listar-analise/listar-analise.component';
import { NovaAnaliseComponent } from './pages/nova-analise/nova-analise.component';
import { ResultadoAnaliseComponent } from './pages/resultado-analise/resultado-analise.component';

const routes: Routes = [
  { path: 'listar-analise', component: ListarAnaliseComponent },
  { path: 'resultado-analise/:id', component: ResultadoAnaliseComponent },
  { path: 'nova-analise', component: NovaAnaliseComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
