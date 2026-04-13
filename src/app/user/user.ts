import { Component, signal } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { FlightService } from '../services/flight.service';
import { Loading } from '../loading/loading';
import { Alerts } from '../alerts';

@Component({
  selector: 'app-user',
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, MatSelectModule, Loading],
  templateUrl: './user.html',
  styleUrl: './user.css',
})
export class User {
  public activeUser = AuthService.getActiveUser()
  destinations = signal<string[]>([])
  oldPassword: string = ''
  newPassword: string = ''
  passwordRepeat: string = ''

  constructor(private router: Router) {
    if (!AuthService.getActiveUser()) {
      router.navigate(['/login'])
      return
    }

    FlightService.getDestinations()
      .then(rsp => this.destinations.set(rsp.data))
  }

  updateUser() {
    AuthService.updateActiveUser(this.activeUser!)
    Alerts.success("User updated successfully!")
  }

  updatePassword() {
    if (this.oldPassword != this.activeUser?.password) {
      Alerts.error("Old password is incorrect!")
      return
    }

    if (this.newPassword != this.passwordRepeat) {
      Alerts.error("Passwords do not match!")
      return
    }

    if (this.newPassword.length < 6) {
      Alerts.error("Password must be at least 6 characters long!")
      return
    }

    if (this.newPassword == this.oldPassword) {
      Alerts.error("New password cannot be the same as the old password!")
      return
    }

    AuthService.updateActiveUserPassword(this.newPassword)

    Alerts.success("Password updated successfully!")
    AuthService.logout()
    this.router.navigate(['/login'])
  }
}
