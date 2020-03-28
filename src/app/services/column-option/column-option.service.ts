import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ColumnOptionService {
	private COLUMN_OPTION_LIMIT: number = 10;
	private MAX_COLUMN = 100;

	columnOptionEvent = new EventEmitter();

	constructor() {}

	getColumnOptionLimit(): number {
		return this.COLUMN_OPTION_LIMIT;
	}

	setColumnOptionLimit(limit: number) {
		this.COLUMN_OPTION_LIMIT = limit > this.MAX_COLUMN ? this.MAX_COLUMN : limit;
	}

	getRandomColumnOption(): string {
		const options = Array.from(Array(this.COLUMN_OPTION_LIMIT), (_, i) => i + 1);
		const index = Math.floor(Math.random() * options.length);
		return `${options[index]} option`;
	}
}
