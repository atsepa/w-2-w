import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BrowserService {
	browserEvent = new EventEmitter();
	private readonly browserOptions: string[] = [ 'Originals', 'Movie', 'TV Show' ];

	getRandomBrowserOption(): string {
		const index = Math.floor(Math.random() * this.browserOptions.length);

		return this.getBrowserOption(index);
	}

	private getBrowserOption(index: number): string {
		return this.browserOptions[index];
	}
}
