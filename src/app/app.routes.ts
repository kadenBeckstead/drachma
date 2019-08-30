import { Routes } from '@angular/router';
import {
    HomeComponent,
    BuyHomeComponent,
    InsuranceComponent,
    InvestmentComponent,
    TaxComponent,
    DefaultPageComponent,
    WatchVideoComponent,
    ReadArticleComponent,
} from './core/components';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
            { path: 'home', component: DefaultPageComponent },
            { path: 'home-buyer', component: BuyHomeComponent },
            { path: 'insurance', component: InsuranceComponent },
            { path: 'investment', component: InvestmentComponent },
            { path: 'tax', component: TaxComponent },
            { path: 'watch-video', component: WatchVideoComponent },
            { path: 'read-article', component: ReadArticleComponent },
        ],
    },
    { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
