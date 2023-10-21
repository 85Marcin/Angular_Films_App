import { Component, Input } from '@angular/core';

import { Film } from '../../types/film';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent {
  @Input() shows: Film[] = [];
  @Input() title: string = '';
}
