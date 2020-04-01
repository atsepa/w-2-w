import { Injectable, EventEmitter } from '@angular/core';
import {} from 'protractor';

@Injectable({
	providedIn: 'root'
})
export class StreamingService {
	streamingEvent = new EventEmitter();
	private streamingOption: string;
	private readonly streamingOptions: string[] = [
		'Netflix',
		'Hulu',
		'Disney+',
		'HBO Now',
		'AmazonPrime',
		'Crunchyroll'
	];

	getStreaming(): string {
		return this.streamingOption;
	}

	getStreamingOptions(): string[] {
		return this.streamingOptions;
	}

	getRandomStreamingOption(): string {
		const index = Math.floor(Math.random() * this.streamingOptions.length);
		return this.getStreamingOption(index);
	}

	private getStreamingOption(index: number): string {
		this.streamingOption = this.streamingOptions[index];
		return this.getStreaming();
	}
}
