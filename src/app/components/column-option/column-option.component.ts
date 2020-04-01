import { Component, OnInit } from '@angular/core';
import { ColumnOptionService } from 'src/app/services/column-option/column-option.service';

@Component({
	selector: 'app-column-option',
	templateUrl: './column-option.component.html',
	styleUrls: [ './column-option.component.scss' ]
})
export class ColumnOptionComponent implements OnInit {
	result: string;
	title: string = 'Column Option';

	constructor(private columnOptionService: ColumnOptionService) {
		this.result = '--';
	}

	ngOnInit(): void {
		this.columnOptionService.columnOptionEvent.subscribe(() => {
			this.result = this.columnOptionService.getRandomColumnOption();
		});
	}
}
