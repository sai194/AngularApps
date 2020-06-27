import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { LookupService} from '../lookup.service';
import {of} from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  adminGroup: FormGroup;
  instances: [''];
  apps: [''];
  applicationTypes: [''];
  appUrl: 'https://www.google.com/';

  constructor(private fb: FormBuilder, private lookupService: LookupService) {}

  ngOnInit(): void {
    this.adminGroup = this.fb.group({
      instanceType: ['', [Validators.required]],
      applicationType: ['', [Validators.required]],
      app: ['', [Validators.required]]
    });

    // of make async
    of(this.lookupService.getInstanceTypes()
      .subscribe(data => {this.instances = data; },
        error => console.log(error)));

    this.lookupService.getApps()
      .subscribe(data => this.apps = data,
        error => console.log(error));

    this.lookupService.getApplicationTypes()
      .subscribe(data => this.applicationTypes = data,
        error => console.log(error));

  }

  onSubmit() {
    console.log(this.adminGroup.value);
  }
}
