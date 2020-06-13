import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  public name = "Sai";

  public siteUrl = window.location.href;

  public myId = "testId";

  public isDisabled = false;

  public hasError = false;

  public twoWayText = "";

  public display = true;

  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError
  }

  @Input() public parentData;
// or
//  @Input('parentData') public testName;

  @Output() public childEvent = new EventEmitter();

  public colors = ["red", "blue", "green"];

  constructor() { }

  ngOnInit(): void {
  }

  greetUser() {
    return "hello " + this.name;
  }

  onClick(event) {
    console.log(event);
  }

  logMessage(val) {
    console.log(val);
  }

  fireEvent() {
    this.childEvent.emit('Hey F');
  }

}
