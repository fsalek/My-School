import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../models/eleve';
import {EleveService} from '../../../services/eleve.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Contact} from '../../../models/contact';

@Component({
  selector: 'app-edit-eleve',
  templateUrl: './edit-eleve.component.html',
  styleUrls: ['./edit-eleve.component.css']
})
export class EditEleveComponent implements OnInit {
  eleve: Eleve;
  genres = ['masculin', 'feminin'];
  isLoading: boolean;
  contacts: Contact[];
  constructor(public eleveService: EleveService, public route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.eleveService.getOneEleve(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Eleve) => {
        this.eleve = data;
        this.isLoading = false;
      });
  }
  onSubmit() {
    this.eleveService.updateEleve(this.eleve).subscribe(then => {
      this.router.navigate(['/eleves']);
    });

  }
  deleteEleve(id: number): void {
    this.eleveService.deleteEleve(id);
    this.router.navigate(['/eleves']);
  }

}
