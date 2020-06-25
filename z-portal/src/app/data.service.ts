import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  contacts = [
    {id: 1, name: "Arjun", description: "007", email: "007@email.com"},
    {id: 2, name: "Srikanth", description: "008", email: "008@email.com"},
    {id: 3, name: "Sri Ram", description: "009", email: "009@email.com"},
    {id: 4, name: "Ikshvak", description: "010", email: "010@email.com"}
  ];

  constructor() { }

  public getContacts(): Array<{id, name, description, email}>{
    return this.contacts;
  }
  public createContact(contact: {id, name, description, email}){
    this.contacts.push(contact);
  }
}
