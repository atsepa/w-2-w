import { Injectable, EventEmitter } from '@angular/core';
import {} from 'protractor';

@Injectable({
	providedIn: 'root'
})
export class StreamingService {
	streamingEvent = new EventEmitter();
	private readonly streamingOptions: string[] = [
		'Netflix',
		'Hulu',
		'Disney+',
		'HBO Now',
		'AmazonPrime',
		'Crunchyroll'
	];

	getStreamingOptions() {
		return this.streamingOptions;
	}

	getRandomStreamingOption() {
		const index = Math.floor(Math.random() * this.streamingOptions.length);
		return this.getStreamingOption(index);
	}

	private getStreamingOption(index: number) {
		return this.streamingOptions[index];
	}
}
