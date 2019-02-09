import { Component } from '@angular/core';
import {floatMenu} from './floatmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  year = new Date().getFullYear();
  constructor() {
  }
}
