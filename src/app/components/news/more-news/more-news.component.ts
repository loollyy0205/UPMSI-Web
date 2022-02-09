import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css']
})
export class MoreNewsComponent implements OnInit {
  news=[

    {image: "https://res.cloudinary.com/upmsi/image/upload/v1644400743/News/Features/kig/thumbnail-1_lwwpci.png",  title: "The First Of Many: UP MSI’s Most Important Expedition Yet", content: 'A new year of Science is to be kicked off with the UP Marine Science Institute’s (UP MSI) first research expedition to Pag-asa...'},

    {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png",  title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'The UP Marine Science Institute (UP MSI) and the Marine Environment and Resources Foundation, Inc....'},

    {image: "https://res.cloudinary.com/upmsi/image/upload/v1630638350/News/Features/pirs/01-header_y6d9oj.png",  title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...'},

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.'},

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1630983200/News/News%20Icons/Panata-GeoOce_pa7p4n.png", subtitle: 'September 7, 2021', title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first Expeditions. The program aims to provide better access to ocean research for both the...'},

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147225/News/News%20Icons/News-03-clams_yczwfs.png", subtitle: 'April 30, 2021', title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery...'},

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-02-awards_fiqdzh.png", subtitle: 'April 30, 2021', title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center...'},

    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147196/News/News%20Icons/News-01-scientist_pshtv5.png", subtitle: 'April 30, 2021', title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made...'},
    
    
   
    
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/scicomm', 'The-First-Of-Many']);
        break;
      case 1:
        this.router.navigate(['/News/content', 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard']);
        break;
      case 2:
        this.router.navigate(['/News/content', 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea']);
        break;
      case 3:
        this.router.navigate(['/News/content', 'wps-expeditions']);
        break;
      case 4:
        this.router.navigate(['/News/content', 'NARFleet-is-on-its-way-to-prowl-Philippine-waters']);
        break;
       case 5:
        this.router.navigate(['/News/content', 'all-about-the-giant-clam']);
        break; 
      case 6:
        this.router.navigate(['/News/content', 'UPMSI-scientists-receive-accolades-from-NAST']);
        break;
      case 7:
        this.router.navigate(['/News/content', 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth']);
        break;
    }

  }

}
