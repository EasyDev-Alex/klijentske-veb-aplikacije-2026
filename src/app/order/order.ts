import { Component, signal } from '@angular/core';
import { FlightModel } from '../../models/flight.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FlightService } from '../services/flight.service';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { Loading } from '../loading/loading';
import { Utils } from '../utils';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-order',
  imports: [MatCardModule, RouterLink, FormsModule, MatButtonModule, Loading, MatListModule, MatIconModule],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  flight = signal<FlightModel | null>(null)
  airlines = DataService.getAirlines();
  seatingType = DataService.getSeatingTypes();

  constructor (private route: ActivatedRoute, public utils: Utils) {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      FlightService.getFlightById(id)
      .then(rsp => {
        this.flight.set(rsp.data);
      })
    })
  }
  
}
