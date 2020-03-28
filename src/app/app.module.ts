import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card/card.component';
import { StreamingComponent } from './components/streaming/streaming.component';
import { BrowserComponent } from './components/browser/browser.component';

@NgModule({
	declarations: [ AppComponent, CardComponent, StreamingComponent, BrowserComponent ],
	imports: [ BrowserModule ],
	providers: [],
	bootstrap: [ AppComponent ]
})
export class AppModule {}
