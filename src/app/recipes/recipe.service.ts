import { EventEmitter } from '@angular/core';

import { Recipe } from "./recipe.model";


export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('First Recipe','This is a test','https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'),
    new Recipe('A Second Recipe','This is a test','https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80'),
    new Recipe('A third Recipe','This is a test','https://images.unsplash.com/photo-1518779578993-ec3579fee39f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80')
  ];
  getRecipes(){
    //we use slice with no arguments so we cant access the recipes at all
    return this.recipes.slice();
  }
}
