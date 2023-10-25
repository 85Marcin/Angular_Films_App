import { FilmsService } from './../../sevices/films.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IMAGES_SIZES } from 'src/app/constants/images-sizes';
import { Film } from 'src/app/types/film';
import { Photo, PhotoDTO } from 'src/app/types/photo';
import { Video } from 'src/app/types/video';

@Component({
  selector: 'app-show-detail',
  templateUrl: './show-detail.component.html',
  styleUrls: ['./show-detail.component.scss'],
})
export class ShowDetailComponent implements OnInit {
  showID = '';
  show$: Observable<Film> | null = null;
  showVideos$: Observable<Video[]> | null = null;
  imagesSizes = IMAGES_SIZES;
  showPhotos$: Observable<Photo[]> | null = null;
  constructor(
    private router: ActivatedRoute,
    private filmsService: FilmsService
  ) {}

  ngOnInit() {
    this.router.params.subscribe((params) => {
      this.showID = params['id'];
    });
    this.show$ = this.filmsService.getFilmById(this.showID);
    this.showVideos$ = this.filmsService.getFilmVideos(this.showID);
    this.showPhotos$ = this.filmsService.getFilmPhotos(this.showID);
  }
}
