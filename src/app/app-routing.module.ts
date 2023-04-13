import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './MyComponents/contact-page/contact-page.component';
import { DashboardComponent } from './MyComponents/dashboard/dashboard.component';
import { LoginComponent } from './MyComponents/login/login.component';
import { AuthGuard } from './Guards/auth.guard';
import { ResetPasswordComponent } from './MyComponents/reset-password/reset-password.component';

const routes: Routes = [
   {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'dash',component:DashboardComponent,canActivate:[AuthGuard]},
  {path:'contactUs',component:ContactPageComponent,canActivate:[AuthGuard]},
  {path:'reset',component:ResetPasswordComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
