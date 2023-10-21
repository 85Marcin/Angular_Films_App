import { Component } from '@angular/core';
import { FilmsService } from '../../sevices/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  upcomingFilms$ = this.filmsService.getFilmsByType('upcoming');
  topRatedFilms$ = this.filmsService.getFilmsByType('top_rated');

  constructor(private filmsService: FilmsService) {}
}
