import { Component } from '@angular/core';
import { FilmsService } from '../../sevices/films.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  upcomingFilms$ = this.filmsService.getUpcomingFilms();
  topRatedFilms$ = this.filmsService.getTopRatedFilms();

  constructor(private filmsService: FilmsService) {}
}
