import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DoadorSangueService {
  responseData: any;
  private baseUrl: String = "";
  constructor(
    private http: HttpClient
  ) {
    this.baseUrl = "http://localhost:8080/"
  }

  getAnalisePorId(idAnalise: Number) {
    return this.http.get(`${this.baseUrl + "analise/listar/"}${idAnalise}`)
  }

}
