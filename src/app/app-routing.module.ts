import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MovieComponent } from './pages/movie/movie.component';
import { MoviesComponent } from './pages/movies/movies.component';
import { TvshowComponent } from './pages/tvshow/tvshow.component';
import { TvshowsComponent } from './pages/tvshows/tvshows.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'movie/:id',
    component: MovieComponent
  },
  {
    path: 'movies',
    component: MoviesComponent
  },
  {
    path: 'tvshow/:id',
    component: TvshowComponent
  },
  {
    path: 'tvshows',
    component: TvshowsComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
