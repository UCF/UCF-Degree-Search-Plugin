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

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchResultsComponent,
    CollegesComponent,
    ProgramTypesComponent,
    ProgramsComponent,
    ProgramsLabelComponent,
    PaginationComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
