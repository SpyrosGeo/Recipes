import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule } from '@angular/router';
import {  ReactiveFormsModule, FormsModule } from '@angular/forms';


import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';
import { ShoppingListRoutingModule } from './shopping-list-routing.module';

@NgModule({
  declarations: [
    ShoppingListComponent,
    ShoppingEditComponent,
  ],
  imports: [ RouterModule,CommonModule,ReactiveFormsModule,ShoppingListRoutingModule,FormsModule],
  exports: [],
  providers: [],
})
export class ShoppingListModule {}
