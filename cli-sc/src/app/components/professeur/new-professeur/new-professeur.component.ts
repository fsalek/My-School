import { Component, OnInit } from '@angular/core';
import {Professeur} from '../../../models/professeur';
import {ProfesseurService} from '../../../services/professeur.service';
import {Router} from '@angular/router';
import {Matiere} from '../../../models/matiere';
import {MatiereService} from '../../../services/matiere.service';

@Component({
  selector: 'app-new-professeur',
  templateUrl: './new-professeur.component.html',
  styleUrls: ['./new-professeur.component.css']
})
export class NewProfesseurComponent implements OnInit {
  professeur: Professeur = new Professeur();
  matieres: Matiere[];
  constructor(private professeurService: ProfesseurService, private matiereService: MatiereService, private router: Router) { }

  ngOnInit() {
    this.professeur = new Professeur();
    this.matiereService.getMatieres()
      .subscribe(data => {
        this.matieres = data;
        this.professeur = new Professeur();
      });
  }

  onSubmit() {
    this.professeurService.addProfesseur(this.professeur).subscribe(then => {
      this.router.navigate(['/professeurs']);
    });
  }

}
