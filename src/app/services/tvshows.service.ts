import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { GenresObj } from '../models/genre';
import { TVShow, TVShowObj } from '../models/tvshow';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {
  baseUrl: string = 'https://api.themoviedb.org/3';
  apiKey: string = '24315cdee243cb494be9648439e5576f';

  constructor(private http: HttpClient) {}

  getShows(stype: string = 'top_rated', count: number = 12) {
    return this.http.get<TVShowObj>(`${this.baseUrl}/tv/${stype}?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results.slice(0, count));
      })
    );
  }

  searchShows(pageNum: number, searchKey?: string) {
    const searchUrl = searchKey ? '/search/tv' : '/tv/top_rated';
    return this.http
      .get<TVShowObj>(`${this.baseUrl}${searchUrl}?page=${pageNum}&query=${searchKey}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }

  getShowDetails(showId: number) {
    return this.http.get<TVShow>(`${this.baseUrl}/tv/${showId}?api_key=${this.apiKey}`);
  }

  getShowGenres() {
    return this.http.get<GenresObj>(`${this.baseUrl}/genre/tv/list?api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.genres);
      })
    );
  }

  getGenreShows(gid: string, pgno: number) {
    return this.http
      .get<TVShowObj>(`${this.baseUrl}/discover/tv?page=${pgno}&with_genres=${gid}&api_key=${this.apiKey}`)
      .pipe(
        switchMap((res) => {
          return of(res.results);
        })
      );
  }
}
