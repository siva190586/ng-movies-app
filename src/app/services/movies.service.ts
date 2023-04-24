import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie, MovieCredits, MovieImages, MovieObj, MovieVideoObj } from '../models/movie';
import { switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { GenresObj } from '../models/genre';

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

  searchMovies(pageNum: number, keyword?: string) {
    const searchUrl = keyword ? '/search/movie' : '/movie/popular';
    return this.http
      .get<MovieObj>(`${this.baseUrl}${searchUrl}?query=${keyword}&page=${pageNum}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getMovieDetails(movieId: number) {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${movieId}?api_key=${this.apiKey}`);
  }

  getMovieVideo(mid: number) {
    return this.http.get<MovieVideoObj>(`${this.baseUrl}/movie/${mid}/videos?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieImage(mid: number) {
    return this.http.get<MovieImages>(`${this.baseUrl}/movie/${mid}/images?api_key=${this.apiKey}`);
  }

  getMovieCredit(mid: number) {
    return this.http.get<MovieCredits>(`${this.baseUrl}/movie/${mid}/credits?api_key=${this.apiKey}`);
  }

  getSimilarMovies(mid: number) {
    return this.http.get<MovieObj>(`${this.baseUrl}/movie/${mid}/similar?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getMovieGenres() {
    return this.http.get<GenresObj>(`${this.baseUrl}/genre/movie/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getGenreMovies(gid: string, pgno: number) {
    return this.http
      .get<MovieObj>(`${this.baseUrl}/discover/movie?page=${pgno}&with_genres=${gid}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
