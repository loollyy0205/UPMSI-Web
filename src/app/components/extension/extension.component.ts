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
    {path: "https://dc729.4shared.com/img/OoxzdrzLea/s24/179b15df760/gallery-04?async&rand=0.8173222550982155", name: `Ed-Gomez-through-the-years`},
    {path: "https://dc729.4shared.com/img/7kXWJlFnea/s24/179b15deba8/gallery-03?async&rand=0.12875335433782564", name: `BML-visit-of-chancellor-Tan-&-party-Jan-2016`},
    {path: "https://dc585.4shared.com/img/aFtchGtwea/s24/179b15e0ed0/gallery-05?async&rand=0.5433471774763841", name: `benham-rise-oceanographic-cruise`},
    {path: "https://dc585.4shared.com/img/OVlmm-L3iq/s24/179b15ddc08/gallery-02?async&rand=0.9382601495414822", name: `UP-MPRO-visit-to-BML`},
    {path: "https://dc585.4shared.com/img/g5XYVRFqiq/s24/179b15dd050/gallery-01?async&rand=0.7337152364772384", name: `PH-rise-oceanographic-cruise`},
    {path: "https://dc729.4shared.com/img/_V2c6OdJiq/s24/179b15e1e70/gallery-06?async&rand=0.08288649428304029", name: `WPS`},
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
