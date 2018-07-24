import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@app/home/home.component';
import { AboutComponent } from '@app/about/about.component';

import { UserLoginComponent } from '@user/user-login/user-login.component';
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

import { PurchaserequestListComponent } from '@purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestDetailComponent } from '@purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestEditComponent } from '@purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestCreateComponent } from '@purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestReviewComponent } from '@purchaserequest/purchaserequest-review/purchaserequest-review.component';

import { PurchaserequestlineitemListComponent } from '@purchaserequestlineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';
import { PurchaserequestlineitemDetailComponent } from '@purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaserequestlineitemEditComponent } from '@purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaserequestlineitemCreateComponent } from '@purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';


const routes: Routes = [
 {path: 'users/login', redirectTo: 'users/login', pathMatch: 'full'},
 {path: 'home', component: HomeComponent},
 {path: 'about', component: AboutComponent},

 {path: 'users/create', component: UserCreateComponent},
 {path: 'users/detail/:id', component: UserDetailComponent},
 {path: 'users/edit/:id', component: UserEditComponent},
 {path: 'users/list', component: UserListComponent},
 {path: 'users/login', component: UserLoginComponent},

 {path: 'vendors/create', component: VendorCreateComponent},
 {path: 'vendors/detail/:id', component: VendorDetailComponent},
 {path: 'vendors/edit/:id', component: VendorEditComponent},
 {path: 'vendors/list', component: VendorListComponent},

 {path: 'products/list', component: ProductListComponent},
 {path: 'products/detail/:id', component: ProductDetailComponent},
 {path: 'products/edit/:id', component: ProductEditComponent},
 {path: 'products/create', component: ProductCreateComponent},

 {path: 'purchaserequests/list', component: PurchaserequestListComponent},
 {path: 'purchaserequests/detail/:id', component: PurchaserequestDetailComponent},
 {path: 'purchaserequests/edit/:id', component: PurchaserequestEditComponent},
 {path: 'purchaserequests/create', component: PurchaserequestCreateComponent},
 {path: 'purchaserequests/review', component: PurchaserequestReviewComponent},

 {path: 'purchaserequestlineitems/list', component: PurchaserequestlineitemListComponent},
 {path: 'purchaserequestlineitems/detail/:id', component: PurchaserequestlineitemDetailComponent},
 {path: 'purchaserequestlineitems/edit/:id', component: PurchaserequestlineitemEditComponent},
 {path: 'purchaserequestlineitems/create', component: PurchaserequestlineitemCreateComponent},

 {path: '**', component: UserEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
