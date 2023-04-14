import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
{path:'login', component: LoginComponent},
{path:'register', component: RegisterComponent},
{path:'home', component: HomeComponent},
{path:'welcome', component: WelcomeComponent},
{path:'error', component: ErrorComponent},
{ path: '**', redirectTo: 'login', pathMatch: 'full' }, // Si no encuentra la ruta, redirige a login


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
