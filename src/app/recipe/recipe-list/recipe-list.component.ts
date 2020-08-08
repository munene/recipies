import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  // The list of recipes to be fed into this component for rendering
  @Input() recipes: Array<Recipe>;

  // The emitter to alert the parent when a recipe is selected
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Set the recipe to be show on the details view
   * @param  {Recipe} recipe: The recipe to be shown
   */
  selectRecipe(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}
