import { Component } from '@angular/core';
import { FilmsService } from '../../sevices/films.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  upcomingFilms$ = this.filmsService.getUpcomingFilms();
  constructor(private filmsService: FilmsService) {}
}
