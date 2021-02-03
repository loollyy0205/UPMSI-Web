import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  about:boolean = false;
  education:boolean = false;
  extension:boolean = false;
  contact:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/About'){
      this.about = true;
    }else if(this.router.url === '/Education'){
      this.education = true;
    }else if(this.router.url === '/Extension'){
      this.extension = true;
    }else if(this.router.url === '/Contact'){
      this.contact = true;
    }
  }

}
