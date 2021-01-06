import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NiveauService} from '../../../services/niveau.service';
import {Niveau} from '../../../models/niveau';

@Component({
  selector: 'app-new-niveau',
  templateUrl: './new-niveau.component.html',
  styleUrls: ['./new-niveau.component.css']
})
export class NewNiveauComponent implements OnInit {

  niveau: Niveau;
  constructor(private niveauService: NiveauService, private router: Router) { }
  ngOnInit() {
    this.niveau = new Niveau();
  }

  onSubmit() {
    this.niveauService.addNiveau(this.niveau).subscribe(then => {
      this.router.navigateByUrl('/niveaux');
    });
  }

}
