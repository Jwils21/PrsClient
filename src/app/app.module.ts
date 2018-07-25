import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from '@user/user-list/user-list.component';
import { UserDetailComponent } from '@user/user-detail/user-detail.component';
import { UserCreateComponent } from '@user/user-create/user-create.component';
import { UserEditComponent } from '@user/user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BoolPipe } from './utility/bool.pipe';
import { VendorListComponent } from './vendor/vendor-list/vendor-list.component';
import { VendorEditComponent } from './vendor/vendor-edit/vendor-edit.component';
import { VendorDetailComponent } from './vendor/vendor-detail/vendor-detail.component';
import { VendorCreateComponent } from './vendor/vendor-create/vendor-create.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';
import { ProductCreateComponent } from './product/product-create/product-create.component';
import { PurchaserequestListComponent } from './purchaserequest/purchaserequest-list/purchaserequest-list.component';
import { PurchaserequestEditComponent } from './purchaserequest/purchaserequest-edit/purchaserequest-edit.component';
import { PurchaserequestDetailComponent } from './purchaserequest/purchaserequest-detail/purchaserequest-detail.component';
import { PurchaserequestCreateComponent } from './purchaserequest/purchaserequest-create/purchaserequest-create.component';
import { PurchaserequestlineitemListComponent } from './purchaserequestlineitem/purchaserequestlineitem-list/purchaserequestlineitem-list.component';
import { PurchaserequestlineitemEditComponent } from './purchaserequestlineitem/purchaserequestlineitem-edit/purchaserequestlineitem-edit.component';
import { PurchaserequestlineitemDetailComponent } from './purchaserequestlineitem/purchaserequestlineitem-detail/purchaserequestlineitem-detail.component';
import { PurchaserequestlineitemCreateComponent } from './purchaserequestlineitem/purchaserequestlineitem-create/purchaserequestlineitem-create.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { PurchaserequestLinesComponent } from './purchaserequest/purchaserequest-lines/purchaserequest-lines.component';
import { PurchaserequestReviewListComponent } from './purchaserequest/purchaserequest-review-list/purchaserequest-review-list.component';
import { PurchaserequestReviewDetailComponent } from './purchaserequest/purchaserequest-review-detail/purchaserequest-review-detail.component'; 


@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    UserCreateComponent,
    UserEditComponent,
    MenuComponent,
    HomeComponent,
    AboutComponent,
    BoolPipe,
    VendorListComponent,
    VendorEditComponent,
    VendorDetailComponent,
    VendorCreateComponent,
    ProductListComponent,
    ProductEditComponent,
    ProductDetailComponent,
    ProductCreateComponent,
    PurchaserequestListComponent,
    PurchaserequestEditComponent,
    PurchaserequestDetailComponent,
    PurchaserequestCreateComponent,
    PurchaserequestlineitemListComponent,
    PurchaserequestlineitemEditComponent,
    PurchaserequestlineitemDetailComponent,
    PurchaserequestlineitemCreateComponent,
    UserLoginComponent,
    PurchaserequestLinesComponent,
    PurchaserequestReviewListComponent,
    PurchaserequestReviewDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
