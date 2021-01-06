import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Classe} from '../../../models/classe';
import {ClasseService} from '../../../services/classe.service';

@Component({
  selector: 'app-detail-classe',
  templateUrl: './detail-classe.component.html',
  styleUrls: ['./detail-classe.component.css']
})
export class DetailClasseComponent implements OnInit {
  classe: Classe;
  isLoading: boolean;
  constructor(public classeService: ClasseService, public route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.classeService.getOneClasse(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Classe) => {
        this.classe = data;
        this.isLoading = false;
      });
  }

  deleteClasse(id: number) {
  }

}
