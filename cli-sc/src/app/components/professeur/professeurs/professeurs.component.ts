import { Component, OnInit } from '@angular/core';
import {Professeur} from '../../../models/professeur';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {ProfesseurService} from '../../../services/professeur.service';

@Component({
  selector: 'app-professeurs',
  templateUrl: './professeurs.component.html',
  styleUrls: ['./professeurs.component.css']
})
export class ProfesseursComponent implements OnInit {

  professeurs: Professeur[];
  isLoading: boolean;
  constructor(private profService: ProfesseurService, private router: Router, private authService: AuthenticationService) { }
  ngOnInit() {
    this.isLoading = true;
    this.profService.getProfesseurs()
      .subscribe((data: Professeur[]) => {
        this.professeurs = data;
        this.isLoading = false;
      }, error => {
        this.authService.logOut();
        this.router.navigateByUrl('/home');
      });
  }
  deleteProfesseur(id: number): void {
    /*this.isLoading = true;
    this.profService.deleteProfesseur(id).subscribe(then => {
       this.profService.getProfesseurs().subscribe((data: Professeur[]) => {
         this.professeurs = data;
         this.isLoading = false;
       });
     });*/
  }

}
