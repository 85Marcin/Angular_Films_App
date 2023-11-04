import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/sevices/films.service';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent {
  genres$ = this.filmsService.getFilmGenres();
  constructor(private filmsService: FilmsService) {}
}
