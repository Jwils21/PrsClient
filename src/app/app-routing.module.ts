import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserEditComponent } from '@user/user-edit/user-edit.component';
import { UserListComponent } from '@user/user-list/user-list.component';
import { UserDetailComponent } from '@user/user-detail/user-detail.component';


const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'},
 {path: 'users/detail/:id', component: UserDetailComponent},
 {path: 'users/edit/:id', component: UserEditComponent},
 {path: 'users/list', component: UserListComponent},
 {path: '**', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
