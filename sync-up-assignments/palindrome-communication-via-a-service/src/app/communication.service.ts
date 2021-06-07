import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
private _homeSource = new Subject<string>();
private _textSource = new Subject<string>();

homeSource$ = this._homeSource.asObservable();
textSource$ = this._textSource.asObservable();

  constructor() { }

  changeInput(userInput:string){
    this._textSource.next(userInput)
  }

  displayResult(result:string){
    this._homeSource.next(result)
  }

}
