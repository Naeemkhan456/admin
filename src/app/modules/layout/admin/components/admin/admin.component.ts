import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  constructor(private router: Router) {}

  logout() {
    // Implement your logout logic here, such as clearing user data
    console.log('Logging out...');

    // Redirect to the login page after logging out
    this.router.navigate(['/auth/login']);
  }
}
