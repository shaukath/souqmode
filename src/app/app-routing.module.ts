import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {SeoComponentComponent} from './seo-component/seo-component.component';
import {HomeComponent} from './home/home.component';
import {SemComponent} from './sem/sem.component';
import {SmmComponent} from './smm/smm.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'sem',
    component: SemComponent
  },
  {
    path: 'seo',
    component: SeoComponentComponent
  },
  {
    path: 'smm',
    component: SmmComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
