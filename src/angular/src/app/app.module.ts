import { ProgramTypesComponent } from './search/program-types/program-types.component';
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchFormComponent } from "./search/search-form/search-form.component";
import { SearchResultsComponent } from "./search/search-results/search-results.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CollegesComponent } from "./search/colleges/colleges.component";
import { ProgramsComponent } from './search/programs/programs.component';
import { ProgramsLabelComponent } from './search/programs-label/programs-label.component';
import { PaginationComponent } from './search/pagination/pagination.component';
import { HomeComponent } from './search/home/home.component';
import { LocationsComponent } from './search/locations/locations.component';
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    CollegesComponent,
    HomeComponent,
    LocationsComponent,
    PaginationComponent,
    ProgramsComponent,
    ProgramsLabelComponent,
    ProgramTypesComponent,
    SearchFormComponent,
    SearchResultsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

const trailingSlash = /\/$|\/(?=\?)|\/(?=#)/g;
Location.stripTrailingSlash = (url: string) => {
  if (url.endsWith('/')) {
    return url;
  } else {
    return `${url}/`;
  }
};
