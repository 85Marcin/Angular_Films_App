import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { FilmsService } from '../../sevices/films.service';
import { imagesBaseUrl } from '../../constants/images-sizes';

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
  baseUrl = imagesBaseUrl;
  slideIndex = 0;
  ngOnInit() {
    this.changeSlide();
  }
  changeSlide() {
    setInterval(() => {
      this.slideIndex += 1;
      if (this.slideIndex > 10) this.slideIndex = 0;
    }, 5000);
  }
}
