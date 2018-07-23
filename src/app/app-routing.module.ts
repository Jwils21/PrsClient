import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';

import { UserEditComponent } from '@user/user-edit/user-edit.component';
import { UserListComponent } from '@user/user-list/user-list.component';
import { UserDetailComponent } from '@user/user-detail/user-detail.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';


const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'about', component: AboutComponent},
 {path: 'users/create', component: UserCreateComponent},
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
