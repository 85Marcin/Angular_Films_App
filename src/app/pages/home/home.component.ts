import { mapToFilms } from './../../types/tvshows';
import { Component } from '@angular/core';
import { FilmsService } from '../../sevices/films.service';
import { TVShowsService } from '../../sevices/tvshows.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  popularFilms$ = this.filmsService.getFilmsByType('popular');
  upcomingFilms$ = this.filmsService.getFilmsByType('upcoming');
  topRatedFilms$ = this.filmsService.getFilmsByType('top_rated');
  popularTVShows$ = this.tvshowsService
    .getTVShowsByType('popular')
    .pipe(map(mapToFilms));
  constructor(
    private filmsService: FilmsService,
    private tvshowsService: TVShowsService
  ) {}
}
