import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { ManageProfileComponent } from './manage-profile/manage-profile.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:'', component : CustomerComponent},
  {path:'register', component : RegisterComponent},
  {path:'privacy', component : PrivacyComponent},
  {path:'manageProfile', component : ManageProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
