import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './search/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'college/:selectedCollege',
    component: HomeComponent
  },
  {
    path: 'college/:selectedCollege/:selectedProgramType',
    component: HomeComponent
  },
  {
    path: 'college/:selectedCollege/search/:search',
    component: HomeComponent
  },
  {
    path: 'college/:selectedCollege/:selectedProgramType/search/:search',
    component: HomeComponent
  },
  {
    path: 'search/:search',
    component: HomeComponent
  },
  {
    path: ':selectedProgramType',
    component: HomeComponent
  },
  {
    path: ':selectedProgramType/college/:selectedCollege/search/:search',
    component: HomeComponent
  },
  {
    path: ':selectedProgramType/college/:selectedCollege',
    component: HomeComponent
  },
  {
    path: ':selectedProgramType/search/:search',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
