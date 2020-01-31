import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [
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

  constructor() { }

  ngOnInit() {
  }

}
