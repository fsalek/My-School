import { Component, OnInit } from '@angular/core';
import {Eleve} from '../../../models/eleve';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpEvent, HttpEventType, HttpRequest, HttpResponse} from '@angular/common/http';
import {EleveService} from '../../../services/eleve.service';
import {Observable} from 'rxjs';
import {AuthenticationService} from '../../../services/authentication.service';

@Component({
  selector: 'app-detail-eleve',
  templateUrl: './detail-eleve.component.html',
  styleUrls: ['./detail-eleve.component.css']
})
export class DetailEleveComponent implements OnInit {

  eleve: Eleve;
  isLoading: boolean;
  editPhoto: boolean;
  currentEleve: any;
  selectedFiles;
  progress: number;
  currentFileUpload: any;
  private timestamp = 0;
  constructor(public eleveService: EleveService, public route: ActivatedRoute,
              public authService: AuthenticationService) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.eleveService.getOneEleve(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Eleve) => {
        this.eleve = data;
        this.isLoading = false;
      });
  }

  deleteEleve(id: number) {
  }

  onEditPhoto(eleve) {
    this.currentEleve = eleve;
    this.editPhoto = true;
  }

  onSelectedFile(event) {
    this.selectedFiles = event.target.files;
  }
  uploadPhoto() {
    this.progress = 0;
    this.currentFileUpload = this.selectedFiles.item(0);
    this.eleveService.uploadPhotoEleve(this.currentFileUpload, this.currentEleve.id )
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
