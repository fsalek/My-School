import { Component, OnInit } from '@angular/core';
import {Matiere} from '../../../models/matiere';
import {MatiereService} from '../../../services/matiere.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-matiere',
  templateUrl: './new-matiere.component.html',
  styleUrls: ['./new-matiere.component.css']
})
export class NewMatiereComponent implements OnInit {
  matiere: Matiere;
  constructor(private matiereService: MatiereService, private router: Router) { }
  ngOnInit() {
    this.matiere = new Matiere();
  }

  onSubmit() {
    this.matiereService.addMatiere(this.matiere).subscribe(then => {
      this.router.navigateByUrl('/matieres');
    });
  }

}
