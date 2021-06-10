import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AnagramComponent } from './anagram/anagram.component';
import { RepetitionsComponent } from './repetitions/repetitions.component';
import { NthLargestComponent } from './nth-largest/nth-largest.component';
import { DisplayLabelComponent } from './display-label/display-label.component';
import { FormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AnagramComponent,
    RepetitionsComponent,
    NthLargestComponent,
    DisplayLabelComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
