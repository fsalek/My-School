import { Component, OnInit } from '@angular/core';
import {Niveau} from '../../../models/niveau';
import {ActivatedRoute, Router} from '@angular/router';
import {NiveauService} from '../../../services/niveau.service';

@Component({
  selector: 'app-detail-niveau',
  templateUrl: './detail-niveau.component.html',
  styleUrls: ['./detail-niveau.component.css']
})
export class DetailNiveauComponent implements OnInit {
  niveau: Niveau;
  isLoading: boolean;
  constructor(public niveauService: NiveauService, public route: ActivatedRoute) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.niveauService.getOneNiveau(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Niveau) => {
        this.niveau = data;
        this.isLoading = false;
      });
  }

  deleteNiveau(id: number) {
  }
}
