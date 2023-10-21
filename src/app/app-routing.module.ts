import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { FilmListComponent } from './pages/film-list/film-list.component';
import { ShowDetailComponent } from './pages/show-detail/show-detail.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'film-list',
    component: FilmListComponent,
  },
  { path: 'show-detail/:id', component: ShowDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
