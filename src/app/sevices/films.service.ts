import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FilmsDTO } from '../types/film';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  constructor(private http: HttpClient) {}
  getPopularFilms() {
    return this.http.get<FilmsDTO>(
      'https://api.themoviedb.org/3/movie/popular?api_key=92e327ad16fcc64c71ad3e66dbdabbc5'
    );
  }
}
