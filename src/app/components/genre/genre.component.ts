import { Component, OnInit } from '@angular/core';
import { GenreService } from 'src/app/services/genre/genre.service';

@Component({
	selector: 'app-genre',
	templateUrl: './genre.component.html',
	styleUrls: [ './genre.component.scss' ]
})
export class GenreComponent implements OnInit {
	result: string;

	constructor(private genreService: GenreService) {
		this.result = 'GENDER';
	}

	ngOnInit(): void {
		this.genreService.genreEvent.subscribe(() => {
			this.result = this.genreService.getRandomGenreOption();
		});
	}
}
