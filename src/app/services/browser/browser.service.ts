import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class BrowserService {
	browserEvent = new EventEmitter();
	private browser: string;
	private readonly browserOptions: string[] = [ 'Originals', 'Movie', 'TV Show' ];

	getBrowser(): string {
		return this.browser;
	}

	getRandomBrowserOption(): string {
		const index = Math.floor(Math.random() * this.browserOptions.length);

		return this.getBrowserOption(index);
	}

	private getBrowserOption(index: number): string {
		this.browser = this.browserOptions[index];
		return this.getBrowser();
	}
}
