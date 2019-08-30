import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-read-article',
    templateUrl: './read-article.component.html',
    styleUrls: ['./read-article.component.less'],
})
export class ReadArticleComponent implements OnInit {
    articleTitle;
    page;
    constructor(private route: ActivatedRoute, private loc: Location) {
        window.scrollTo(0, 0);
    }

    ngOnInit() {
        this.route.queryParams.subscribe((params) => {
            this.articleTitle = params.title;
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
}
