import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-department-detail',
  templateUrl: './department-detail.component.html',
  styleUrls: ['./department-detail.component.scss']
})
export class DepartmentDetailComponent implements OnInit {

  public departmentId;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    //let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));
    //this.departmentId = id;
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let id = parseInt(params.get('id'));
      this.departmentId = id;
    });
  }
  goPrevious() {
    let previousId = this.departmentId -1;
    this.router.navigate(['/departments', previousId]);
  }
  goNext() {
    let nextId = this.departmentId  + 1;
    this.router.navigate(['/departments', nextId]);
  }
  gotoDepartments() {
    let selectedId = this.departmentId ? this.departmentId : null;
    this.router.navigate(['/departments', {id: selectedId, test: 'testValue'}]);
  }

  showOverview() {
    this.router.navigate(['overview'], {relativeTo: this.activatedRoute});
  }

  showContact() {
    this.router.navigate(['contact'], {relativeTo: this.activatedRoute});
  }
}
