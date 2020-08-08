import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeParentComponent } from './recipe-parent/recipe-parent.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';



@NgModule({
  declarations: [RecipeParentComponent, RecipeListComponent, RecipeDetailComponent],
  imports: [
    CommonModule
  ]
})
export class RecipeModule { }
