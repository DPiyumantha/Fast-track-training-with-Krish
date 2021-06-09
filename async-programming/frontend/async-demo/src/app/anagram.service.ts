import { BasicResult } from './basic-result';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnagramService {

  constructor(private http: HttpClient) { 
    
  }

  checkAnagram(firstWord:string, secondWord:string){
    let result:BasicResult={data:"",error:false,errorMessage:''};
    let data:any={"inputs":[firstWord,secondWord]}
    console.log("body",data)
    let headers = new HttpHeaders().set('access-control-allow-origin',"http://localhost:8080/");
    this.http.post("http://localhost:3000/anagram",data,{headers}).subscribe(data=>{
    console.log(data)
    })

  }
}
