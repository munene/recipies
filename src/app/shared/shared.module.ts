import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavHeaderComponent } from './nav-header/nav-header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NewRecipeDialogComponent } from './new-recipe-dialog/new-recipe-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [NavHeaderComponent, NewRecipeDialogComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  exports: [
    NavHeaderComponent
  ]
})
export class SharedModule { }
