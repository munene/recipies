import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from 'src/app/models/recipe.model';
import { Media } from 'src/app/models/media.model';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss']
})
export class RecipeDetailComponent implements OnInit {
  // The recipe to be rendered on the details view
  private _recipe: Recipe;

  @Input()
  get recipe(): Recipe { return this._recipe; }

  // A listener for when the selected recipe is changed
  set recipe(value: Recipe) {
    this._recipe = value;
  }

  constructor(private sanitizer: DomSanitizer) { }

  ngOnInit(): void {
  }

  getMediaUrl(media: Media): SafeUrl {
    if (!media || !media.url) {
      return '';
    }

    return this.sanitizer.bypassSecurityTrustResourceUrl(media.url);
  }
}
