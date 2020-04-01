import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GenreService {
	genreEvent = new EventEmitter();
	private genre: string;
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

	getGenre(): string {
		return this.genre;
	}

	getGenreOptions(): string[] {
		return this.genreOptions;
	}

	getRandomGenreOption(): string {
		const index = Math.floor(Math.random() * this.genreOptions.length);
		return this.getGenreOption(index);
	}

	private getGenreOption(index: number): string {
		this.genre = this.genreOptions[index];
		return this.getGenre();
	}
}
