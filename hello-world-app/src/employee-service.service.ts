import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }

  getEmployees() {
    return [
      {"id": 1, "name": "Ikshvak"},
      {"id": 2, "name": "Sai"},
      {"id": 3, "name": "Yeluri"}
    ];
  }
}
