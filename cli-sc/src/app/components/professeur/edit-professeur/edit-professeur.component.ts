import { Component, OnInit } from '@angular/core';
import {Professeur} from '../../../models/professeur';
import {ProfesseurService} from '../../../services/professeur.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-professeur',
  templateUrl: './edit-professeur.component.html',
  styleUrls: ['./edit-professeur.component.css']
})
export class EditProfesseurComponent implements OnInit {
  professeur: Professeur;
  genres = ['Masculin', 'Feminun'];
  isLoading: boolean;
  constructor(public professeurService: ProfesseurService, public route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.professeurService.getOneProfesseur(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Professeur) => {
        this.professeur = data;
        this.isLoading = false;
      });
  }
  onSubmit() {
    this.professeurService.updateProfesseur(this.professeur).subscribe(then => {
      this.router.navigate(['/professeurs']);
    });

  }
  deleteProfesseur(id: number): void {
    this.professeurService.deleteProfesseur(id);
    this.router.navigate(['/professeurs']);
  }

}
