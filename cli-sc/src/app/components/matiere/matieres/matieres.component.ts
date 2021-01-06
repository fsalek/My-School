import { Component, OnInit } from '@angular/core';
import {Matiere} from '../../../models/matiere';
import {MatiereService} from '../../../services/matiere.service';

@Component({
  selector: 'app-matieres',
  templateUrl: './matieres.component.html',
  styleUrls: ['./matieres.component.css']
})
export class MatieresComponent implements OnInit {

  matieres: Matiere[];
  isLoading: boolean;

  constructor(public matiereService: MatiereService) {
  }
  ngOnInit() {
    this.isLoading = true;
    return this.matiereService.getMatieres().subscribe((data: Matiere[]) => {
      this.matieres = data;
      this.isLoading = false;
    });
  }
  deleteMatiere(id: number): void {
    this.isLoading = true;
    this.matiereService.deleteMatiere(id).subscribe(then => {
      this.matiereService.getMatieres().subscribe((data: Matiere[]) => {
        this.matieres = data;
        this.isLoading = false;
      });
    });
  }

}
