import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  //fetched the recipe from recipe.model using the Input decorator
  @Input() recipe: Recipe;
  //created a new event emits data when the recipe item link is clicked
  @Output() recipeSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }
  onSelected(){
    this.recipeSelected.emit();
  }
}
