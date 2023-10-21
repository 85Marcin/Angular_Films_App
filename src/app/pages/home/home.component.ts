import { Component } from '@angular/core';
import { FilmsService } from '../../sevices/films.service';
import { TVShowsService } from 'src/app/sevices/tvshows.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  upcomingFilms$ = this.filmsService.getFilmsByType('upcoming');
  topRatedFilms$ = this.filmsService.getFilmsByType('top_rated');
  popularTVShows$ = this.tvshowsService.getTVShowsByType('popular');
  constructor(
    private filmsService: FilmsService,
    private tvshowsService: TVShowsService
  ) {}
}
