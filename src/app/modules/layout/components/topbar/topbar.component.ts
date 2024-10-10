import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit{
  loggedInUserName: string = 'Khan';
  userProfileImage: string = 'path/to/profile-image.jpg';

  constructor(private router: Router) {}

  ngOnInit(): void {


  }

  logout() {
    console.log('Logging out...');
    this.router.navigate(['/auth/login']);
  }
}
