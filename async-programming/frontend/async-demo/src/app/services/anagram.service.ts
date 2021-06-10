import { BasicResult } from '../basic-result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnagramService {

  constructor(private http: HttpClient) {

  }

  checkAnagram(firstWord: string, secondWord: string) {
    let data: any = { "inputs": [firstWord, secondWord] }
    const apiURL:string="http://localhost:3000/anagram";
    let headers = new HttpHeaders().set('access-control-allow-origin', "*");
    return this.http.post(apiURL, data, { headers }).toPromise()

  }
}
 