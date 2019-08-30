import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services';

@Component({
  selector: 'app-Insurance',
  templateUrl: './Insurance.component.html',
  styleUrls: ['./Insurance.component.less']
})
export class InsuranceComponent implements OnInit {

  constructor(
    public progService: ProgressService,
  ) {
    window.onbeforeunload = function(){ window.scrollTo(0,0); }
   }

  ngOnInit() {
  }

}
