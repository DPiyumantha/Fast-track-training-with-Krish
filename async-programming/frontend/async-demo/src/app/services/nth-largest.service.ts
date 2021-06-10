import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicResult } from '../basic-result';

@Injectable({
  providedIn: 'root'
})
export class NthLargestService {
  constructor(private http: HttpClient) {

  }

  getnthLargest(arr:any[], n: string) {
    let data: any = { "inputs": [arr, n] }
    const apiURL:string="http://localhost:3000/nth-largest";
    let headers = new HttpHeaders().set('access-control-allow-origin', "*");
    return this.http.post(apiURL, data, { headers })

  }
}
