import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { TopMenuComponent } from './pages/top-menu/top-menu.component';
import { ListarAnaliseComponent } from './pages/listar-analise/listar-analise.component';
import { NovaAnaliseComponent } from './pages/nova-analise/nova-analise.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ResultadoAnaliseComponent } from './pages/resultado-analise/resultado-analise.component'
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    ListarAnaliseComponent,
    NovaAnaliseComponent,
    ResultadoAnaliseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
