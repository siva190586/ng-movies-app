import { Component } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows.service';
import { Genre } from '../../models/genre';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss']
})
export class GenresComponent {
  genres!: Genre[];
  tvgenres!: Genre[];

  constructor(private movieService: MoviesService, private showService: TvshowsService) {}

  ngOnInit() {
    this.getMovieGenres();
    this.getShowGenres();
  }

  getMovieGenres() {
    this.movieService.getMovieGenres().subscribe((movieGenres) => {
      this.genres = movieGenres;
    });
  }

  getShowGenres() {
    this.showService.getShowGenres().subscribe((showGenres) => {
      this.tvgenres = showGenres;
    });
  }
}
