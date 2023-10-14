import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from 'src/app/sevices/films.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  animations: [
    trigger('slideFade', [
      state('void', style({ opacity: 0 })),
      transition('void<=>*', [animate('1s')]),
    ]),
  ],
})
export class SliderComponent implements OnInit {
  constructor(private filmsService: FilmsService) {}
  films$ = this.filmsService.getPopularFilms();
  slideIndex = 0;
  ngOnInit() {
    setInterval(() => {
      this.slideIndex += 1;
    }, 5000);
  }
}
