import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthIntercepterService } from './auth/auth.intercepter.service';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipes/recipe.service';

@NgModule({

  providers: [
      RecipeService,
      {provide:HTTP_INTERCEPTORS,
        useClass:AuthIntercepterService,
        multi:true}

  ],
})
export class CoreModule {}
