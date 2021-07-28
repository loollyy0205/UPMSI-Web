import { Component, OnInit, Renderer2, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  screenSize:boolean = false;

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
  constructor(private router:Router,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private _document) { }

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
    const s = this.renderer2.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://cse.google.com/cse.js?cx=a089a9bc77b5ecb6d';
    s.text = ``;
    this.renderer2.appendChild(this._document.body, s);

    if (window.screen.width <= 768) { // 768px portrait
      this.screenSize = true;
    }else if (window.screen.width > 768) { // 768px portrait
      this.screenSize = false;
    }

    if(this.router.url === '/About'){
      this.about = true;
    }else if(this.router.url === '/About/About-the-director'){
      this.about = true;
    }else if(this.router.url === '/About/faculty'){
      this.about = true;
      this.facultyHr = true;
    }else if(this.router.url === '/About/about-msi'){
      this.about = true;
      this.facultyHr = true;
    }else if(this.router.url === '/About/admin'){
      this.about = true;
    }else if(this.router.url.includes('/Academics')){
      this.education = true;
    }else if(this.router.url.includes('/Research')){
      this.research = true;
    }else if(this.router.url === '/Research/laboratories/biological-oceanography-and-modeling-of-ecosystem-laboratory'){
      this.research = true;
    }else if(this.router.url.includes('/Facilities')){
      this.facilities = true;
    }else if(this.router.url.includes('/Extension')){
      this.extension = true;
    }else if(this.router.url === '/Contact'){
      this.contact = true;
    }else if(this.router.url.includes('/News')){
      this.news = true;
    }else if(this.router.url.includes('/News/news-headlines')){
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
    }else if(this.router.url.includes('/Resources')){
      this.resources = true;
    }
  }



}
