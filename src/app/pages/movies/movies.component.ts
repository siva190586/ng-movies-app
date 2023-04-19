import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: Movie[] = [];
  constructor(private movieService: MoviesService) {}

  ngOnInit() {
    this.getPagedMovies();
  }

  getPagedMovies(pageNo: number = 1) {
    this.movieService.searchMovies(pageNo).subscribe((movies) => {
      this.movies = movies;
    });
  }

  paginate(event: any) {
    this.getPagedMovies(event.page + 1);
  }
}
