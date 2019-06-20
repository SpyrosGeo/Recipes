import { Component, OnInit ,Input} from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
  //used the Inpute decorator to pass through data from the other components
@Input() recipe: Recipe;
  constructor() { }

  ngOnInit() {
  }

}
