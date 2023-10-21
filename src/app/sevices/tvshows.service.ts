import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmsDTO } from '../types/film';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TVShowsService {
  private apiURL = 'https://api.themoviedb.org/3';
  private apiKey = '92e327ad16fcc64c71ad3e66dbdabbc5';
  constructor(private http: HttpClient) {}
  getTVShowsByType(type: string, count = 12) {
    return this.http
      .get<FilmsDTO>(`${this.apiURL}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
}
