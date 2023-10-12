import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/sevices/films.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  films: any;

  constructor(private filmsService: FilmsService) {}
  ngOnInit() {
    this.getPopularFilms();
  }
  getPopularFilms() {
    this.filmsService
      .getPopularFilms()
      .subscribe((data) => (this.films = data));
  }
}
