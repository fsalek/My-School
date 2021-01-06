import { Component, OnInit } from '@angular/core';
import {Classe} from '../../../models/classe';
import {ClasseService} from '../../../services/classe.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Niveau} from '../../../models/niveau';

@Component({
  selector: 'app-edit-classe',
  templateUrl: './edit-classe.component.html',
  styleUrls: ['./edit-classe.component.css']
})
export class EditClasseComponent implements OnInit {
  classe: Classe;
  isLoading: boolean;
  niveaux: Niveau[];
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
  onSubmit() {
    this.classeService.updateClasse(this.classe).subscribe(then => {
      this.router.navigate(['/classes']);
    });

  }
  deleteClasse(id: number): void {
    this.classeService.deleteClasse(id);
    this.router.navigate(['/classes']);
  }

}
