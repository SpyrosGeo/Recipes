import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService }from '../recipe.service';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //used the Inpute decorator to pass through data from the other components
  @Input() recipe: Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit() {
  }
  onAddToShoppingList() {
    console.log("test");
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }
}
