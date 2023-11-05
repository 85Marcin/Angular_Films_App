import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/sevices/films.service';
import { Film, Genre } from 'src/app/types/film';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.scss'],
})
export class GenresComponent implements OnInit {
  genres$: Observable<Genre[]> | null = null;
  shows$: Observable<Film[]> | null = null;
  genreId = 0;
  constructor(
    private filmsService: FilmsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.genreId = params['genreId'];
      this.shows$ = this.filmsService.getFilmsByGenre(this.genreId);
    });
    this.genres$ = this.filmsService.getFilmGenres();
  }

  // findByGenre(genreId: number) {
  //   this.shows$ = this.filmsService.getFilmsByGenre(genreId);
  // }
}
