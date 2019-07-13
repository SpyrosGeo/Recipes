import { Component, OnInit} from '@angular/core';
import { NgForm }  from '@angular/forms';

import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService}from '../shopping-list.service';
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  // used the local references with the ViewChild so we can use the value of the inputs



  constructor(private slService:ShoppingListService) { }

  ngOnInit() {
  }
  onAddItem(form:NgForm){
    const value =form.value
    const newIngredient = new Ingredient(value.name,value.amount);
    this.slService.addIngredient(newIngredient);
  }
}
