import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService }from '../recipe.service';
import { ActivatedRoute ,Params} from '@angular/router';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //used the Inpute decorator to pass through data from the other components
recipe: Recipe;
id:number;
  constructor(private recipeService:RecipeService ,private route:ActivatedRoute) { }

  ngOnInit() {
    // const id = this.route.snapshot.params['id'];
    this.route.params.subscribe(
      (params: Params)=> {
        // + to convert to number from string
        this.id = +params['id'];
        this.recipe = this.recipeService.getRecipe(this.id);
      }
    );
  }
  onAddToShoppingList() {
    console.log("test");
  this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);

  }
}
