import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs';
import { IMAGE_SIZES } from '../../constants/image-sizes';
import { Movie, MovieBackdrops, MovieCredits, MovieObj, MovieVideo } from '../../models/movie';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent {
  movie!: Movie;
  movieVideo: MovieVideo[] = [];
  movieImage?: MovieBackdrops[];
  movieCredit?: MovieCredits;
  similarMovies: Movie[] = [];

  readonly imageSizes = IMAGE_SIZES;
  constructor(private route: ActivatedRoute, private movieService: MoviesService) {}

  ngOnInit() {
    this.route.params.pipe(first()).subscribe(({ id }) => {
      this.getMovie(id);
      this.getMovieVideos(id);
      this.getMovieImages(id);
      this.getMovieCredits(id);
      this.getSimilarMovs(id);
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

  getMovieImages(mid: number) {
    this.movieService.getMovieImage(mid).subscribe((movieImageData) => {
      this.movieImage = movieImageData.backdrops;
    });
  }

  getMovieCredits(mid: number) {
    this.movieService.getMovieCredit(mid).subscribe((movieCredits) => {
      this.movieCredit = movieCredits;
    });
  }

  getSimilarMovs(mid: number) {
    this.movieService.getSimilarMovies(mid).subscribe((similarMovies) => {
      this.similarMovies = similarMovies;
    });
  }
}
