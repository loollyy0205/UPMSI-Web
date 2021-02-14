import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  hoverAbout:boolean = false;
  hoverNews:boolean = false;
  hoverAcademics:boolean = false;
  hoverResearch:boolean = false;
  hoverFacilities:boolean = false;
  hoverExtension:boolean = false;
  hoverResources:boolean = false;

  home:boolean = false;
  about:boolean = false;
  education:boolean = false;
  research:boolean = false;
  facilities:boolean = false;
  extension:boolean = false;
  resources:boolean = false;
  contact:boolean = false;
  news:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/About'){
      this.about = true;
    }else if(this.router.url === '/Education'){
      this.education = true;
    }else if(this.router.url === '/Research'){
      this.research = true;
    }else if(this.router.url === '/Extension'){
      this.extension = true;
    }else if(this.router.url === '/Contact'){
      this.contact = true;
    }else if(this.router.url === '/News'){
      this.news = true;
    }else if(this.router.url === '/Home'){
      this.home = true;
    }else if(this.router.url === '/Resources'){
      this.resources = true;
    }
  }

}
