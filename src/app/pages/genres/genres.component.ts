import { Component } from '@angular/core';
import { Genre, GenresObj } from '../../models/genre';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genres!: Genre[];

  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.getMovieGenres();
  }

  getMovieGenres() {
    this.movieService.getMovieGenres().subscribe((movieGenres) => {
      this.genres = movieGenres;
    });
  }
}
