import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesModel } from 'src/app/model/moives.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent {

  movies: MoviesModel.MoviesResponse = {
    page: 1,
    results: [],
    total_pages: 0,
    total_results: 0,
  };

  movieImg = ConstantUri.movieImg;

  constructor(
    private readonly apiService: ApiService<any>,
    private readonly router: Router
  ) {}

  ngOnInit(): void {
    const getconfig = { url: ConstantUri.popularMovies, params: {api_key: ConstantUri.apiKey} };

    this.apiService.getService(getconfig).subscribe(val => {
      this.movies = val;
      console.log(this.movies);
    });
  }

  seeDetail(id: number) {
    this.router.navigate([`popular/detail/${id}`])
  }
}
