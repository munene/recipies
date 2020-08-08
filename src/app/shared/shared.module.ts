import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';


@NgModule({
  declarations: [NavHeaderComponent],
  imports: [
    CommonModule,
    MatToolbarModule
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class SharedModule { }
