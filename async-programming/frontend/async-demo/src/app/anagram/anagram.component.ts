import { AnagramService } from './../anagram.service';
import { Component, OnInit } from '@angular/core';
import { BasicResult } from '../basic-result';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.scss']
})
export class AnagramComponent implements OnInit {
  result:BasicResult={data:'',error:false,errorMessage:''};
  firstWord:string='';
  secondWord:string='';
  constructor(private anagramService:AnagramService) { }

  ngOnInit(): void {
  }

  checkAnagram(){
    this.anagramService.checkAnagram(this.firstWord,this.secondWord)
  }

}
