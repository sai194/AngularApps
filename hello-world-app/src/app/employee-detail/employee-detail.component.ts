import { Component, OnInit } from '@angular/core';
import {EmployeeServiceService} from "../../employee-service.service";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  public employeeList = [];
  constructor(private employeeServiceService: EmployeeServiceService) { }

  ngOnInit(): void {
    this.employeeList = this.employeeServiceService.getEmployees();
  }

}
