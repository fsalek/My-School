import { Component, OnInit } from '@angular/core';
import {Contact} from '../../../models/contact';
import {ContactService} from '../../../services/contact.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css']
})
export class EditContactComponent implements OnInit {
  contact: Contact;
  isLoading: boolean;
  lienEleves = ['pere', 'mere', 'frere', 'oncle', 'grand parent', 'teteur'];
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
  onSubmit() {
    this.contactService.updateContact(this.contact).subscribe(then => {
      this.router.navigate(['/contacts']);
    });

  }
  deleteContact(id: number): void {
    this.contactService.deleteContact(id);
    this.router.navigate(['/contacts']);
  }

}
