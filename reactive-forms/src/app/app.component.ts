import { Component } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reactive-forms';
  registrationForm  = new FormGroup({
    userName: new FormControl('Sai'),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  });
}
