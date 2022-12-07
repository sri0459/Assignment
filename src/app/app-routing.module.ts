import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateItemComponent } from './create-item/create-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';
import { ListItemComponent } from './list-item/list-item.component';

const routes: Routes = [
  {path:'',redirectTo:'/create',pathMatch:'full'},
  {path:'create',component:CreateItemComponent},
  {path:'list-item',component:ListItemComponent},
  {path:'update-item/:id',component:EditItemComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
