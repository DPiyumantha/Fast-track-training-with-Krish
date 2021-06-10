import { BasicResult } from './../basic-result';
import { AnagramService } from '../services/anagram.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  result:BasicResult={result:'',error:false,errorMessage:''};
  message:string='';
  firstWord:string='';
  secondWord:string='';
  constructor(private anagramService:AnagramService) { }

  ngOnInit(): void {
  }

  async checkAnagram(){
    //Using async / await
    const data:BasicResult=<BasicResult> await this.anagramService.checkAnagram(this.firstWord,this.secondWord);
    this.message=data.result;
    this.result=data;
  }

}
