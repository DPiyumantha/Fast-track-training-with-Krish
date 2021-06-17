
import { PET_API } from './../api/pet.api';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../model/Pet.model';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {
  private petSubject=new BehaviorSubject<any>({updating:false,data:{}});
  petObservable = this.petSubject.asObservable();
  
  headers={
    'access-control-allow-origin': "*"
  }
  requestOptions = {                                                                                                                                                                                 
    headers: new HttpHeaders(this.headers), 
  };
  
  constructor(private http:HttpClient) {}
  getAllPets(){
    return this.http.get<Pet[]>(PET_API+'/pets',this.requestOptions);
  }

  getPetTypes(){
    return this.http.get<string[]>(PET_API+'/pets/types',this.requestOptions);
  }

  getPetById(id:string){
    return this.http.get<Pet>(PET_API+`/pets/${id}`,this.requestOptions);
  }

  createPet(pet:Pet){
    return this.http.post(PET_API+'/pets',pet,this.requestOptions);
  }

  updatePet(pet:Pet){
    return this.http.patch(PET_API+'/pets/'+pet._id,pet,this.requestOptions)
  }

  deletePet(id:string){
    return this.http.delete(PET_API+`/pets/${id}`,this.requestOptions)
  }

  updateNewPet(obj:any){
this.petSubject.next(obj)
  }

  

}
