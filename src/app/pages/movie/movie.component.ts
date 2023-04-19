import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movie!: Movie;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
    });
  }

  getMovie(mid: number) {
    this.movieService.getMovieDetails(mid).subscribe((movieData) => {
      this.movie = movieData;
    });
  }
}
