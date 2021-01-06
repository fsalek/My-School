import { Component, OnInit } from '@angular/core';
import {Referent} from '../../../models/referent';
import {ReferentService} from '../../../services/referent.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detail-referent',
  templateUrl: './detail-referent.component.html',
  styleUrls: ['./detail-referent.component.css']
})
export class DetailReferentComponent implements OnInit {

  referent: Referent;
  isLoading: boolean;
  constructor(public referentService: ReferentService, public route: ActivatedRoute,
              private router: Router) {
  }
  ngOnInit() {
    this.isLoading = true;
    this.referentService.getOneReferent(+this.route.snapshot.paramMap.get('id'))
      .subscribe((data: Referent) => {
        this.referent = data;
        this.isLoading = false;
      });
  }

  deleteReferent(id: number) {
  }

}
