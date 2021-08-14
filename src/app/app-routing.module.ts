import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ElHomeComponent } from './el-home/el-home.component';
import { ElLoginComponent } from './el-login/el-login.component';

const routes: Routes = [
  { path: 'login', component: ElLoginComponent},
  { path: 'home', component: ElHomeComponent},
  { path: '', redirectTo:'/login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
