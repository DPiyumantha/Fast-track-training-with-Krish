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
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit(): void {
    this._petService.getPetTypes().subscribe((data: string[]) => {
      this.petTypes = data.sort();
    });
    this._petService.petObservable
    .subscribe(val => { this.newPet = val.data; if (val.updating) { this.title = "Update" } })
  }

  onSubmit(form: any) {
    if (this.title === "Update") {
      this._petService.updatePet(this.newPet).toPromise()
        .then((data: any) => { this.toastr.success(`${data.name}`, "Successfully updated!") })
        .then(() => {
          this.newPet = {}
          form.reset()
        })
        .then(() => this.router.navigate(['/pets']))
        .catch(() => this.toastr.success("Record not updated", "Something went wrong!"))
    } else {
      this._petService.createPet(this.newPet).toPromise()
        .then((data: any) => this.toastr.success(`${data.name}`, "Successfully saved!"))
        .then(() => {
          this.newPet = {};
          form.reset()
        })
        .catch(() => this.toastr.success("Record not saved", "Something went wrong!"))
    }
  }

}
