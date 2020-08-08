import { Media } from './media.model';

export type Recipe = {
  name: string;
  media: Array<Media>;
  description: string;
  ingredients: Array<string>;
  steps: Array<string>;
}
