import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';


export class ShoppingListService {
  //added a eventemitter so i dont remove the slice() and accidentaly edit the array somewhere
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients:Ingredient[] = [
    new Ingredient('Apples',5),
    new Ingredient('Tomatos',10)
  ];
  getIngredients(){
    return this.ingredients.slice();
  }
  addIngredient(ingredient:Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}
