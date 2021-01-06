import { Component, OnInit } from '@angular/core';
import {Classe} from '../../../models/classe';
import {Niveau} from '../../../models/niveau';
import {Router} from '@angular/router';
import {ClasseService} from '../../../services/classe.service';
import {NiveauService} from '../../../services/niveau.service';

@Component({
  selector: 'app-new-classe',
  templateUrl: './new-classe.component.html',
  styleUrls: ['./new-classe.component.css']
})
export class NewClasseComponent implements OnInit {
  classe: Classe = new Classe();
  niveaux: Niveau[];
  constructor(private classeService: ClasseService, private  nivService: NiveauService, private router: Router) { }

  ngOnInit() {
    this.nivService.getNiveaux()
      .subscribe(data => {
        this.niveaux = data;
        this.classe = new Classe();
      });
  }

  onSubmit() {
    this.classeService.addClasse(this.classe).subscribe(then => {
      this.router.navigate(['/classes']);
    });
  }
}
