import { Component, OnInit } from '@angular/core';
import {Professeur} from '../../../models/professeur';
import {ProfesseurService} from '../../../services/professeur.service';
import {ActivatedRoute} from '@angular/router';
import {AuthenticationService} from '../../../services/authentication.service';
import {HttpEventType, HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-detail-professeur',
  templateUrl: './detail-professeur.component.html',
  styleUrls: ['./detail-professeur.component.css']
})
export class DetailProfesseurComponent implements OnInit {
  professeur: Professeur;
  isLoading: boolean;
  editPhoto: boolean;
  currentProfesseur: any;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  private timestamp = 0;
  constructor(public professeurService: ProfesseurService, public route: ActivatedRoute,
              private authService: AuthenticationService) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.professeurService.getOneProfesseur(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Professeur) => {
        this.professeur = data;
        this.isLoading = false;
      });
  }

  deleteProfesseur(id: number) {
  }

  onEditPhoto(professeur) {
    this.currentProfesseur = professeur;
    this.editPhoto = true;
  }

  onSelectedFile(event) {
    this.selectedFiles = event.target.files;
  }
  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.professeurService.uploadPhotoProfesseur(this.currentFileUpload, this.currentProfesseur.id )
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
          console.log((this.progress));
        } else if (event instanceof HttpResponse) {
          // this.getProducts('/products/search/selectedProduct')
          this.timestamp = Date.now();
        }
      }, error => {
        alert('Problème de changement');
      });
    this.selectedFiles = undefined;
  }

  getTs() {
    return this.timestamp;
  }

  public isAdmin() {
    return this.authService.isAdmin();
  }

}
