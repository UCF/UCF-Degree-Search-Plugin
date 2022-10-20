import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SearchFormComponent } from "./search/search-form/search-form.component";
import { SearchResultsComponent } from "./search/search-results/search-results.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CollegesComponent } from "./search/colleges/colleges.component";
import { ProgramTypesComponent } from "./search/program-types/program-types.component";

@NgModule({
  declarations: [
    AppComponent,
    SearchFormComponent,
    SearchResultsComponent,
    CollegesComponent,
    ProgramTypesComponent,
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
