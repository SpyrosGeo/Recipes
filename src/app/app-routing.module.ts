import { Routes ,RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './auth/auth.component';


const appRoutes:Routes = [
  {path:'',redirectTo:'/recipes',pathMatch:'full'},
  {path:'auth',component:AuthComponent}

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
