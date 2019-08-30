import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import {
    HomeComponent,
    BuyHomeComponent,
    InsuranceComponent,
    InvestmentComponent,
    TaxComponent,
    DefaultPageComponent,
    ProgressTableComponent,
    WatchVideoComponent,
    ReadArticleComponent,
} from './components';

import { ProgressService } from './services';

import {
    MatToolbarModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatSortModule,
    MatButtonModule,
    MatTooltipModule,
    MatListModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatGridListModule,
    MatBadgeModule,
    MatProgressBarModule,
    MatSidenavModule,
    MatTableModule,
    MatMenuModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatDialogModule,
    MatNativeDateModule,
    MatStepperModule,
    MatPaginatorModule,
} from '@angular/material';

const components = [
    HomeComponent,
    BuyHomeComponent,
    InsuranceComponent,
    InvestmentComponent,
    TaxComponent,
    DefaultPageComponent,
    ProgressTableComponent,
    WatchVideoComponent,
    ReadArticleComponent,
];

const directives = [];

const pipes = [];

const services = [ProgressService];

const modules = [
    RouterModule,
    FlexLayoutModule,
    FormsModule,
    MatBadgeModule,
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatFormFieldModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatProgressBarModule,
    MatCheckboxModule,
];

@NgModule({
    declarations: [components, directives, pipes, ReadArticleComponent],
    imports: modules,
    providers: [services, pipes],
    exports: [components, directives, pipes],
    entryComponents: [],
})
export class CoreModule {}
