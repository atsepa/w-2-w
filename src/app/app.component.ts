import { Component } from '@angular/core';
import { BrowserService } from './services/browser/browser.service';
import { StreamingService } from './services/streaming/streaming.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	constructor(private streamingService: StreamingService, private browserService: BrowserService) {}

	handleClick() {
		this.browserService.browserEvent.emit();
		this.streamingService.streamingEvent.emit();
	}
}
