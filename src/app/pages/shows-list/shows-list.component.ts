import { TVShowsService } from 'src/app/sevices/tvshows.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaginatorState } from 'primeng/paginator';
import { Observable, map } from 'rxjs';
import { FilmsService } from 'src/app/sevices/films.service';
import { Film, FilmsDTO } from 'src/app/types/film';
import { mapToFilmsDTO } from 'src/app/types/tvshows';

@Component({
  selector: 'app-shows-list',
  templateUrl: './shows-list.component.html',
  styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {
  showsList$: Observable<FilmsDTO> | null = null;
  searchValue = '';
  showsType: 'film' | 'tv' = 'tv';

  constructor(
    private filmsService: FilmsService,
    private tvShowsService: TVShowsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.showsType = params['type'];
      this.getShows(this.showsType, 1);
    });
    // this.showsType = this.route.snapshot.params['type'];
  }
  getShows(showsType: 'film' | 'tv', page: number, searchKeyword?: string) {
    if (showsType === 'film') {
      this.showsList$ = this.filmsService.searchFilms(page, searchKeyword);
    }
    if (showsType === 'tv') {
      this.showsList$ = this.tvShowsService
        .searchTVShow(page, searchKeyword)
        .pipe(map(mapToFilmsDTO));
    }
  }
  searchChange() {
    this.getShows(this.showsType, 1, this.searchValue);
  }
  pageChange(event: PaginatorState) {
    const pageNumber = event.page ? event.page + 1 : 1;
    this.getShows(this.showsType, pageNumber, this.searchValue);
  }
}
