import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MaterialAppModule } from './ngmaterial.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppComponent } from '../app/app.component';
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';
import { SubscriptionMenuComponent } from './subscription-menu/subscription-menu.component';


@NgModule({
  declarations: [
    AppComponent,
    PurchaseFormComponent,
    SubscriptionMenuComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialAppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
