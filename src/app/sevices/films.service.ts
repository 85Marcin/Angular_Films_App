import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmsDTO } from '../types/film';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private apiURL = 'https://api.themoviedb.org/3';
  private apiKey = '92e327ad16fcc64c71ad3e66dbdabbc5';
  constructor(private http: HttpClient) {}
  getPopularFilms() {
    return this.http.get<FilmsDTO>(
      `${this.apiURL}/movie/popular?api_key=${this.apiKey}`
    );
  }
  getUpcomingFilms() {
    return this.http.get<FilmsDTO>(
      `${this.apiURL}/movie/upcoming?api_key=${this.apiKey}`
    );
  }
  getTopRatedFilms() {
    return this.http.get<FilmsDTO>(
      `${this.apiURL}/movie/top_rated?api_key=${this.apiKey}`
    );
  }
}
