import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/auth.service';

@Component({
    moduleId: module.id,
    selector: 'admin-login',
    templateUrl: './admin-login.component.html'
})
export class AdminLoginComponent {
    message: string;
    constructor(private authService: AuthService, private router: Router) {
        this.setMessage();
    }
    setMessage() {
        this.message = 'Logged ' + (this.authService.isLoggedIn ? 'in' : 'out');
    }
    login() {
        this.message = 'Trying to log in ...';
        this.authService.login().subscribe(() => {
            this.setMessage();
            if (this.authService.isLoggedIn) {
                // Get the redirect URL from our auth service
                // If no redirect has been set, use the default
                let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/admin';
                // Redirect the user
                this.router.navigate([redirect]);
            }
        });
    }
    logout() {
        this.authService.logout();
        this.setMessage();
    }
}