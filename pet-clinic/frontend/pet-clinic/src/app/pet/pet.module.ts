import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PetListComponent,
    PetFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PetModule { }
