import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { CustomerComponent } from './customer/customer.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    RegisterComponent,
    PrivacyComponent,
    ManageProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
