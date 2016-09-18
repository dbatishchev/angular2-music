import {Component, OnInit} from '@angular/core';
import {AuthService} from "./services/auth.service";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers: [AuthService]
})
export class AppComponent implements OnInit {
    title = 'app works!';

    private authService: AuthService;

    constructor(authService: AuthService) {
        this.authService = authService;
    }

    ngOnInit() {
        let accessToken = this.getQueryVariable('access_token');
        let userId = this.getQueryVariable('user_id');

        if (accessToken && userId) {
            this.authService.addToken(+userId, accessToken);
        }
    }

    getQueryVariable(variable) {
        var query = window.location.hash.substring(1);
        var vars = query.split('&');
        for (var i = 0; i < vars.length; i++) {
            var pair = vars[i].split('=');
            if (decodeURIComponent(pair[0]) == variable) {
                return decodeURIComponent(pair[1]);
            }
        }
        console.log('Query variable %s not found', variable);
    }
}
