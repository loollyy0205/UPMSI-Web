import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ship-assets',
  templateUrl: './ship-assets.component.html',
  styleUrls: ['./ship-assets.component.css']
})
export class ShipAssetsComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

}
