import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  margin:number = -150;

  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth <= 1445 && this.innerWidth >= 768) {
    this.margin = -150;
  } else if (this.innerWidth <= 1665 && this.innerWidth >= 1446) {
    this.margin = -190;
  }else if (this.innerWidth <= 1865 && this.innerWidth >= 1666) {
    this.margin = -230;
  }else if (this.innerWidth <= 2065 && this.innerWidth >= 1866) {
    this.margin = -270;
  }else if (this.innerWidth <= 2265 && this.innerWidth >= 2066) {
    this.margin = -310;
  }else if (this.innerWidth <= 2465 && this.innerWidth >= 2266) {
    this.margin = -350;
  }else if (this.innerWidth <= 2665 && this.innerWidth >= 2466) {
    this.margin = -390;
  }else if (this.innerWidth <= 2865 && this.innerWidth >= 2560) {
    this.margin = -430;
  }
}

  images = [
    {path: "../../../assets/photos/turtle.jpg"},
    {path: "../../../assets/photos/news1.jpeg"},
    {path: "../../../assets/photos/extension.jpg"},
    {path: "../../../assets/photos/resources.jpg"},
  ];

  publication = [
    {title: 'Call for Abstracts: HAB Symposium Conference', date: 'Published: Dec. 15, 2020', content: 'The Marine Science Institute, College of Science, University of the Philippines Diliman, invites applications for a full-time tenure-track faculty position.'},
    {title: 'Call for Abstracts: HAB Symposium Conference', date: 'Published: Dec. 15, 2020', content: 'The Marine Science Institute, College of Science, University of the Philippines Diliman, invites applications for a full-time tenure-track faculty position.'},
    {title: 'Call for Abstracts: HAB Symposium Conference', date: 'Published: Dec. 15, 2020', content: 'The Marine Science Institute, College of Science, University of the Philippines Diliman, invites applications for a full-time tenure-track faculty position.'},
    {title: 'Call for Abstracts: HAB Symposium Conference', date: 'Published: Dec. 15, 2020', content: 'The Marine Science Institute, College of Science, University of the Philippines Diliman, invites applications for a full-time tenure-track faculty position.'},
  ]

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

}
