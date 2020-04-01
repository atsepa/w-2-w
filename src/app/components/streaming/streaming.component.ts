import { Component, OnInit } from '@angular/core';
import { StreamingService } from 'src/app/services/streaming/streaming.service';

@Component({
	selector: 'app-streaming',
	templateUrl: './streaming.component.html',
	styleUrls: [ './streaming.component.scss' ]
})
export class StreamingComponent implements OnInit {
	result: string;
	title: string = 'Streaming Service';

	constructor(private streamingService: StreamingService) {
		this.result = '--';
	}

	ngOnInit(): void {
		this.streamingService.streamingEvent.subscribe(() => {
			this.result = this.streamingService.getRandomStreamingOption();
		});
	}
}
