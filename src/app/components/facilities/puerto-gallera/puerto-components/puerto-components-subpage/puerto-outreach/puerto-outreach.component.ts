import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puerto-outreach',
  templateUrl: './puerto-outreach.component.html',
  styleUrls: ['./puerto-outreach.component.css']
})
export class PuertoOutreachComponent implements OnInit {

  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;

  isReadMore = true
  isReadMore2 = true

  constructor() { }

  ngOnInit(): void {
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  showText2() {
    this.isReadMore2 = !this.isReadMore2;
  }


}
