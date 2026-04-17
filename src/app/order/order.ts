import { Component, signal } from '@angular/core';
import { FlightModel } from '../../models/flight.model';
import { DataService } from '../services/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  imports: [],
  templateUrl: './order.html',
  styleUrl: './order.css',
})
export class Order {
  flight = signal<FlightModel | null>(null)
  airlines = DataService.getAirlines();
  seatingType = DataService.getSeatingTypes();

  constructor (private route: ActivatedRoute) {
    route.params.subscribe(params => {
      console.log(params['id']);
    })
  }
  
}
