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
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery-04.png?alt=media&token=87b5acca-21a7-4f1c-a2db-52a4e81a25ed", name: `Ed-Gomez-through-the-years`},
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery-03.png?alt=media&token=97fee6dc-de64-4004-988f-0b0b3b1e346a", name: `BML-visit-of-chancellor-Tan-&-party-Jan-2016`},
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery-05.png?alt=media&token=bc0de9e8-d4db-4b69-9316-1c425ac89dd7", name: `benham-rise-oceanographic-cruise`},
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery-02.png?alt=media&token=38d70fdd-0b83-4c0c-a990-cdc781e8a53e", name: `UP-MPRO-visit-to-BML`},
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery-01.png?alt=media&token=11ae79e8-8152-4d76-8eb2-f2a19e3deb72", name: `PH-rise-oceanographic-cruise`},
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2Fgallery-06.png?alt=media&token=21447894-3b7e-4ac0-b97e-9dcf1e4db28a", name: `WPS`},
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
