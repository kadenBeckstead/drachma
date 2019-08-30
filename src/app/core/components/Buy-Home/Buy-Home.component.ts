import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services';

@Component({
  selector: 'app-Buy-Home',
  templateUrl: './Buy-Home.component.html',
  styleUrls: ['./Buy-Home.component.less']
})
export class BuyHomeComponent implements OnInit {

  constructor(
    public progService: ProgressService
  ) { }

  ngOnInit() {
  }

}
