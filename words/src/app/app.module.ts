import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { WordsComponent } from './words/words.component';
import { UserInputComponent } from './user-input/user-input.component';
import { WordsTableComponent } from './words-table/words-table.component';

@NgModule({
  declarations: [
    AppComponent,
    WordsComponent,
    UserInputComponent,
    WordsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
