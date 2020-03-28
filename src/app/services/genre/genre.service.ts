import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GenreService {
	genreEvent = new EventEmitter();
	private readonly genreOptions: string[] = [
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
		return this.genreOptions;
	}

	getRandomGenreOption(): string {
		const index = Math.floor(Math.random() * this.genreOptions.length);
		return this.getGenreOption(index);
	}

	private getGenreOption(index: number): string {
		return this.genreOptions[index];
	}
}
