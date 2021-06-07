import { CommunicationService } from './../communication.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.scss']
})
export class LabelComponent implements OnInit {
result:string='';
  constructor(private _communicationService: CommunicationService) { }

  ngOnInit(): void {
    this._communicationService.homeSource$.subscribe(result=>this.result=result)
  }

}
