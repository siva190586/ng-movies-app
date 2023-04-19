import { Component } from '@angular/core';
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

  constructor(private movieservice: MoviesService) {}

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
  }
}
