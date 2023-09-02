import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private token: string | null = null

    constructor(private http: HttpClient,
        private apiService: APIService) { }

    async login({ email, password }: { email: string; password: string; }): Promise<string | null> {
        try {
            const token = await this.apiService.login({ email, password })
            sessionStorage.setItem('token', token.token)
            return token
        } catch (error) {
            return null
        }
    }

    logout() {
        sessionStorage.clear()
    }

    isAuthenticated(): boolean {
        return !!sessionStorage.getItem('token')
    }

    setToken(token: string) {
        sessionStorage.setItem('token', token)
    }

    getToken(): string | null {
        return sessionStorage.getItem('token')
    }
}