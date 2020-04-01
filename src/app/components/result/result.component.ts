import { Component, OnInit } from '@angular/core';
import { StreamingService } from 'src/app/services/streaming/streaming.service';
import { BrowserService } from 'src/app/services/browser/browser.service';
import { GenreService } from 'src/app/services/genre/genre.service';
import { ColumnOptionService } from 'src/app/services/column-option/column-option.service';

@Component({
	selector: 'app-result',
	templateUrl: './result.component.html',
	styleUrls: [ './result.component.scss' ]
})
export class ResultComponent implements OnInit {
	genre: string;
	browser: string;
	streaming: string;
	columnOption: number;

	constructor(
		private streamingService: StreamingService,
		private browserService: BrowserService,
		private genreService: GenreService,
		private columnOptionService: ColumnOptionService
	) {}

	ngOnInit(): void {
		this.onGenreSubscribe();
		this.onBrowserSubscribe();
		this.onStreamingSubscribe();
		this.onColumnOptionSubscribe();
	}

	onStreamingSubscribe() {
		this.streamingService.streamingEvent.subscribe(() => {
			this.streaming = this.streamingService.getStreaming();
		});
	}

	onBrowserSubscribe() {
		this.browserService.browserEvent.subscribe(() => {
			this.browser = this.browserService.getBrowser();
		});
	}

	onGenreSubscribe() {
		this.genreService.genreEvent.subscribe(() => {
			this.genre = this.genreService.getGenre();
		});
	}

	onColumnOptionSubscribe() {
		this.columnOptionService.columnOptionEvent.subscribe(() => {
			this.columnOption = this.columnOptionService.getColumnOption();
		});
	}
}
