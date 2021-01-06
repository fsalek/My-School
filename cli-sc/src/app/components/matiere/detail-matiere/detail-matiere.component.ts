import { Component, OnInit } from '@angular/core';
import {Matiere} from '../../../models/matiere';
import {MatiereService} from '../../../services/matiere.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-matiere',
  templateUrl: './detail-matiere.component.html',
  styleUrls: ['./detail-matiere.component.css']
})
export class DetailMatiereComponent implements OnInit {
  matiere: Matiere;
  isLoading: boolean;
  constructor(public matiereService: MatiereService, public route: ActivatedRoute) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.matiereService.getOneMatiere(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Matiere) => {
        this.matiere = data;
        this.isLoading = false;
      });
  }

  deleteMatiere(id: number) {
  }

}
