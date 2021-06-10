import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicResult } from '../basic-result';

@Injectable({
  providedIn: 'root'
})
export class RepetitionsService {

  constructor(private http: HttpClient) {

  }

  checkAnagram(userInput: string) {
    let data: any = { "inputs":userInput}
    const apiURL:string="http://localhost:3000/repetitions";
    let headers = new HttpHeaders().set('access-control-allow-origin', "*");
    return this.http.post(apiURL, data, { headers }).toPromise()

  }
}
