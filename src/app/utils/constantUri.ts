import { keyApi } from "./config"


const baseUrl = 'https://api.themoviedb.org/3'

export class ConstantUri {
    public static readonly apiKey = keyApi;
    public static readonly login = baseUrl + '/authentication/token/validate_with_login'
}