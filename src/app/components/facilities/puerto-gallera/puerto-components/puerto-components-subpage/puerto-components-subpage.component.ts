import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puerto-components-subpage',
  templateUrl: './puerto-components-subpage.component.html',
  styleUrls: ['./puerto-components-subpage.component.css']
})
export class PuertoComponentsSubpageComponent implements OnInit {

  isReadMore = true
  isReadMore2 = true
  isReadMore3 = true
  isReadMore4 = true
  isReadMore5 = true

  constructor(private router:Router) { }

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

  gotoBML(){
    this.router.navigate(['/Facilities/puerto-galera-station']);
  }
}
