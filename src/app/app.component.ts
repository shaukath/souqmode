import { Component, ViewChild } from '@angular/core';
import {floatMenu} from './floatmenu';
import { MatSidenav } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav;
  title = 'app';
  year = new Date().getFullYear();
  constructor() {
  }
}
