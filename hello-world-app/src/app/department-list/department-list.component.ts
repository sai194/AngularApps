import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from "@angular/router";

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {

  public departments = [
    {"id": 1, "name": "Angular"},
    {"id": 2, "name": "Vue"},
    {"id": 3, "name": "Spring Boot"},
    {"id": 4, "name": "Node"},
    {"id": 5, "name": "Python"}
  ];

  public selectedId;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.selectedId = id;
    })
  }

  onSelect(department) {
    this.router.navigate(['/departments',department.id])
  }

  isSelected(department) {
    return this.selectedId === department.id;
  }

}
