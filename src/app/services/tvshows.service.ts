import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
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

  searchShows(pageNum: number = 1) {
    return this.http.get<TVShowObj>(`${this.baseUrl}/tv/top_rated/?page=${pageNum}&api_key=${this.apiKey}`).pipe(
      switchMap((res) => {
        return of(res.results);
      })
    );
  }

  getShowDetails(showId: number) {
    return this.http.get<TVShow>(`${this.baseUrl}/tv/${showId}?api_key=${this.apiKey}`);
  }
}
