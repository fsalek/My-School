import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../../services/authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
import {NiveauService} from '../../../services/niveau.service';
import {Niveau} from '../../../models/niveau';

@Component({
  selector: 'app-edit-niveau',
  templateUrl: './edit-niveau.component.html',
  styleUrls: ['./edit-niveau.component.css']
})
export class EditNiveauComponent implements OnInit {

  niveau: Niveau;
  isLoading = true;

  constructor(private niveauxService: NiveauService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.niveauxService.getOneNiveau(+this.route.snapshot.paramMap.get('id')).subscribe((data: Niveau) => {
      this.niveau = data;
      this.isLoading = false;
    });
  }

  onSubmit() {
    this.niveauxService.updateNiveau(this.niveau).subscribe(then => {
      this.router.navigate(['/niveaux']);
    });

  }

}
