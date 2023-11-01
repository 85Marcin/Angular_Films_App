import { imagesBaseUrl } from './../../constants/images-sizes';
import { Component, Input } from '@angular/core';
import { Film } from 'src/app/types/film';

@Component({
  selector: 'app-show-item',
  templateUrl: './show-item.component.html',
  styleUrls: ['./show-item.component.scss'],
})
export class ShowItemComponent {
  imageBaseUrl = imagesBaseUrl;
  @Input() showItem: Film | null = null;
  @Input() showType: 'tv' | 'film' = 'film';
}
