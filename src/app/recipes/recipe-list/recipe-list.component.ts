import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as fromApp from '../../store/app.reducer';

import { Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subscription:Subscription

  constructor(private recipeService:RecipeService,
              private router:Router,
              private route: ActivatedRoute,
              private store:Store<fromApp.AppState>) { }

  ngOnInit() {

    this.subscription = this.store.select('recipes')
    .pipe(map(recipesState =>{
      return recipesState.recipes
    })
  )
    .subscribe((recipes:Recipe[])=>{
      this.recipes = recipes;
    })
    this.recipes = this.recipeService.getRecipes();
  }
  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
