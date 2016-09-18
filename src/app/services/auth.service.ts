import {Injectable} from '@angular/core';
import {Token} from "../models/token";

@Injectable()
export class AuthService {

    private STORAGE_KEY = 'token';
    private token: Token;

    constructor() {
        let token = this.getTokenFromStorage();
        if (token) {
            this.token = token;
        }
    }

    /**
     *
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
        return this.token && this.token.accessToken && this.token.userId;
    }

    /**
     * Add new token after login
     * @param userId
     * @param accessToken
     */
    addToken(userId: number, accessToken: string) {
        let token = new Token();
        token.accessToken = accessToken;
        token.userId = +userId;

        this.token = token;
        this.saveTokenToStorage(token);
    }

    /**
     *
     * @returns {any}
     */
    getTokenFromStorage() {
        let token = window.localStorage.getItem(this.STORAGE_KEY);
        if (token) {
            token = JSON.parse(token);
        }
        return token;
    }

    /**
     *
     * @param token
     */
    saveTokenToStorage(token: Token) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(token));
    }
}
