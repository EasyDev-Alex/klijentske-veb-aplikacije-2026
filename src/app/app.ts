import { Component, signal } from '@angular/core';
import { Router, RouterLinkWithHref, RouterOutlet } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterLinkWithHref,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

// The following code is commented because it breaks the whole app. Don't know why yet. The first line breaks it.

   activeUser = AuthService.getActiveUser()

  

  constructor(private router: Router) {

  }

  doLogout() {
    AuthService.logout()
    this.router.navigate(['/login'])
  }
}