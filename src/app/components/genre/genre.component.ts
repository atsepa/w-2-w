import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre/genre.service';

@Component({
	selector: 'app-genre',
	templateUrl: './genre.component.html',
	styleUrls: [ './genre.component.scss' ]
})
export class GenreComponent implements OnInit {
	result: string;
	title: string = 'Genre';

	constructor(private genreService: GenreService) {
		this.result = '--';
	}

	ngOnInit(): void {
		this.genreService.genreEvent.subscribe(() => {
			this.result = this.genreService.getRandomGenreOption();
		});
	}
}
