import { Component, OnInit } from '@angular/core';
import {Referent} from '../../../models/referent';
import {ReferentService} from '../../../services/referent.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-edit-referent',
  templateUrl: './edit-referent.component.html',
  styleUrls: ['./edit-referent.component.css']
})
export class EditReferentComponent implements OnInit {

  referent: Referent;
  isLoading: boolean;
  lienEleves = ['pere', 'mere', 'frere', 'oncle', 'grand parent', 'teteur'];
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
  onSubmit() {
    this.referentService.updateReferent(this.referent).subscribe(then => {
      this.router.navigate(['/referents']);
    });

  }
  deleteReferent(id: number): void {
    this.referentService.deleteReferent(id);
    this.router.navigate(['/referents']);
  }

}
