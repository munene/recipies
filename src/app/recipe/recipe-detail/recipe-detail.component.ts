import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.models';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  // The recipe to be rendered on the details view
  @Input()
  get recipe(): Recipe { return this._recipe; }

  // A listener for when the selected recipe is changed
  set recipe(value: Recipe) {
    this._recipe = value;
  }
  private _recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

}
