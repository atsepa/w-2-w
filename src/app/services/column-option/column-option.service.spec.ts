import { TestBed } from '@angular/core/testing';

import { ColumnOptionService } from './column-option.service';

describe('ColumnOptionService', () => {
	let service: ColumnOptionService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(ColumnOptionService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
