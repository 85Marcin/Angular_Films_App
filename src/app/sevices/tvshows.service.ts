import { TVShow, TVShowsDTO } from './../types/tvshows';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { map } from 'rxjs';
import { PhotoDTO } from '../types/photo';
import { CastDTO } from '../types/cast';
import { VideoDTO } from '../types/video';

@Injectable({
  providedIn: 'root',
})
export class TVShowsService {
  private apiURL = 'https://api.themoviedb.org/3';
  private apiKey = '92e327ad16fcc64c71ad3e66dbdabbc5';
  constructor(private http: HttpClient) {}
  getTVShowsByType(type: string, count = 12) {
    return this.http
      .get<TVShowsDTO>(`${this.apiURL}/tv/${type}?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results.slice(0, count)));
  }
  getTVShowById(id: string) {
    return this.http.get<TVShow>(
      `${this.apiURL}/tv/${id}?api_key=${this.apiKey}`
    );
  }
  getTVShowsVideos(id: string) {
    return this.http
      .get<VideoDTO>(`${this.apiURL}/tv/${id}/videos?api_key=${this.apiKey}`)
      .pipe(map((data) => data.results));
  }
  getTVShowPhotos(id: string) {
    return this.http
      .get<PhotoDTO>(`${this.apiURL}/tv/${id}/images?api_key=${this.apiKey}`)
      .pipe(map((data) => data.backdrops));
  }
  getTVShowCast(id: string) {
    return this.http
      .get<CastDTO>(`${this.apiURL}/movie/${id}/credits?api_key=${this.apiKey}`)
      .pipe(map((data) => data.cast.slice(0, 24)));
  }
  getTVShowSimilar(id: string) {
    return this.http
      .get<TVShowsDTO>(
        `${this.apiURL}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results.slice(0, 12)));
  }
  searchTVShow(page: number, searchValue?: string) {
    const uri = searchValue ? '/search/tv' : '/tv/popular';
    return this.http.get<TVShowsDTO>(
      `${this.apiURL}${uri}?page=${page}&query=${searchValue}&api_key=${this.apiKey}`
    );
  }
}
