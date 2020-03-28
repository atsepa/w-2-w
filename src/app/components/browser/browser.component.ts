import { Component, OnInit } from '@angular/core';
import { BrowserService } from 'src/app/services/browser/browser.service';

@Component({
	selector: 'app-browser',
	templateUrl: './browser.component.html',
	styleUrls: [ './browser.component.scss' ]
})
export class BrowserComponent implements OnInit {
	result: string;

	constructor(private browserService: BrowserService) {
		this.result = 'BROWSER';
	}

	ngOnInit(): void {
		this.browserService.browserEvent.subscribe(() => {
			this.result = this.browserService.getRandomBrowserOption();
		});
	}
}
