import { Injectable } from '@angular/core';
import { APIService } from './api.service';
import jwt_decode from 'jwt-decode';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    private token: string | null = null;

    constructor(private apiService: APIService) { }

    async login({ email, password }: { email: string; password: string; }): Promise<string> {
        try {
            const token = await this.apiService.login(email, password);
            this.token = token;
            return token;
        } catch (error) {
            throw error;
        }
    }

    logout() {
        this.token = null;
    }

    isAuthenticated(): boolean {
        return !!this.token;
    }

    setToken(token: string) {
        this.token = token;
    }

    getToken(): string | null {
        return this.token;
    }

    public getTokenFromLocal(): string | null {
        const token = localStorage.getItem('token');
        return token !== null ? token.toString() : null;
    }

    public decodePayloadJWT(): any {
        const token = this.getTokenFromLocal();
        if (token === null) {
            return null;
        }

        try {
            return jwt_decode(token);
        } catch (error) {
            console.error('Erro ao decodificar token JWT:', error);
            return null;
        }
    }
}