import { RouterEvent, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './service/auth.guard';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { CrudPostComponent } from './posts/crud-post/crud-post.component';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [authGuard] },
  { path: 'register', component: RegisterComponent },
  {path:'create-post',component:CreatePostComponent},
  {path:'post-menu',component:CrudPostComponent}
];
