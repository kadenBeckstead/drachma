import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'progress-table',
    templateUrl: './progress-table.component.html',
    styleUrls: ['./progress-table.component.less'],
})
export class ProgressTableComponent implements OnInit {
    @Input() data: any;
    @Input() page: any;

    constructor(private router: Router) {}

    ngOnInit() {}

    routeToViewer(item) {
        item.selected = true;
        console.log(this.page);
        if (item.image === 'description') {
            const title = { title: item.title, page: this.page };
            this.router.navigate(['/read-article'], { queryParams: title });
        } else {
            const fileName = { fileName: 'DBTmNm8D-84', title: item.title, page: this.page };
            this.router.navigate(['/watch-video'], { queryParams: fileName });
        }
    }
}
