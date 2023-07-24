import { NgModule } from '@angular/core';
import { MoviesComponent } from './movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';
import { MoviesRoutingModule } from './movies-routing.module';

@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailComponent
  ],
  imports: [
    MoviesRoutingModule
  ]
})
export class MoviesModule { }
