import { Component, OnInit } from '@angular/core';
import {Referent} from '../../../models/referent';
import {ReferentService} from '../../../services/referent.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-referent',
  templateUrl: './new-referent.component.html',
  styleUrls: ['./new-referent.component.css']
})
export class NewReferentComponent implements OnInit {

  referent: Referent;
  lienEleves = ['pere', 'mere', 'frere', 'oncle', 'grand parent', 'titeur'];
  constructor(private referentService: ReferentService, private router: Router) { }
  ngOnInit() {
    this.referent = new Referent();
  }

  onSubmit() {
    this.referentService.addReferent(this.referent).subscribe(then => {
      this.router.navigateByUrl('/referents');
    });
  }

}
