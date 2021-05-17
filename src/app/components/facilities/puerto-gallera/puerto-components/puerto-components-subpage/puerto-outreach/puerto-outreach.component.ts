import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puerto-outreach',
  templateUrl: './puerto-outreach.component.html',
  styleUrls: ['./puerto-outreach.component.css']
})
export class PuertoOutreachComponent implements OnInit {

  isReadMore = true
  isReadMore2 = true
  isReadMore3 = true
  isReadMore4 = true
  isReadMore5 = true

  constructor() { }

  ngOnInit(): void {
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  showText2() {
    this.isReadMore2 = !this.isReadMore2;
  }

  showText3() {
    this.isReadMore3 = !this.isReadMore3;
  }

  showText4() {
    this.isReadMore4 = !this.isReadMore4;
  }

  showText5() {
    this.isReadMore5 = !this.isReadMore5;
  }


}
