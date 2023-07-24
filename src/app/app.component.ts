import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { ConstantUri } from './utils/constantUri';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(apiService: ApiService<any>) {
    const getconfig = { url: ConstantUri.newToken, params: {api_key: ConstantUri.apiKey} };
    apiService.getService(getconfig).subscribe(val => {
      const { request_token } = val;
      sessionStorage.setItem('requestToken', request_token);
    });
  }

  title = 'movie-app';
}
