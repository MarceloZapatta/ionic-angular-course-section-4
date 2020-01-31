import { RecipesService } from './../recipes.service';
import { Recipe } from './recipe.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: Recipe;

  constructor(private activatedRoute: ActivatedRoute, private recipesService: RecipesService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect to begin
        return;
      }

      const recipeId = paramMap.get('recipeId');

      this.recipe = this.recipesService.getRecipe(recipeId);
    });
  }
}