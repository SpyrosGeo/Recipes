import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Store } from '@ngrx/store';

import { Recipe } from "./recipe.model";
import { Ingredient }from '../shared/ingredient.model';
import * as ShoppingListActions from '../shopping-list/store/shopping-list.actions';
// import * as fromShoppingList from '../shopping-list/store/shopping-list.reducer';
import * as fromApp from '../store/app.reducer';
@Injectable()
export class RecipeService {
  recipesChanged = new Subject <Recipe[]>();
  // private recipes: Recipe[] = [
  //   new Recipe('Cheesy Pork Sausage Flatbreads','Tasty Flatbreat','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,h_400,q_auto/v1/hellofresh_s3/5cf80b721673620013382c95/step-c0819f7e.jpg',[
  //
  //     new Ingredient('Meat',1),
  //     new Ingredient('Cheese',5)
  //   ]),
  //   new Recipe('Annie’s Organic Cinnamon Rolls','with Gooey Icing Drizzle (makes 5 cinnamon rolls)','https://res.cloudinary.com/hellofresh/image/upload/f_auto,fl_lossy,q_auto,w_2600/v1/hellofresh_s3/image/w27-annie-s-organic-cinnamon-rolls-36df5ba7.jpg',[
  //     new Ingredient('milk',5),
  //     new Ingredient('wheat',3)
  //   ])
  // ];
  private recipes:Recipe[] = [];
  constructor(
              private store:Store<fromApp.AppState>){}

  setRecipes(recipes:Recipe[]){
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }



  getRecipes(){
    //we use slice with no arguments so we cant access the recipes at all
    return this.recipes.slice();
  }
  getRecipe(index:number){
    return this.recipes.slice()[index];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]){
    // this.slService.addIngredients(ingredients);
    this.store.dispatch(new ShoppingListActions.AddIngredients(ingredients))
  }
  addRecipe(recipe:Recipe){
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index:number,newRecipe:Recipe){
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index:number){
    this.recipes.splice(index,1)
    this.recipesChanged.next(this.recipes.slice())
  }
}
