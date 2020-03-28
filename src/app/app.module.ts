import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { BrowserComponent } from './components/browser/browser.component';
import { GenreComponent } from './components/genre/genre.component';

@NgModule({
	declarations: [ AppComponent, CardComponent, StreamingComponent, BrowserComponent, GenreComponent ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
