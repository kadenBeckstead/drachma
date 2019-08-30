import { Component, OnInit, ChangeDetectorRef, ViewChild, ElementRef } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ProgressService } from '../../services';

@Component({
    selector: 'app-default-page',
    templateUrl: './default-page.component.html',
    styleUrls: ['./default-page.component.less'],
})
export class DefaultPageComponent implements OnInit {
    @ViewChild('container') container: ElementRef;
    @ViewChild('investing') investing: ElementRef;
    @ViewChild('insurance') insurance: ElementRef;
    @ViewChild('tax') tax: ElementRef;
    @ViewChild('home') home: ElementRef;
    private _mobileQueryListener: () => void;
    mobile: MediaQueryList;
    smallerScreen: MediaQueryList;
    currentDate = '';
    widgetTitle = '';
    invRank: any;
    insRank: any;
    taxRank: any;
    homeRank: any;

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private progService: ProgressService) {
        this.smallerScreen = media.matchMedia('(max-width: 1700px)');
        this.mobile = media.matchMedia('(max-width: 1400px)');
        this._mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.smallerScreen.addListener(this._mobileQueryListener);
        this.mobile.addListener(this._mobileQueryListener);
    }

    ngOnInit() {
        const sections = [
            { title: 'Investing', progress: this.progService.getInvestmentsCount(), graph: this.investing },
            { title: 'Insurance', progress: this.progService.getInsuranceCount(), graph: this.insurance },
            { title: 'Tax', progress: this.progService.getTaxesCount(), graph: this.tax },
            { title: 'Home Buyer', progress: this.progService.getHomeCount(), graph: this.home },
        ];
        sections.forEach((section) => {
            this.plotGraph(section.graph, section.progress, section.title);
        });
    }

    goToTop() {
        window.scrollTo(0,0);
      }


    plotGraph(graph, progress, title) {
        this.invRank = this.progService.getRank(this.progService.getInvestmentsCount());
        this.insRank = this.progService.getRank(this.progService.getInsuranceCount());
        this.taxRank = this.progService.getRank(this.progService.getTaxesCount());
        this.homeRank = this.progService.getRank(this.progService.getHomeCount());
        
        const offset = 100 - progress;
        const data = [
            {
                values: [offset, progress],
                type: 'pie',
                hole: 0.75,
                text: 'title',
                marker: {
                    colors: ['#c7c7c7', '#506680'],
                },
                textinfo: 'none',
                textposition: 'inside',
                sort: false,

            },
        ];

        const layout = {
            autosize: true,
            showlegend: false,
            height: 200,
            paper_bgcolor: 'rgb(0,0,0,0,0)',
            width: 300,
            hovermode: false,
            margin: {
                l: 5,
                r: 5,
                b: 5,
                t: 5,
            },
            annotations: [
                {
                    font: {
                        size: 18,
                        color: "black"
                    },
                    showarrow: false,
                    text: title + '<br>' + progress + '%',
                    x: 0.5,
                    y: 0.5,
                },
            ],
        };

        const config = {
            doubleClick: false,
            showTips: false,
            showAxisDragHandles: false,
            displayModeBar: false,
            scrollZoom: false,
        };

        try {
            Plotly.purge(graph.nativeElement);
            Plotly.newPlot(graph.nativeElement, data, layout, config);
        } catch (error) {
            console.log(error);
            setTimeout(() => {
                this.plotGraph(graph, progress, title);
            }, 500);
        }
    }
}
