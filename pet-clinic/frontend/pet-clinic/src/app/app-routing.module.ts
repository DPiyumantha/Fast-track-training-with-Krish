import { PetFormEditComponent } from './pet/pet-form-edit/pet-form-edit.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { OwnerListComponent } from './owner/owner-list/owner-list.component';

import { AppComponent } from './app.component';
import { PetFormComponent } from './pet/pet-form/pet-form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PetListComponent } from './pet/pet-list/pet-list.component';

const routes: Routes = [
  {component:PetFormComponent,path:'pets/addnew'},
  {component:PetListComponent,path:'pets'},
  {component:OwnerListComponent,path:'owners'},
  {component:PetFormEditComponent,path:'pets/edit'},
  {component:LandingPageComponent,path:''},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
