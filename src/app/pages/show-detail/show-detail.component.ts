import { FilmsService } from './../../sevices/films.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Film } from 'src/app/types/film';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  showID = '';
  show$: Observable<Film> | null = null;
  imagesSizes = IMAGES_SIZES;
  constructor(
    private router: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showID = params['id'];
    });
    this.show$ = this.filmsService.getFilmById(this.showID);
  }
}
