import { Component } from '@angular/core';
import { TVShow } from '../../models/tvshow';
import { TvshowsService } from '../../services/tvshows.service';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  popularMovies: Movie[] = [];
  upcomingMovies: Movie[] = [];
  topRatedMovies: Movie[] = [];
  popularShows: TVShow[] = [];
  topRatedShows: TVShow[] = [];

  constructor(private movieservice: MoviesService, private showservice: TvshowsService) {}

  ngOnInit() {
    this.movieservice.getMovies('upcoming').subscribe((response) => {
      this.upcomingMovies = response;
    });
    this.movieservice.getMovies('popular').subscribe((response) => {
      this.popularMovies = response;
    });
    this.movieservice.getMovies('top_rated').subscribe((response) => {
      this.topRatedMovies = response;
    });
    this.showservice.getShows('popular').subscribe((response) => {
      this.popularShows = response;
    });
    this.showservice.getShows('top_rated').subscribe((response) => {
      this.topRatedShows = response;
    });
  }
}
