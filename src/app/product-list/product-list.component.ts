import { Component, OnInit } from '@angular/core';
import { ProductAlertsComponent} from '../product-alerts/product-alerts.component';
import { products } from '../products';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = products;
  constructor() { }

  share() {
    window.alert('The product has been shared!');
  }
  
  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
  }

}