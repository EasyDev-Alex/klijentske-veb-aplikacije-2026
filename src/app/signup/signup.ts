import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FlightService } from '../services/flight.service';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-signup',
  imports: [MatCardModule, MatInputModule, MatButtonModule, MatIconModule, FormsModule, MatSelectModule],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  email: string = ''
  firstName: string = ''
  lastName: string = ''
  phone: string = ''
  address: string = ''
  password: string = ''
  repeat: string = ''
  destination: string = ''

  destinations = signal<string[]>([])

  constructor() {
    FlightService.getDestinations()
    .then(rsp => this.destinations.set(rsp.data))
  }

  doSignup() {

  }
}
