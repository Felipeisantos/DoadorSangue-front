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
            sessionStorage.setItem('expiration-date', token.expirationDate)
            return token
        } catch (error) {
            return null
        }
    }

    logout() {
        sessionStorage.clear()
    }

    isAuthenticated(): boolean {
        return !!sessionStorage.getItem('token') && !this.isTokenExpirated()
    }

    setToken(token: string) {
        sessionStorage.setItem('token', token)
    }

    getToken(): string | null {
        return sessionStorage.getItem('token')
    }

    setExpirationDate(data: string) {
        sessionStorage.setItem('expiration-date', data)
    }

    getExpirationDate(): string | null {
        return sessionStorage.getItem('expiration-date')
    }

    isTokenExpirated(): boolean {
        const expirationDateStr = sessionStorage.getItem('expiration-date');

        if (expirationDateStr) {
            const expirationDate = new Date(expirationDateStr);
            const currentDate = new Date();

            if (currentDate > expirationDate)
                return true;
            else
                return false;

        } else
            return true;

    }
}