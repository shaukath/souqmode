import { Component } from '@angular/core';
import {floatMenu} from './floatmenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  fillerNav = Array(50).fill(0).map((_, i) => `Nav Item ${i + 1}`);
  year = new Date().getFullYear();
  constructor() {
  }
}
