import { Component } from '@angular/core';
import { BrowserService } from './services/browser/browser.service';
import { StreamingService } from './services/streaming/streaming.service';
import { GenreService } from './services/genre/genre.service';
import { ColumnOptionService } from './services/column-option/column-option.service';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	instagram = faInstagram;
	toggle: boolean = false;

	constructor(
		private genreService: GenreService,
		private browserService: BrowserService,
		private streamingService: StreamingService,
		private columnOptionService: ColumnOptionService
	) {}

	handleRandomClick() {
		this.handleGenreClick();
		this.handleStreamClick();
		this.handleBrowserClick();
		this.handleColumnOptionClick();
	}

	handleGenreClick() {
		this.genreService.genreEvent.emit();
	}

	handleStreamClick() {
		this.streamingService.streamingEvent.emit();
	}

	handleBrowserClick() {
		this.browserService.browserEvent.emit();
	}

	handleColumnOptionClick() {
		this.columnOptionService.columnOptionEvent.emit();
	}

	handleToggleMenu() {
		this.toggle = !this.toggle;
	}
}
