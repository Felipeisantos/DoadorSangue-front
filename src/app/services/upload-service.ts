import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(private http: HttpClient) { }

    async uploadJson(jsonData: any) {
        const apiUrl = 'http://localhost:8080/doador/processar-candidatos';

        try {
            const response = await this.http.post(apiUrl, jsonData).toPromise();
            return response;
        } catch (error) {
            throw error;
        }
    }
}