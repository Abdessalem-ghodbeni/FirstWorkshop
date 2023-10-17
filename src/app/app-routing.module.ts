import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { ProductsComponent } from './products/products.component';
 
import { NotFoundComponent } from './not-found/not-found.component';
 

const routes: Routes = [{path:"home",component:LandingPageComponent},
// {path:"user",component:ListUserComponentComponent,children:[{path:"addUser",component:AddUserComponent},
// {path:"edit_user/:param",component:EditUserComponent}]},
{path:"product",component:ProductsComponent},
// {path:"addUser",component:AddUserComponent}
{path:"user",loadChildren:()=>import("./user/user.module").then(m=>m.UserModule)},
{path:"**",component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
