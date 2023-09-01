import { HttpClient, HttpHeaders, HttpParamsOptions } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  responseData: any;
  private baseUrl: String = "";
  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.baseUrl = "http://localhost:8080/"
  }

  getOption(): { headers: HttpHeaders; } {
    return {
      headers: new HttpHeaders({
        'Authorization': 'Bearer ' + this.authService.getToken()
      })
    };;
  }
  public async getAnalisePorId(idAnalise: Number) {
    return await this.http.get<any>(`${this.baseUrl + "api/v1/analise/listar/"}${idAnalise}`, this.getOption())
  }

  public async getTodasAnalises() {
    return await this.http.get<any>(`${this.baseUrl}api/v1/analise/listar`, this.getOption());
  }
  async login(email: string, password: string): Promise<string> {
    const credentials = { email, password };

    return new Promise<string>((resolve, reject) => {
      this.http.post<any>(`${this.baseUrl}api/v1/auth/signin`, credentials).subscribe(
        (response) => {
          const token = response.token;
          resolve(token);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
