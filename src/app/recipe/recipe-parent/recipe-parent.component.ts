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
      name: `World's Best Lasagna`,
      description: `While tacos these days take many shapes and forms,
      we know that even these basic chicken tacos are not the most authentic.
      The taco history is long and rich and is originally a form of Mexican street food.
      These are a much more Americanized form of taco meaning that it's a tortilla filled
      with spiced meats and yummy toppings. While the true definition and origin of a taco
      can be quite blurry, we know one thing for sure - tacos are our favorite food group.
      Try these quick and easy tacos for your next Taco Tuesday and don't forget the
      margarita!`,
      media: [
        {
          type: 'image',
          url: 'https://images.media-allrecipes.com/userphotos/720x405/3359675.jpg'
        },
        {
          type: 'video',
          url: 'https://www.youtube.com/embed/fcD94e93cCk'
        },
        {
          type: 'image',
          url: 'https://images.media-allrecipes.com/userphotos/720x405/8414237.jpg'
        }
      ],
      ingredients: [
        '1 pound sweet Italian sausage',
        '3/4 pound lean ground beef',
        '1/2 cup minced onion',
        '2 cloves garlic, crushed',
        '1 (28 ounce) can crushed tomatoes',
        '1 1/2 teaspoons dried basil leaves',
        '1/2 teaspoon fennel seeds'
      ],
      steps: [
        `In a Dutch oven, cook sausage, ground beef, onion, and garlic over medium heat
        until well browned. Stir in crushed tomatoes, tomato paste, tomato sauce,
        and water. Season with sugar, basil, fennel seeds, Italian seasoning, 1 teaspoon
        salt, pepper, and 2 tablespoons parsley. Simmer, covered, for about 1 1/2 hours,
        stirring occasionally.`,
        `Bring a large pot of lightly salted water to a boil. Cook lasagna noodles in
        boiling water for 8 to 10 minutes. Drain noodles, and rinse with cold water.
        In a mixing bowl, combine ricotta cheese with egg, remaining parsley, and 1/2
        teaspoon salt.`,
        `Preheat oven to 375 degrees F (190 degrees C).`,
        `To assemble, spread 1 1/2 cups of meat sauce in the bottom of a 9x13 inch baking
        dish. Arrange 6 noodles lengthwise over meat sauce. Spread with one half of the
        ricotta cheese mixture. Top with a third of mozzarella cheese slices. Spoon 1 1/2
        cups meat sauce over mozzarella, and sprinkle with 1/4 cup Parmesan cheese. Repeat
        layers, and top with remaining mozzarella and Parmesan cheese. Cover with foil: to
        prevent sticking, either spray foil with cooking spray, or make sure the foil does
        not touch the cheese.`,
        `Bake in preheated oven for 25 minutes. Remove foil, and bake an additional 25 minutes.
        Cool for 15 minutes before serving.`
      ]
    },
    {
      name: 'Norwegian Pancakes',
      description: `My Norwegian grandmother made this for us as a treat,
      and it continues to be a favorite my mother makes for my kids.
      Very easy and versatile. Serve rolled like a crepe with syrup or jam.
      Can also be a dessert stuffed with a sweetened cream cheese and lingon berry mixture.`,
      media: [
        {
          type: 'image',
          url: 'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F371619.jpg&w=960&h=643&c=sc&poi=face&q=85'
        }
      ],
      ingredients: [
        '3 large eggs eggs',
        '1 ½ cups milk',
        '1 cup all-purpose flour',
        '¼ teaspoon salt',
        '1 teaspoon sugar'
      ],
      steps: [
        `Combine the eggs and milk in the container of a blender.
        Add the flour, salt and sugar, and blend until smooth.`,
        `Heat a skillet over medium-high heat, and coat with cooking spray or butter.
        Scoop about 1/4 cup of batter into the skillet, and tilt the pan to coat the bottom.
        Cook until the top looks dry, about 30 seconds. Carefully slide a spatula under the
        pancake and flip. Cook for a few seconds on the other side, just until browned.
        Remove to a plate, and repeat with remaining batter.`
      ]
    },
    {
      name: 'Best Brownies',
      description: `If you've got a gas burner, turn it to medium low and place
      your tortillas directly on the burner. Let toast a few seconds
      (you can always peek using some tongs) flip, and toast some more.
      Not only will this give your tortillas some nice smoky flavor,
      it'll also make them more pliable. Never walk away from the stove
      when you're toasting tortillas on an open flame, no one wants to
      deal with a flaming tortilla!`,
      media: [
        {
          type: "image",
          url: "https://images.media-allrecipes.com/userphotos/720x405/3850414.jpg"
        },
        {
          type: "image",
          url: "https://images.media-allrecipes.com/userphotos/720x405/8416338.jpg"
        },
        {
          type: "image",
          url: "https://images.media-allrecipes.com/userphotos/720x405/8411210.jpg"
        },
      ],
      ingredients: [
        '1/2 cup butter',
        '1 cup white sugar',
        '2 eggs',
        '1 teaspoon vanilla extract',
        '1/3 cup unsweetened cocoa powder',
        '1/2 cup all-purpose flour'
      ],
      steps: [
        `Preheat oven to 350 degrees F (175 degrees C). Grease and flour an 8-inch square pan.`,
        `In a large saucepan, melt 1/2 cup butter. Remove from heat, and stir in sugar, eggs,
        and 1 teaspoon vanilla. Beat in 1/3 cup cocoa, 1/2 cup flour, salt, and baking powder.
        Spread batter into prepared pan.`,
        `Bake in preheated oven for 25 to 30 minutes. Do not overcook.`,
        `To Make Frosting: Combine 3 tablespoons softened butter,
        3 tablespoons cocoa, honey, 1 teaspoon vanilla extract,
        and 1 cup confectioners' sugar. Stir until smooth. Frost
        brownies while they are still warm.`
      ]
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
