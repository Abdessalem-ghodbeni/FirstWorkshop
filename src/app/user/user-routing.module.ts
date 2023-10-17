import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponentComponent } from './list-user-component/list-user-component.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';

const routes: Routes = [
  {path:"",redirectTo:"user",pathMatch:"full"},
  {path:"user",component:ListUserComponentComponent,children:[{path:"addUser",component:AddUserComponent},
  {path:"edit_user/:param",component:EditUserComponent}]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
