import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../employee-service.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeList = [];
  public errorMsg ='';
  constructor(private employeeServiceService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeServiceService.getEmployees()
      .subscribe( data => this.employeeList = data,
        error => this.errorMsg = error);
  }

}
