import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-purchase-form',
  templateUrl: './purchase-form.component.html',
  styleUrls: ['./purchase-form.component.css']
})
export class PurchaseFormComponent implements OnInit {
  @ViewChild('myForm') myForm: NgForm;

  purchased = false;
  constructor() { }


  onSubmit(): void {
    // Process checkout data here
    console.warn('Your order has been submitted', this.myForm.value);
    this.purchased = !this.purchased;
    this.myForm.reset();
  }
  ngOnInit(): void {
  }

}
