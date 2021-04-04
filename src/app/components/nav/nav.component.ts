import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  header_variable:boolean = false;

  hoverAbout:boolean = false;
  hoverNews:boolean = false;
  hoverAcademics:boolean = false;
  hoverResearch:boolean = false;
  hoverFacilities:boolean = false;
  hoverExtension:boolean = false;
  hoverResources:boolean = false;

  home:boolean = false;
  about:boolean = false;
  facultyHr:boolean = false;
  education:boolean = false;
  research:boolean = false;
  facilities:boolean = false;
  extension:boolean = false;
  resources:boolean = false;
  contact:boolean = false;
  news:boolean = false;

  bml:boolean = false;
  constructor(private router:Router) { }

  // @HostListener("document:scroll")
  // scrollfunction(){
  //   if(document.body.scrollTop > 0 || document.documentElement.scrollTop > 0){
  //     this.header_variable = true;
  //   }
  //   else{
  //     this.header_variable = false;
  //   }
  // }

  ngOnInit(): void {
    if(this.router.url === '/About'){
      this.about = true;
    }else if(this.router.url === '/About/About-the-director'){
      this.about = true;
    }else if(this.router.url === '/About/faculty'){
      this.about = true;
      this.facultyHr = true;
    }else if(this.router.url === '/About/admin'){
      this.about = true;
    }else if(this.router.url === '/Academics'){
      this.education = true;
    }else if(this.router.url === '/Academics/courses-offered'){
      this.education = true;
    }else if(this.router.url === '/Research'){
      this.research = true;
    }else if(this.router.url === '/Research/areas-of-research'){
      this.research = true;
    }else if(this.router.url === '/Research/laboratories'){
      this.research = true;
    }else if(this.router.url === '/Research/laboratories/biological-oceanography-and-modeling-of-ecosystem-laboratory'){
      this.research = true;
    }else if(this.router.url === '/Facilities'){
      this.facilities = true;
    }else if(this.router.url === '/Facilities/bolinao-marine-lab'){
      this.facilities = true;
      this.bml = true;
    }else if(this.router.url === '/Extension'){
      this.extension = true;
    }else if(this.router.url === '/Extension/gallery'){
      this.extension = true;
    }else if(this.router.url === 'Extension/gallery/images'){
      this.extension = true;
    }else if(this.router.url === '/Contact'){
      this.contact = true;
    }else if(this.router.url === '/News'){
      this.news = true;
    }else if(this.router.url === '/News/content'){
      this.news = true;
    }else if(this.router.url === '/News/Announcement'){
      this.news = true;
    }else if(this.router.url === '/News/Research-projects-and-highlights'){
      this.news = true;
    }else if(this.router.url === '/News/Research-projects-and-highlights/content'){
      this.news = true;
    }else if(this.router.url === '/News/Vacancies-and-Opportunities/more'){
      this.news = true;
    }else if(this.router.url === '/News/Vacancies-and-Opportunities'){
      this.news = true;
    }else if(this.router.url === '/Home'){
      this.home = true;
    }else if(this.router.url === '/Resources'){
      this.resources = true;
    }else if(this.router.url === '/Resources/library'){
      this.resources = true;
    }
  }



}
