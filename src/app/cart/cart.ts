import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { OrderModel } from '../../models/order.model';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Utils } from '../utils';
import { Alerts } from '../alerts';

@Component({
  selector: 'app-cart',
  imports: [MatCardModule, MatTableModule, RouterLink, MatIconModule, MatButtonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css',
})
export class Cart {
  airlines = DataService.getAirlines()
  types = DataService.getSeatingTypes()
  displayedColumns = ['destination', 'flightNumber', 'scheduledAt', 'airline', 'seatingType', 'ageGroup', 'count', 'options']

  constructor(public router: Router, public utils: Utils) {
    if (!AuthService.getActiveUser()) {
      this.router.navigate(['/login'])
      return
    }
  }

  async removeOrder(order: OrderModel) {
    Alerts.confirm('Confirm Removal', `Are you sure you want to remove ${order.count} ticket${order.count > 1 ? 's' : ''} for ${order.destination}?`, () => {
      AuthService.cancelOrder(order.createdAt)
    })
  }

  payAll() {
    Alerts.confirm('Confirm Payment?', `<strong>Total: €${this.calculateTotal()}</strong>`, () => {
      AuthService.payOrders()
      this.router.navigate(['/user'])
    })
  }

  calculateTotal() {
    let total = 0
    for (let order of this.getOrders()) {
      total += this.utils.calculateTotal(order)
    }
    return total
  }

  

  getOrders() {
    return AuthService.getOrdersByState('w')
  }

  getCanceledOrders() {
    return AuthService.getOrdersByState('c')
  }

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
