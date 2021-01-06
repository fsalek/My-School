import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {Router} from '@angular/router';
import {Niveau} from '../../../models/niveau';
import {NiveauService} from '../../../services/niveau.service';

@Component({
  selector: 'app-niveaux',
  templateUrl: './niveaux.component.html',
  styleUrls: ['./niveaux.component.css']
})
export class NiveauxComponent implements OnInit {
  /*niveaux;
  isLoading: boolean;
  constructor(public  authService: AuthenticationService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.authService.getNiveaux()
      .subscribe(data => {
      this.niveaux = data;
      this.isLoading = false;
    });
  }
  deleteNiveau(id: number): void {
    this.isLoading = true;
    this.authService.deleteNiveau(id)
      .subscribe(then => {
      this.authService.getNiveaux()
        .subscribe(data => {
        this.niveaux = data;
        this.isLoading = false;
      });
    });
  }*/

  niveaux: Niveau[];
  isLoading: boolean;

  constructor(public niveauService: NiveauService) {
  }
  ngOnInit() {
    this.isLoading = true;
    return this.niveauService.getNiveaux().subscribe((data: Niveau[]) => {
      this.niveaux = data;
      this.isLoading = false;
    });
  }
  deleteNiveau(id: number): void {
    this.isLoading = true;
    this.niveauService.deleteNiveau(id).subscribe(then => {
      this.niveauService.getNiveaux().subscribe((data: Niveau[]) => {
        this.niveaux = data;
        this.isLoading = false;
      });
    });
  }
}
