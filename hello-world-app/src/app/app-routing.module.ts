import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DepartmentListComponent} from "./department-list/department-list.component";
import {EmployeeDetailComponent} from "./employee-detail/employee-detail.component";
import {TestComponent} from "./test/test.component";
import {PgNotFoundComponent} from "./pg-not-found/pg-not-found.component";
import {DepartmentDetailComponent} from "./department-detail/department-detail.component";
import {DepartmentOverviewComponent} from "./department-overview/department-overview.component";
import {DepartmentContactComponent} from "./department-contact/department-contact.component";


const routes: Routes = [
  {path: '', redirectTo:'/departments', pathMatch: 'full'},
  {path: 'departments', component: DepartmentListComponent},
  {path: 'departments/:id',
    component: DepartmentDetailComponent,
    children: [
      {path: 'overview', component: DepartmentOverviewComponent},
      {path: 'contact', component: DepartmentContactComponent}
    ]},
  {path: 'employees', component: EmployeeDetailComponent},
  {path: 'tests', component:TestComponent},
  {path: '**', component: PgNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
export const routingComponents = [DepartmentListComponent, EmployeeDetailComponent, TestComponent,
                                  PgNotFoundComponent, DepartmentDetailComponent,
                                  DepartmentContactComponent, DepartmentOverviewComponent];
