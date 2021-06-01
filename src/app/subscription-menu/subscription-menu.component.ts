import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormArray, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-subscription-menu',
  templateUrl: './subscription-menu.component.html',
  styleUrls: ['./subscription-menu.component.css']
})
export class SubscriptionMenuComponent implements OnInit {
  subForm: FormGroup;

  subscribed = false;
  get emailsFormArray() {
    return this.subForm.get("emails") as FormArray;
  }

  constructor() { 
    this.subForm = new FormGroup({
      fullName: new FormGroup({
        firstName: new FormControl(" ", [Validators.required, Validators.minLength(4)]),
        lastName: new FormControl(" ", [Validators.required, Validators.minLength(4)])
      }),
      userName: new FormControl(" ", [
         Validators.required, 
         Validators.minLength(5),
         Validators.maxLength(12)
      ]),
      password: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.pattern(/\d/),
        Validators.pattern(/[A-Z]/),
        Validators.pattern(/[a-z]/),
        Validators.minLength(10)
      ])),
      emails: new FormArray([])
    });
  }
  addControl() {
    this.emailsFormArray.push(new FormControl(" ", [Validators.required, Validators.email]))
  }
  removeControl(index: number) {
    this.emailsFormArray.removeAt(index);
  }
  onSubscribe() {
    console.table(this.subForm.value);
    this.subscribed = !this.subscribed;
    this.subForm.reset();
  }

  ngOnInit(): void {
    
  }

}
