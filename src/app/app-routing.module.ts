import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';

import { UserEditComponent } from '@user/user-edit/user-edit.component';
import { UserListComponent } from '@user/user-list/user-list.component';
import { UserDetailComponent } from '@user/user-detail/user-detail.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';

import { VendorListComponent } from '@vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from '@vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from '@vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from '@vendor/vendor-create/vendor-create.component';

import { ProductListComponent } from '@product/product-list/product-list.component';
import { ProductDetailComponent } from '@product/product-detail/product-detail.component';
import { ProductEditComponent } from '@product/product-edit/product-edit.component';
import { ProductCreateComponent } from '@product/product-create/product-create.component';


const routes: Routes = [
 {path: '', redirectTo: 'login', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'about', component: AboutComponent},

 {path: 'users/create', component: UserCreateComponent},
 {path: 'users/detail/:id', component: UserDetailComponent},
 {path: 'users/edit/:id', component: UserEditComponent},
 {path: 'users/list', component: UserListComponent},

 {path: 'vendors/create', component: VendorCreateComponent},
 {path: 'vendors/detail/:id', component: VendorDetailComponent},
 {path: 'vendors/edit/:id', component: VendorEditComponent},
 {path: 'vendors/list', component: VendorListComponent},

 {path: 'products/list', component: ProductListComponent},
 {path: 'products/detail/:id', component: ProductDetailComponent},
 {path: 'products/edit/:id', component: ProductEditComponent},
 {path: 'products/create', component: ProductCreateComponent},

 {path: '**', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
