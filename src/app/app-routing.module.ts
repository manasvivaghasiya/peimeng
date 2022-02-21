import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimengComponent } from './primeng/primeng.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path:'primeng',component:PrimengComponent},
  {path:'user-list',component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
