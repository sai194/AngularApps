import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../employee-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList = [];
  public errorMsg = '';
  constructor(private employeeServiceService: EmployeeServiceService) { }

  ngOnInit(): void {
     this.employeeServiceService.getEmployees()
       .subscribe( data => this.employeeList = data,
         error => this.errorMsg = error);
  }

}
