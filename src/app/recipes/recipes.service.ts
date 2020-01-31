import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: Recipe[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://shorturl.at/hnDG7',
      ingrediends: ['French Frie', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://shorturl.at/klJT1',
      ingrediends: ['Spaghetti', 'Tomatoe Sauce', 'Chesse']
    }
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(id: string) {
    return {...this.recipes.find(recipe => recipe.id === id)};
  }
}
