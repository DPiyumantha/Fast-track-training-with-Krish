import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetListComponent } from './pet-list/pet-list.component';
import { PetFormComponent } from './pet-form/pet-form.component';
import { FormsModule } from '@angular/forms';
import { PetFormEditComponent } from './pet-form-edit/pet-form-edit.component';



@NgModule({
  declarations: [
    PetListComponent,
    PetFormComponent,
    PetFormEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ]
})
export class PetModule { }
