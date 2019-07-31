import { Routes ,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';


const appRoutes:Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
];
@NgModule({
imports:[
  RouterModule.forRoot(appRoutes)
  // RouterModule.forRoot(appRoutes,{useHash:true})
],
exports:[RouterModule]
})
export class AppRoutingModule {

}
