import { PetCommunicationService } from './../../services/pet-communication.service';
import { PetService } from './../../services/pet.service';
import { Component, OnInit } from '@angular/core';
import { Pet } from 'src/app/model/Pet.model';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
@Component({
  selector: 'app-pet-list',
  templateUrl: './pet-list.component.html',
  styleUrls: ['./pet-list.component.scss']
})
export class PetListComponent implements OnInit {
  pets!: Pet[];
  petToDelete!: Pet;
  constructor(private _petService: PetService, private _petCommunication: PetCommunicationService, private toastr:ToastrService, private router:Router) { }

  ngOnInit(): void {
    this._petService.getAllPets().subscribe((data: Pet[]) => {
      this.pets = data;
    })
  }

  setDeleteItem(pet: Pet) {
    this.petToDelete = pet;
  }
  // this.toastr.info(`${this.petToDelete.name}'s record removed`,"Successfully deleted")
  deletePet() {
    this._petService.deletePet(this.petToDelete._id).toPromise()
    .then((data) => {if(data.status==204)this.toastr.info(`${this.petToDelete.name}'s record removed`,"Successfully deleted")})
    .then(()=>this.pets=this.pets.filter(item=>item._id!=this.petToDelete._id))
    .then(()=>this.petToDelete._id='-1')
    .catch(err=>this.toastr.info(`Record not removed`,"Something went wrong"))
  }

  editPet(pet:Pet){
    this.router.navigate([`pets/edit`]);
    this._petCommunication.updateNewPet({updating:true,data:pet})
  }
  addPet(){
    this.router.navigate([`pets/addnew`]);
    this._petCommunication.updateNewPet({updating:false,data:{}})
  }


}
