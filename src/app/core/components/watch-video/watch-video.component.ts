import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
    selector: 'app-watch-video',
    templateUrl: './watch-video.component.html',
    styleUrls: ['./watch-video.component.less'],
})
export class WatchVideoComponent implements OnInit {
    isMobile: MediaQueryList;
    private _mobileQueryListener: () => void;
    videoPath = '';
    videoTitle;
    page;

    constructor(
        private route: ActivatedRoute,
        private sanitizer: DomSanitizer,
        private loc: Location,
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
    ) {
        this.isMobile = media.matchMedia('(max-width: 1200px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.isMobile.addListener(this._mobileQueryListener);
        window.scrollTo(0, 0);
    }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.videoPath = 'https://www.youtube.com/embed/' + params.fileName;
            this.videoTitle = params.title;
            this.page = params.page;
        });
        var start = null;
        window.addEventListener('touchstart', (event) => {
            if (event.touches.length === 1) {
                start = event.touches.item(0).clientX;
            } else {
                start = null;
            }
        });
        window.addEventListener('touchend', (event) => {
            var offset = 120;
            if (start) {
                var end = event.changedTouches.item(0).clientX;

                if (end > start + offset) {
                    this.loc.back();
                }
                // if (end < start - offset) {
                //     console.log('left swipe')
                // }
            }
        });
    }

    public video() {
        return this.sanitizer.bypassSecurityTrustResourceUrl(this.videoPath);
    }
}
