import {Injectable} from '@angular/core';
import {Token} from "../models/token";

@Injectable()
export class AuthService {

    constructor() {
    }

    addToken(userId: number, accessToken: string) {
        let token = new Token();
        token.accessToken = accessToken;
        token.userId = +userId;
    }

}
