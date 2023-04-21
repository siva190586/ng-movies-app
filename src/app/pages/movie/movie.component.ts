import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie, MovieVideo } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movie!: Movie;
  movieVideo: MovieVideo[] = [];
  readonly imageSizes = IMAGE_SIZES;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    this.route.params.subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
    });
  }

  getMovie(mid: number) {
    this.movieService.getMovieDetails(mid).subscribe((movieData) => {
      this.movie = movieData;
    });
  }

  getMovieVideos(mid: number) {
    this.movieService.getMovieVideo(mid).subscribe((movieVideoData) => {
      this.movieVideo = movieVideoData;
    });
  }
}
