import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  images = [
    {path: "https://res.cloudinary.com/upmsi/image/upload/v1627981759/Extension/gallery-04_z6hi61.png", name: `Ed-Gomez-through-the-years`},
    {path: "https://res.cloudinary.com/upmsi/image/upload/v1627981728/Extension/gallery-03_mrvsyp.png", name: `BML-visit-of-chancellor-Tan-&-party-Jan-2016`},
    {path: "https://res.cloudinary.com/upmsi/image/upload/v1627981742/Extension/gallery-05_g43sx6.png", name: `benham-rise-oceanographic-cruise`},
    {path: "https://res.cloudinary.com/upmsi/image/upload/v1627981764/Extension/gallery-02_fpk8jp.png", name: `UP-MPRO-visit-to-BML`},
    {path: "https://res.cloudinary.com/upmsi/image/upload/v1627981754/Extension/gallery-01_wvd6ds.png", name: `PH-rise-oceanographic-cruise`},
    {path: "https://res.cloudinary.com/upmsi/image/upload/v1627981760/Extension/gallery-06_khqgo9.png", name: `WPS`},
  ];


  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplaySpeed: 3500,
    dotsSpeed: 1000,
    autoplayTimeout: 4000,
    autoplay: true,
    items: 1,
    autoHeight: false,
  }

  galleryPage(urlName){
    this.router.navigate(['/Extension/gallery/', urlName])
  }
}
