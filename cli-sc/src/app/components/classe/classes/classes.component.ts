import { Component, OnInit } from '@angular/core';
import {Classe} from '../../../models/classe';
import {ClasseService} from '../../../services/classe.service';


@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  classes: Classe[];
  isLoading: boolean;

  constructor(public classeService: ClasseService) {
  }
  ngOnInit() {
    this.isLoading = true;
    return this.classeService.getClasses().subscribe((data: Classe[]) => {
      this.classes = data;
      this.isLoading = false;
    });
  }
  deleteClasse(id: number): void {
    this.isLoading = true;
    this.classeService.deleteClasse(id).subscribe(then => {
      this.classeService.getClasses().subscribe((data: Classe[]) => {
        this.classes = data;
        this.isLoading = false;
      });
    });
  }
}
