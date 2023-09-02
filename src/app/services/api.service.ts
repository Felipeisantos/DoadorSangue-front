import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private baseUrl: string = 'http://localhost:8080/'

  constructor(
    private http: HttpClient
  ) { }

  private getOptions(data?: string) {
    const token = sessionStorage.getItem('token');
    const headers = data !== undefined ?
      new HttpHeaders({
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
      }) :
      new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
    return { headers };
  }

  public async uploadCandidatos(jsonData?: string) {
    try {
      const response = await this.http.post(`${this.baseUrl}api/v1/doador/processar-candidatos`, jsonData, this.getOptions(jsonData)).toPromise()
      return response
    } catch (error) {
      throw error
    }
  }
  public async getAnalisePorId(idAnalise: number) {
    return this.http.get<any>(`${this.baseUrl}api/v1/analise/listar/${idAnalise}`, this.getOptions())
  }

  public async getTodasAnalises() {
    try {
      const response = await this.http.get<any>(`${this.baseUrl}api/v1/analise/listar`, this.getOptions()).toPromise()
      return response
    } catch (error) {
      throw error
    }
  }


  public async login({ email, password }: { email: string; password: string; }) {
    try {
      const response = await this.http.post<any>(`${this.baseUrl}api/v1/auth/signin`, { email, password }).toPromise()
      return response
    } catch (error) {
      throw error
    }
  }
}