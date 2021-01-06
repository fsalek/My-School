import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../models/contact';
import {ContactService} from '../../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {

  contact: Contact;
  isLoading: boolean;
  constructor(public contactService: ContactService, public route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.contactService.getOneContact(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Contact) => {
        this.contact = data;
        this.isLoading = false;
      });
  }

  deleteContact(id: number) {
  }

}
