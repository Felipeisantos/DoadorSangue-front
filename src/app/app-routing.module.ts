import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarAnaliseComponent } from './pages/listar-analise/listar-analise.component';
import { NovaAnaliseComponent } from './pages/nova-analise/nova-analise.component';
import { ResultadoAnaliseComponent } from './pages/resultado-analise/resultado-analise.component';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './services/authguard-service';
import { CadastroComponent } from './pages/cadastro/cadastro.component';

const routes: Routes = [
  { path: 'listar-analise', component: ListarAnaliseComponent, canActivate: [AuthGuard] },
  { path: 'resultado-analise/:id', component: ResultadoAnaliseComponent, canActivate: [AuthGuard] },
  { path: 'nova-analise', component: NovaAnaliseComponent, canActivate: [AuthGuard] },
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
