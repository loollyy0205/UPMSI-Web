import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gallery-nav',
  templateUrl: './gallery-nav.component.html',
  styleUrls: ['./gallery-nav.component.css']
})
export class GalleryNavComponent implements OnInit {
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

  ngOnInit(): void {
  }

}
