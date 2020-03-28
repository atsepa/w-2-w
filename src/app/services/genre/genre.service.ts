import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GenreService {
	genreEvent = new EventEmitter();
	private genreOptions: string[] = [
		'Action',
		'Adventure',
		'Comedy',
		'Crime',
		'Drama',
		'Horror',
		'Musical',
		'Fiction',
		'Documentary',
		'Chick Flicks',
		'Detective',
		'Disaster',
		'Fantasy',
		'Romance',
		'Superheroes',
		'Animated'
	];

	getGenreOptions(): string[] {
		return this.genreOptions.slice();
	}

	getGenreOption(index: number): string {
		return this.genreOptions[index];
	}

	getRandomGenreOption(): string {
		const index = Math.floor(Math.random() * this.genreOptions.length);
		return this.getGenreOption(index);
	}
}
