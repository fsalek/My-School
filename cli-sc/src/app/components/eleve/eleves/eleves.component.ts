import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../models/eleve';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {EleveService} from '../../../services/eleve.service';

@Component({
  selector: 'app-eleves',
  templateUrl: './eleves.component.html',
  styleUrls: ['./eleves.component.css']
})
export class ElevesComponent implements OnInit {
  eleve: Eleve;
  eleves: Eleve[];
  isLoading: boolean;
  constructor(private elevService: EleveService, private authService: AuthenticationService, private router: Router) { }
  ngOnInit() {
    this.onGetAllEleves();
  }
  onGetAllEleves() {
    this.isLoading = true;
    this.elevService.getEleves()
      .subscribe((data: Eleve[]) => {
        this.eleves = data;
        this.isLoading = false;
      }, error => {
        this.authService.logOut();
        this.router.navigateByUrl('/home');
      });
  }
  deleteEleve(id: number): void {
    this.isLoading = true;
    this.elevService.deleteEleve(id).subscribe(data => {
       this.onGetAllEleves();
     });
  }
  /*<th>{{ eleve.id }}</th>
  <th>{{ eleve.firstName}}</th>
  <th>{{ eleve.lastName}}</th>
  <th>{{ eleve.genre}}</th>
  <th>{{ eleve.dateNaissance|date: 'dd/MM/yyyy' }}</th>
  <th>{{ eleve.adresse}}</th>
  <th>{{ eleve.moyenneGeneral}}</th>
  <th>{{ eleve.photoName}}</th>
  <th>{{ eleve.ref}}</th>
  <th>{{ eleve.classe}}</th>
  <th>{{ eleve.selected}}</th>
  <th>{{ eleve.matieres}}</th>*/
}
