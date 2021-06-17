import { OwnerListComponent } from './owner/owner-list/owner-list.component';

import { AppComponent } from './app.component';
import { PetFormComponent } from './pet/pet-form/pet-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './pet/pet-list/pet-list.component';

const routes: Routes = [
  {component:PetFormComponent,path:'pets/:id/edit'},
  
  {component:PetFormComponent,path:'pets/addnew'},
  {component:PetListComponent,path:'pets'},
  {component:OwnerListComponent,path:'owners'},
  {component:PetFormComponent,path:'pets/edit'},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
