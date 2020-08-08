import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.models';

@Component({
  selector: 'app-recipe-parent',
  templateUrl: './recipe-parent.component.html',
  styleUrls: ['./recipe-parent.component.scss']
})
export class RecipeParentComponent implements OnInit {
  recipes: Array<Recipe> = [
    {
      name: 'Recipe 1',
      description: 'Description',
      images: [],
      ingredients: [],
      steps: []
    },
    {
      name: 'Recipe 2',
      description: 'Description',
      images: [],
      ingredients: [],
      steps: []
    },
    {
      name: 'Recipe 3',
      description: 'Description',
      images: [],
      ingredients: [],
      steps: []
    },
    {
      name: 'Recipe 4',
      description: 'Description',
      images: [],
      ingredients: [],
      steps: []
    },
  ];

  selectedRecipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  /**
   * The listener for when a recipe is selected
   * It sends the selected recipe to the details view
   * @param  {Recipe} recipe: The selected recipe
   */
  onRecipeSelected(recipe: Recipe) {
    this.selectedRecipe = recipe;
  }
}
