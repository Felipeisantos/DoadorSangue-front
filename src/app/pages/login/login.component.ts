import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: any
  errorLogin: boolean = false
  constructor(private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService) {
  }


  ngOnInit() {
    if (this.authService.getToken()) {
      this.router.navigate(['/listar-analise'])
    }
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  public async onLogin() {
    const email = this.loginForm.get('email')?.value
    const password = this.loginForm.get('password')?.value
    await this.authService.login({ email, password }).then(data => {
      if (data) {
        this.router.navigate(['/listar-analise'])
      }
      else
        this.errorLogin = true
    }
    )

  }

}
