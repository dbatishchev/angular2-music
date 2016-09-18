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
        return !!(this.token && this.token.accessToken && this.token.userId);
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
    getTokenFromStorage(): Token|null {
        let tokenFromStorage = window.localStorage.getItem(this.STORAGE_KEY);
        if (tokenFromStorage) {
            let parsedToken = JSON.parse(tokenFromStorage);

            let token = new Token();
            token.userId = parsedToken.userId;
            token.accessToken = parsedToken.accessToken;

            return token;
        }
    }

    /**
     *
     * @param token
     */
    saveTokenToStorage(token: Token) {
        localStorage.setItem(this.STORAGE_KEY, JSON.stringify(token));
    }
}
