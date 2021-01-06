import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../models/contact';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  contacts: Contact[];
  isLoading: boolean;

  constructor(public contactService: ContactService) {
  }
  ngOnInit() {
    this.isLoading = true;
    return this.contactService.getContacts().subscribe((data: Contact[]) => {
      this.contacts = data;
      this.isLoading = false;
    });
  }
  deleteContact(id: number): void {
    this.isLoading = true;
    this.contactService.deleteContact(id).subscribe(then => {
      this.contactService.getContacts().subscribe((data: Contact[]) => {
        this.contacts = data;
        this.isLoading = false;
      });
    });
  }

}
