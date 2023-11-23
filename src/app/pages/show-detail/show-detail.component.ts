import { FilmsService } from './../../sevices/films.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { TVShowsService } from 'src/app/sevices/tvshows.service';
import { Actor } from 'src/app/types/cast';
import { Film } from 'src/app/types/film';
import { Photo } from 'src/app/types/photo';
import { TVShow, mapToFilm, mapToFilms } from 'src/app/types/tvshows';
import { Video } from 'src/app/types/video';
import { map } from 'rxjs';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  showID = '';
  showType: 'tv' | 'film' = 'film';
  show$: Observable<Film> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  imagesSizes = IMAGES_SIZES;
  showPhotos$: Observable<Photo[]> | null = null;
  actors$: Observable<Actor[]> | null = null;
  similarFilms$: Observable<Film[]> | null = null;
  constructor(
    private router: ActivatedRoute,
    private filmsService: FilmsService,
    private tvshowsService: TVShowsService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showID = params['id'];

      this.showType = this.router.snapshot.params['type'];

      if (this.showType === 'film') {
        this.show$ = this.filmsService.getFilmById(this.showID);
        this.showVideos$ = this.filmsService.getFilmVideos(this.showID);
        this.showPhotos$ = this.filmsService.getFilmPhotos(this.showID);
        this.actors$ = this.filmsService.getFilmCast(this.showID);
        this.similarFilms$ = this.filmsService.getFilmSimilar(this.showID);
      }
      if (this.showType === 'tv') {
        this.show$ = this.tvshowsService
          .getTVShowById(this.showID)
          .pipe(map(mapToFilm));
        this.showVideos$ = this.tvshowsService.getTVShowsVideos(this.showID);
        this.showPhotos$ = this.tvshowsService.getTVShowPhotos(this.showID);
        this.actors$ = this.tvshowsService.getTVShowCast(this.showID);
        this.similarFilms$ = this.tvshowsService
          .getTVShowSimilar(this.showID)
          .pipe(map(mapToFilms));
      }
    });
  }
}
