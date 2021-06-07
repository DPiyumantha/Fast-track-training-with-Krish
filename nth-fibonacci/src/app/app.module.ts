import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NthFibonacciComponent } from './nth-fibonacci/nth-fibonacci.component';
import { NthFibonacciLabelComponent } from './nth-fibonacci-label/nth-fibonacci-label.component';

@NgModule({
  declarations: [
    AppComponent,
    NthFibonacciComponent,
    NthFibonacciLabelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
