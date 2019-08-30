import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services';

@Component({
  selector: 'app-Tax',
  templateUrl: './Tax.component.html',
  styleUrls: ['./Tax.component.less']
})
export class TaxComponent implements OnInit {

  constructor(
    public progService: ProgressService,
  ) { }

  ngOnInit() {
  }

}
