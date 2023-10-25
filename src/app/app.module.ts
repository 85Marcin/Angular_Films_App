import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TabViewModule } from 'primeng/tabview';
import { ImageModule } from 'primeng/image';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { SliderComponent } from './components/slider/slider.component';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BannerComponent } from './components/banner/banner.component';
import { ShowItemComponent } from './components/show-item/show-item.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';
import { VideoEmbedComponent } from './components/video-embed/video-embed.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FilmListComponent,
    SliderComponent,
    BannerComponent,
    ShowItemComponent,
    ShowDetailComponent,
    VideoEmbedComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TabViewModule,
    ImageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
