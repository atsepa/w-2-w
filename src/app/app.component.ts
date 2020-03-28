import { Component } from '@angular/core';
import { StreamingService } from './services/streaming.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
	constructor(private streamingService: StreamingService) {}

	handleClick() {
		this.streamingService.streamingEvent.emit();
	}
}
