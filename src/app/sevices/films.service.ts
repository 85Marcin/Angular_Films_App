import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film, FilmsDTO } from '../types/film';
import { map } from 'rxjs';
import { Video, VideoDTO } from '../types/video';
import { PhotoDTO } from '../types/photo';

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
}
