import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {

  tempoRestanteToken: string = "";
  constructor(
    private authService: AuthenticationService) { }

  ngOnInit() {
    this.calcularTempoRestanteToken();
    setInterval(() => {
      this.calcularTempoRestanteToken();
    }, 1000);
  }
  logout() {
    this.authService.logout()
  }
  isAuthenticated(): boolean {
    return this.authService.isAuthenticated()
  }

  calcularTempoRestanteToken(): void {
    const expirationDateStr: string | null = this.authService.getExpirationDate();
    if (expirationDateStr !== null) {
      const expirationDate = new Date(expirationDateStr);

      // Obtém a data atual
      const currentDate = new Date();

      // Calcula a diferença em milissegundos entre a data de expiração e a data atual
      const timeDifferenceMillis = expirationDate.getTime() - currentDate.getTime();

      // Calcula os dias, horas, minutos e segundos restantes
      const seconds = Math.floor(timeDifferenceMillis / 1000) % 60;
      const minutes = Math.floor(timeDifferenceMillis / (1000 * 60)) % 60;
      this.tempoRestanteToken = `${minutes}:${seconds}`;
    }
  }
}
