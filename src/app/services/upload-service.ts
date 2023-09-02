import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(
        private service: APIService,
        private injector: Injector) { }

    async uploadJson(jsonData: any) {
        try {
            return await this.service.uploadCandidatos(jsonData)
        } catch (error) {
        }
    }
}