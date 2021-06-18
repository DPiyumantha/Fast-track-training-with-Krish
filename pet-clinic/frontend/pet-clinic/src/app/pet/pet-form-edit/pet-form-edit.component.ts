import { PetCommunicationService } from './../../services/pet-communication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { PetService } from 'src/app/services/pet.service';

@Component({
  selector: 'app-pet-form-edit',
  templateUrl: './pet-form-edit.component.html',
  styleUrls: ['./pet-form-edit.component.scss']
})
export class PetFormEditComponent implements OnInit {
  petTypes!: string[];
  title: string = 'Add a Pet';
  updatingPet: any = {};
  constructor(
    private _petService: PetService, 
    private _petCommunication:PetCommunicationService,
    private toastr: ToastrService, 
    private router: Router) { }

  ngOnInit(): void {
    this._petService.getPetTypes().subscribe((data: string[]) => {
      this.petTypes = data.sort();
    });
    this._petCommunication.petObservable.subscribe(data=>this.updatingPet=data.data)
  }

  onSubmit(form: any) {
    
      this._petService.updatePet(this.updatingPet).toPromise()
        .then((data: any) => { this.toastr.success(`${data.name}`, "Successfully updated!") })
        .then(() => {
          this.updatingPet = {}
          form.reset()
        })
        .then(() => this.router.navigate(['/pets']))
        .catch(() => this.toastr.success("Record not updated", "Something went wrong!"))
    
  }

}
