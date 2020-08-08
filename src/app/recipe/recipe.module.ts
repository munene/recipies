import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeParentComponent } from './recipe-parent/recipe-parent.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    RecipeParentComponent,
    RecipeListComponent,
    RecipeDetailComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    RecipeParentComponent
  ]
})
export class RecipeModule { }
