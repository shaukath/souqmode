import { BrowserModule } from '@angular/platform-browser';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatMenuModule} from '@angular/material/menu';

import { environment } from '../environments/environment';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material';
import { SeoComponentComponent } from './seo-component/seo-component.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { SemComponent } from './sem/sem.component';
import { SmmComponent } from './smm/smm.component';

@NgModule({
  declarations: [
    AppComponent,
    SeoComponentComponent,
    NavComponent,
    HomeComponent,
    SemComponent,
    SmmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MatIconModule,
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
