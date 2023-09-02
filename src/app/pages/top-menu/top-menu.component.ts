import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent {

  constructor(
    private authService: AuthenticationService,
    private route: Router,
    private injector: Injector) { }

  ngOnInit() {

  }
  logout() {
    this.authService.logout()
    this.route.navigate(['/login'])
  }
  isAuthenticated() {
    return this.authService.getToken()
  }
}
