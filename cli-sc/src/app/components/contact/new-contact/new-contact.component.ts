import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../models/contact';
import {ContactService} from '../../../services/contact.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css']
})
export class NewContactComponent implements OnInit {
  contact: Contact;
  lienEleves = ['pere', 'mere', 'frere', 'oncle', 'grand parent', 'titeur'];
  constructor(private contactService: ContactService, private router: Router) { }
  ngOnInit() {
    this.contact = new Contact();
  }

  onSubmit() {
    this.contactService.addContact(this.contact).subscribe(then => {
      this.router.navigateByUrl('/contacts');
    });
  }

}
