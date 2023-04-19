import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieObj } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '24315cdee243cb494be9648439e5576f';

  constructor(private http: HttpClient) {}

  getMovies(mtype: string = 'upcoming', count: number = 12) {
    return this.http.get<MovieObj>(`${this.baseUrl}/movie/${mtype}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchMovies(pageNum: number = 1) {
    return this.http.get<MovieObj>(`${this.baseUrl}/movie/popular/?page=${pageNum}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieDetails(movieId: number) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }
}
