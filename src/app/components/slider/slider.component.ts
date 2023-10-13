import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/sevices/films.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  constructor(private filmsService: FilmsService) {}
  films$ = this.filmsService.getPopularFilms();
  items = ['Name1', 'Name2', 'Name3', 'Name4'];
}
