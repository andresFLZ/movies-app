import { keyApi } from "./config"


const baseUrl = 'https://api.themoviedb.org/3'

export class ConstantUri {
    public static readonly apiKey = keyApi;
    public static readonly login = baseUrl + '/authentication/token/validate_with_login'
    public static readonly newToken = baseUrl + '/authentication/token/new'
    public static readonly popularMovies = baseUrl + '/movie/popular'
    public static readonly movieImg = 'https://image.tmdb.org/t/p/w500/'
}