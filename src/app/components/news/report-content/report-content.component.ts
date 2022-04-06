import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-content',
  templateUrl: './report-content.component.html',
  styleUrls: ['./report-content.component.css']
})
export class ReportContentComponent implements OnInit {
  

   wps = [{
   title: 'The Marine Science Institute: Looking Back on 2019-2021',
    date: 'April 6, 2022',
    author: '',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628650267/News/wps-1_advztg.jpg',
    photoContent: 'The West Philippine Sea (WPS) is home to rich ecosystems that provide valuable resources to the country. With its remarkable biodiversity, it also serves as a research frontier in marine science.',
    locationContent: '',
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1646876270/News/News%20Icons/webinar/final-banner_poz48i.png", title: "The Case For Marine Scientific Research in the Philippines", content: 'Experts discussed challenges and opportunities in the approval process and framework for marine scientific research (MSR)...', url: 'The-Case-For-Marine-Scientific-Research'},
      ]
   }];

   

  


  myArr = [];
 
  wpsBool:boolean = false;
 
  constructor(private router:Router) { }

  ngOnInit(): void {
  /**
    switch(this.router.url.includes) {
      case '/News/content/filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth':
        this.myArr = this.deepestSpot;
        break;
      case '/News/content/UPMSI-scientists-receive-accolades-from-NAST':
        this.myArr = this.NAST;
        this.nastBool = false;
        break;
      case '/News/content/all-about-the-giant-clam':
        this.myArr = this.clams;
        this.clamsBool = true;
        break;
      case '/News/content/NARFleet-is-on-its-way-to-prowl-Philippine-waters':
        this.myArr = this.narfleet;
        this.narfleetBool = true;
        break;
      case '/News/content/wps-expeditions':
        this.myArr = this.wps;
        this.wpsBool = true;
        break;
    }
    */
    
    
    if(this.router.url.includes('/News/report/report-expeditions')){
      this.myArr = this.wps;
      this.wpsBool = true;
      }
  


  }

 
  moreScicomm(){
    this.router.navigate(['/News/scicomm-headlines']);
  }

  nextNews(url:string){
    this.router.navigate(['/News/content/', url]).then(() => {
      window.location.reload();
    });;
  }
}
