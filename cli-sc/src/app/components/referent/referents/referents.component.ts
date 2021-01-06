import { Component, OnInit } from '@angular/core';
import {Referent} from '../../../models/referent';
import {ReferentService} from '../../../services/referent.service';

@Component({
  selector: 'app-referents',
  templateUrl: './referents.component.html',
  styleUrls: ['./referents.component.css']
})
export class ReferentsComponent implements OnInit {

  referents: Referent[];
  isLoading: boolean;

  constructor(public referentService: ReferentService) {
  }
  ngOnInit() {
    this.isLoading = true;
    return this.referentService.getReferents().subscribe((data: Referent[]) => {
      this.referents = data;
      this.isLoading = false;
    });
  }
  deleteReferent(id: number): void {
    this.isLoading = true;
    this.referentService.deleteReferent(id).subscribe(then => {
      this.referentService.getReferents().subscribe((data: Referent[]) => {
        this.referents = data;
        this.isLoading = false;
      });
    });
  }

}
