import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { AppComponent } from './app.component';
import { CoreModule } from './core';
import { AngularFireModule } from '@angular/fire';

export const firebaseConfig = {
    apiKey: "AIzaSyCM7WH8RXJwp11XsEubxWWNFVdGtB54dAw",
    authDomain: "drachma-368aa.firebaseapp.com",
    databaseURL: "https://drachma-368aa.firebaseio.com",
    projectId: "drachma-368aa",
    storageBucket: "",
    messagingSenderId: "394961586966",
	timestampsInSnapshots: true
};

const pipes = [];

const modules = [
	BrowserModule,
	CommonModule,
	BrowserAnimationsModule,
	RouterModule.forRoot(routes, { useHash: false }),
	AngularFireModule.initializeApp(firebaseConfig, 'stock-app'),
	FlexLayoutModule,
	CoreModule,
];

@NgModule({
	declarations: [AppComponent],
	imports: [modules],
	providers: [ ],
	entryComponents: [AppComponent],
	exports: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
