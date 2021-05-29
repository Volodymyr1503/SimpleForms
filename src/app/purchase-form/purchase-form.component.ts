import { Component, OnInit, ViewChild } from '@angular/core';
import { SubscriptionMenuComponent } from '../subscription-menu/subscription-menu.component';
import { NgForm } from '@angular/forms';
import { CartService } from '../cart.service';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;
  items = this.cartService.getItems();

  submitted = false;

  constructor(private cartService: CartService) { }


  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.myForm.value);
    this.items = this.cartService.clearCart();
    this.submitted = !this.submitted;
  }
  ngOnInit(): void {
  }

}
