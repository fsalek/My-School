import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Eleve} from '../../../models/eleve';
import {EleveService} from '../../../services/eleve.service';
import {NiveauService} from '../../../services/niveau.service';
import {Classe} from '../../../models/classe';
import {ClasseService} from '../../../services/classe.service';
import {Contact} from '../../../models/contact';
import {ContactService} from '../../../services/contact.service';

@Component({
  selector: 'app-new-eleve',
  templateUrl: './new-eleve.component.html',
  styleUrls: ['./new-eleve.component.css']
})
export class NewEleveComponent implements OnInit {
  genres = ['Masculin', 'Feminun'];
  eleve: Eleve = new Eleve();
  classes: Classe[];
  contacts: Contact[];
  constructor(private eleveService: EleveService, private  classeService: ClasseService,
              private contactService: ContactService, private router: Router) { }

  ngOnInit() {
    this.classeService.getClasses()
      .subscribe(data => {
        this.classes = data;
        this.eleve = new Eleve();
      });
    this.contactService.getContacts()
      .subscribe(data => {
        this.contacts = data;
        this.eleve = new Eleve();
      });
  }

  onSubmit() {
    this.eleveService.addEleve(this.eleve).subscribe(then => {
      this.router.navigate(['/eleves']);
    });
  }

}
