import { Component } from '@angular/core';
import { properties } from 'src/assets/properties/properties';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  value!: string;
  logo = properties.logo;
}
