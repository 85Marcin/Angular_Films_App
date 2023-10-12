import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent implements OnInit {
  films: any;

  constructor(private http: HttpClient) {}
  ngOnInit() {
    this.getpopularFilms();
  }
  getpopularFilms() {
    this.http
      .get(
        'https://api.themoviedb.org/3/movie/popular?api_key=92e327ad16fcc64c71ad3e66dbdabbc5'
      )
      .subscribe((data) => (this.films = data));
  }
}
