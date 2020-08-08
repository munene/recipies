import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../models/recipe.model';

@Component({
  selector: 'app-recipe-parent',
  templateUrl: './recipe-parent.component.html',
  styleUrls: ['./recipe-parent.component.scss']
})
export class RecipeParentComponent implements OnInit {
  recipes: Array<Recipe> = [
    {
      name: 'Bacon and Egg Doughnuts',
      description: `I've always wanted to try making some kind of
      sweet/savory bacon-studded fritter using pate a choux,
      also known as that stuff you make cream puffs with.
      I went full breakfast theme, and topped mine with a little maple syrup,
      but feel free to get your beignet on, and cover them with a pile of powdered sugar.`,
      media: [
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/fcD94e93cCk'
        },
        {
          type: 'image',
          url: 'https://www.telegraph.co.uk/content/dam/food-and-drink/2019/01/11/TELEMMGLPICT000185036503_trans_NvBQzQNjv4Bq8m3xuhMyFOjUOkuEnTdW-M-bhHwB87o-r13mliye62g.jpeg'
        }
      ],
      ingredients: [
        '1 cup cold water',
        '2 tablespoons cold water',
        '½ cup butter',
        '2 tablespoons white sugar',
        '1 cup all-purpose flour'
      ],
      steps: [
        `Pour 1 cup plus 2 tablespoons cold water into a saucepan
        over medium-high heat. Add butter, sugar, salt and nutmeg.
        When mixture starts to simmer, reduce heat to medium and add flour.
        Cook, stirring constantly, until mixture comes together into a soft dough ball,
        about 2 minutes. Remove from heat and transfer to a mixing bowl.
        Pour in vanilla extract. Break up dough with a whisk or fork, and let cool
        for about 5 minutes.`,
        `Break an egg into the bowl with the dough and whisk until egg is
        incorporated and dough becomes smooth and sticky, 4 to 5 minutes.
        Dough will stick inside the whisk; clean out dough with a spatula
        before adding successive eggs, 1 at a time. Whisk in each egg until
        thoroughly incorporated into the dough. Clear dough from whisk;
        scrape down sides of bowl. Cover dough with plastic wrap and chill
        for about an hour.`,
        `Place bacon in cold skillet. Cook over medium heat, stirring occasionally,
        until bacon is browned and crisp and fat is rendered, 5 to 8 minutes.
        Transfer bacon pieces to a paper towel-lined plate to drain. When bacon is cool
        enough to handle, place it on a cutting board and chop into small pieces.
        Reserve some bacon bits for topping the doughnuts.`,
        `Heat oil in a deep-fryer or large saucepan to 350 degrees F (175 degrees C).`
      ]
    },
    {
      name: 'Recipe 2',
      description: 'Description',
      media: [],
      ingredients: [],
      steps: []
    },
    {
      name: 'Recipe 3',
      description: 'Description',
      media: [],
      ingredients: [],
      steps: []
    },
    {
      name: 'Recipe 4',
      description: 'Description',
      media: [],
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
