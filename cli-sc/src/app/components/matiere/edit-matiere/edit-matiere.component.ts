import { Component, OnInit } from '@angular/core';
import {Matiere} from '../../../models/matiere';
import {MatiereService} from '../../../services/matiere.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-matiere',
  templateUrl: './edit-matiere.component.html',
  styleUrls: ['./edit-matiere.component.css']
})
export class EditMatiereComponent implements OnInit {
  matiere: Matiere;
  isLoading: boolean;
  constructor(public matiereService: MatiereService, public route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.matiereService.getOneMatiere(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Matiere) => {
        this.matiere = data;
        this.isLoading = false;
      });
  }
  onSubmit() {
    this.matiereService.updateMatiere(this.matiere).subscribe(then => {
      this.router.navigate(['/matieres']);
    });

  }
  deleteMatiere(id: number): void {
    this.matiereService.deleteMatiere(id);
    this.router.navigate(['/matieres']);
  }

}
