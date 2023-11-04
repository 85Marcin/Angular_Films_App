import { SimilarFilmDTA } from './../types/film';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film, FilmsDTO } from '../types/film';
import { map } from 'rxjs';
import { Video, VideoDTO } from '../types/video';
import { PhotoDTO } from '../types/photo';
import { CastDTO } from '../types/cast';

@Injectable({
  providedIn: 'root',
})
export class FilmsService {
  private apiURL = 'https://api.themoviedb.org/3';
  private apiKey = '92e327ad16fcc64c71ad3e66dbdabbc5';
  constructor(private http: HttpClient) {}
  getFilmsByType(type: string, count = 12) {
    return this.http
      .get<FilmsDTO>(`${this.apiURL}/movie/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }

  getFilmById(id: string) {
    return this.http.get<Film>(
      `${this.apiURL}/movie/${id}?api_key=${this.apiKey}`
    );
  }
  getFilmVideos(id: string) {
    return this.http
      .get<VideoDTO>(`${this.apiURL}/movie/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }
  getFilmPhotos(id: string) {
    return this.http
      .get<PhotoDTO>(`${this.apiURL}/movie/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }
  getFilmCast(id: string) {
    return this.http
      .get<CastDTO>(`${this.apiURL}/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast.slice(0, 24)));
  }
  getFilmSimilar(id: string) {
    return this.http
      .get<FilmsDTO>(
        `${this.apiURL}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }
  searchFilms(page: number, searchValue?: string) {
    const uri = searchValue ? 'search/movie' : 'movie/popular';
    return this.http
      .get<FilmsDTO>(
        `${this.apiURL}/${uri}?query=${searchValue}&page=${page}&api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results));
  }
}
