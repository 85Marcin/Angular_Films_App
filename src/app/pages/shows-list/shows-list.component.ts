import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilmsService } from 'src/app/sevices/films.service';
import { Film } from 'src/app/types/film';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {
  showsList$: Observable<Film[]> | null = null;
  searchValue = '';

  constructor(private filmsService: FilmsService) {}

  ngOnInit() {
    this.getShows(1);
  }
  getShows(page: number, searchKeyword?: string) {
    this.showsList$ = this.filmsService.searchFilms(page, searchKeyword);
  }
  searchChange() {
    this.getShows(1, this.searchValue);
  }
  pageChange(event: any) {
    console.log(event);
  }
}
