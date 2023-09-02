import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  private baseUrl: string = 'http://localhost:8080/api/v1/'

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
      const response = await this.http.post<any>(`${this.baseUrl}analise/processar-candidatos`, jsonData, this.getOptions(jsonData)).toPromise()
      return response
    } catch (error) {
    }
  }
  public async getAnalisePorId(idAnalise: number) {
    return this.http.get<any>(`${this.baseUrl}analise/listar/${idAnalise}`, this.getOptions())
  }

  public async getTodasAnalises() {
    try {
      const response = await this.http.get<any>(`${this.baseUrl}analise/listar`, this.getOptions()).toPromise()
      return response
    } catch (error) {
    }
  }

  public async login({ email, password }: { email: string; password: string; }) {
    const response = await this.http.post<any>(`${this.baseUrl}auth/signin`, { email, password }).toPromise()
    return response
  }

  public async cadastro({ firstname, lastName, email, password }: { firstname: string, lastName: string, email: string; password: string; }) {
    const response = await this.http.post<any>(`${this.baseUrl}auth/signup`, { firstname, lastName, email, password }).toPromise()
    return response
  }
}