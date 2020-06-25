import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {SidenavComponent} from "./sidenav/sidenav.component";
import {HomeComponent} from "./home/home.component";


const routes: Routes = [
  {path: '', redirectTo:'/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'topnav', component: ToolbarComponent},
  {path: 'sidenav', component: SidenavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
