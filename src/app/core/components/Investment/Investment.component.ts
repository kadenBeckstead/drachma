import { Component, OnInit } from '@angular/core';
import { ProgressService } from '../../services';

@Component({
  selector: 'app-Investment',
  templateUrl: './Investment.component.html',
  styleUrls: ['./Investment.component.less']
})
export class InvestmentComponent implements OnInit {

  constructor(
    public progService: ProgressService
  ) { }

  ngOnInit() {
  }

}
