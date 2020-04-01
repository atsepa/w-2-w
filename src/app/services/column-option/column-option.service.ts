import { MAX_COLUMN } from './column-option.consts';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class ColumnOptionService {
	private columnOption: number;
	private columnOptionLimit = 10;

	columnOptionEvent = new EventEmitter();

	getColumnOption(): number {
		return this.columnOption;
	}

	getColumnOptionLimit(): number {
		return this.columnOptionLimit;
	}

	setColumnOptionLimit(limit: number) {
		this.columnOptionLimit = limit > MAX_COLUMN ? MAX_COLUMN : limit;
	}

	getRandomColumnOption(): string {
		const options = Array.from(Array(this.columnOptionLimit), (_, i) => i + 1);
		const index = Math.floor(Math.random() * options.length);
		this.columnOption = options[index];
		return `option ${this.getColumnOption()}`;
	}
}
