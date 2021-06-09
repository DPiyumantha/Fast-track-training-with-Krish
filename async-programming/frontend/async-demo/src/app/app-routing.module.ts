import { AppComponent } from './app.component';
import { RepetitionsComponent } from './repetitions/repetitions.component';
import { NthLargestComponent } from './nth-largest/nth-largest.component';
import { AnagramComponent } from './anagram/anagram.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   
  { path: 'anagram', component: AnagramComponent }, 
  { path: 'nth-largest', component: NthLargestComponent },
  { path: 'repetitions', component: RepetitionsComponent },
  { path: '', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
