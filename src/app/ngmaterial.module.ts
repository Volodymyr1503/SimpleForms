import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card'
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
imports: [MatButtonModule, MatCardModule, MatGridListModule],
exports: [MatButtonModule, MatCardModule, MatGridListModule]
})
export class MaterialAppModule { }