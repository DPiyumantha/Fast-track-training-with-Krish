import { ToastrService } from 'ngx-toastr';
import { PetService } from './../../services/pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/Pet.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pet-form',
  templateUrl: './pet-form.component.html',
  styleUrls: ['./pet-form.component.scss']
})
export class PetFormComponent implements OnInit {
  petTypes!: string[];
  title: string = 'Add a Pet';
  newPet: any = {};

  constructor(
    private _petService: PetService, 
    private toastr: ToastrService,) { }

  ngOnInit(): void {
    this._petService.getPetTypes().subscribe((data: string[]) => {
      this.petTypes = data.sort();
    });
  }

  onSubmit(form: any) {
    
      this._petService.createPet(this.newPet).toPromise()
        .then((data: any) => this.toastr.success(`${data.name}`, "Successfully saved!"))
        .then(() => {
          this.newPet = {};
          form.reset()
        })
        .catch(() => this.toastr.success("Record not saved", "Something went wrong!"))
    
  }

}
