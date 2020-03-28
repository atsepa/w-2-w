import { Injectable, EventEmitter } from '@angular/core';
import {} from 'protractor';

@Injectable({
	providedIn: 'root'
})
export class StreamingService {
	streamingEvent = new EventEmitter<any>();
	private streamingOptions: string[] = [ 'Netflix', 'Hulu', 'Disney+', 'HBO Now', 'AmazonPrime', 'Crunchyroll' ];

	constructor() {}

	getStreamingOptions() {
		return this.streamingOptions.slice();
	}

	getStreamingOption(index: number) {
		return this.streamingOptions[index];
	}

	getRandomStreamingOption() {
		const index = Math.floor(Math.random() * this.streamingOptions.length);
		return this.getStreamingOption(index);
	}
}
