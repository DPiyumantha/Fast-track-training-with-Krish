import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetCommunicationService {
  private petSubject = new BehaviorSubject<any>({ updating: false, data: {} });
  petObservable = this.petSubject.asObservable();
  constructor() { }


  updateNewPet(obj: any) {
    this.petSubject.next(obj)
  }
}
