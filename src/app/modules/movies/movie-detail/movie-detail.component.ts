import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesModel } from 'src/app/model/moives.model';
import { ApiService } from 'src/app/services/api.service';
import { ConstantUri } from 'src/app/utils/constantUri';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent {

  movie: MoviesModel.MovieIdResponse = {
    adult: false,
    backdrop_path: '',
    belongs_to_collection: undefined,
    budget: 0,
    genres: [],
    homepage: '',
    id: 0,
    imdb_id: '',
    original_language: '',
    original_title: '',
    overview: '',
    popularity: 0,
    poster_path: '',
    production_companies: [],
    production_countries: [],
    release_date: '',
    revenue: 0,
    runtime: 0,
    spoken_languages: [],
    status: '',
    tagline: '',
    title: '',
    video: false,
    vote_average: 0,
    vote_count: 0
  }
  movieImg = ConstantUri.movieImg;

  constructor(
    private readonly apiService: ApiService<any>,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((val: any) => {
      this.getMovie(val.id);
    });
  }

  private getMovie(id: string) {
    const getconfig = { url: ConstantUri.movie+id, params: {api_key: ConstantUri.apiKey} };

    this.apiService.getService(getconfig).subscribe(val => {
      this.movie = val;
      console.log(this.movie);
    });
  }

  returnPopular() {
    this.router.navigate(['/popular']);
  }
}
