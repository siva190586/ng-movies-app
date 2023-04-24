import { Component } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { Movie } from '../../models/movie';
import { ActivatedRoute } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent {
  movies: Movie[] = [];
  genreid: string = '';
  searchKey: string = '';
  constructor(private movieService: MoviesService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.pipe(take(1)).subscribe(({ gid }) => {
      if (gid) {
        this.genreid = gid;
        this.getPagedGenreMovies(gid);
      } else {
        this.getPagedMovies();
      }
    });
  }

  getPagedMovies(pageNo: number = 1, searchKey?: string) {
    this.movieService.searchMovies(pageNo, searchKey).subscribe((movies) => {
      this.movies = movies;
    });
  }

  getPagedGenreMovies(gid: string = '', pgNum: number = 1) {
    this.movieService.getGenreMovies(gid, pgNum).subscribe((gmovies) => {
      this.movies = gmovies;
    });
  }

  searchMovie() {
    this.getPagedMovies(1, this.searchKey);
  }

  paginate(event: any) {
    const pageNumber = event.page + 1;
    if (this.genreid) {
      this.getPagedGenreMovies(this.genreid, pageNumber);
    } else {
      this.getPagedMovies(pageNumber, this.searchKey);
    }
  }
}
