import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { APIService } from 'src/app/services/api.service';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  cadastroForm: any;
  errorCadastro: boolean = false;

  constructor(private fb: FormBuilder,
    private apiService: APIService,
    private router: Router,
    private authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.cadastroForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  async onCadastro() {

    const firstname: string = this.cadastroForm.get('nome')?.value
    const lastName: string = this.cadastroForm.get('sobrenome')?.value
    const email: string = this.cadastroForm.get('email')?.value
    const password: string = this.cadastroForm.get('password')?.value
    if (this.cadastroForm.valid) {
      const token = await this.apiService.cadastro({ firstname, lastName, email, password })
      if (token) {
        this.authenticationService.setToken(token.token)
        this.authenticationService.setExpirationDate(token.expirationDate)
        this.router.navigate(['/listar-analise'])
      }
      else
        this.errorCadastro = true;
    } else {
      this.errorCadastro = true;
    }
  }
}