import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { FocusMonitor } from '@angular/cdk/a11y';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  sidebarLinks = [
    { path: 'home', displayName: 'Home' },
    { path: 'investment', displayName: 'Investments' },
    { path: 'insurance', displayName: 'Insurance' },
    { path: 'tax', displayName: 'Taxes' },
    { path: 'home-buyer', displayName: 'Buying a Home' },
  ]
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private _focusMonitor: FocusMonitor,
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 1200px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    if (this.router.url === '/') {
      this.router.navigate(['/home'])
    }
  }

  ngAfterViewInit() {
    this._focusMonitor.stopMonitoring(document.getElementById('hamburger'));
  }

  goToTop() {
    window.scrollTo(0, 0);
  }

}
