import { Component } from '@angular/core';
import { BrowserService } from './services/browser/browser.service';
import { StreamingService } from './services/streaming/streaming.service';
import { GenreService } from './services/genre/genre.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	constructor(
		private genreService: GenreService,
		private browserService: BrowserService,
		private streamingService: StreamingService
	) {}

	handleClick() {
		this.genreService.genreEvent.emit();
		this.browserService.browserEvent.emit();
		this.streamingService.streamingEvent.emit();
	}
}
