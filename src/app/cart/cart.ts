import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { MatCardModule } from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import { OrderModel } from '../../models/order.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Utils } from '../utils';

@Component({
  selector: 'app-cart',
  imports: [MatCardModule, MatTableModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  airlines = DataService.getAirlines()
  types = DataService.getSeatingTypes()
  displayedColumns = ['destination','flightNumber', 'scheduledAt', 'airline', 'seatingType', 'ageGroup', 'count', 'options']

  constructor(public router: Router, public utils: Utils) {
    if (!AuthService.getActiveUser()) {
      this.router.navigate(['/login'])
      return
    }

    // const orders = AuthService.getOrdersOnWaiting()

  }



  getOrders() {
    return AuthService.getOrdersOnWaiting()
  }

  // getOrdersAsJSON() {
  //   return JSON.stringify(this.getOrders(), null, 2)
  // }

  getAirline(order: OrderModel) {
    return DataService.getAirlinesById(order.airlineId).name
  }

  getAgeGroup(order: OrderModel) {
    return DataService.getFullAgeGroupText(order.ageGroup)
  }

  getSeatingType(order: OrderModel) {
    return DataService.getSeatingTypeById(order.seatingTypeId).name
  }
}
