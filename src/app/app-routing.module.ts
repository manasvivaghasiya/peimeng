import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrimeCrudComponent } from './prime-crud/prime-crud.component';
import { PrimengComponent } from './primeng/primeng.component';

const routes: Routes = [
  {path:'primeng',component:PrimengComponent},
  {path:'primeCrud',component:PrimeCrudComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
