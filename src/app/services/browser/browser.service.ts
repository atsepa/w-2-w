import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BrowserService {
	browserEvent = new EventEmitter<any>();
	private browserOptions: string[] = [ 'Originals', 'Movie', 'TV Show' ];

	constructor() {}

	getBrowserOptions(): string[] {
		return this.browserOptions.slice();
	}

	getBrowserOption(index: number): string {
		return this.browserOptions[index];
	}

	getRandomBrowserOption(): string {
		const index = Math.floor(Math.random() * this.browserOptions.length);

		return this.getBrowserOption(index);
	}
}
