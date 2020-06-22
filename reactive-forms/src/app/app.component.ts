import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';
  registrationForm = new FormGroup({
    userName: new FormControl('Sai'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    address: new FormGroup({
      city: new FormControl(''),
      state: new FormControl(''),
      postalCode: new FormControl('')
    })
  });

  loadAPIData() {
    this.registrationForm.patchValue({
      userName: 'Bruce',
      password: 'test',
      //confirmPassword: 'test',
      address: {
        city: 'City',
        state: 'State',
        postalCode: '123456'
      }
    });
  }
}
