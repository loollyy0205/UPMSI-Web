import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css']
})
export class MoreNewsComponent implements OnInit {
  news=[
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-01-scientist.png?alt=media&token=5f120f4e-9976-4e32-9f85-1c4306f17279", subtitle: 'April 30, 2021', title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made...'},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-02-awards.png?alt=media&token=b37e6620-360c-4db1-b5df-e7df309df1ed", subtitle: 'April 30, 2021', title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center...'},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-03-clams.png?alt=media&token=c948a69c-e1e5-4f5e-9232-40b5d4c61a44", subtitle: 'April 30, 2021', title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery...'},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-04-narfleet.png?alt=media&token=02ecfc68-452c-48cf-9324-83cfdf99ac49", subtitle: 'April 30, 2021', title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the...'},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/content', 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth']);
        break;
      case 1:
        this.router.navigate(['/News/content', 'UPMSI-scientists-receive-accolades-from-NAST']);
        break;
      case 2:
        this.router.navigate(['/News/content', 'all-about-the-giant-clam']);
        break;
      case 3:
        this.router.navigate(['/News/content', 'NARFleet-is-on-its-way-to-prowl-Philippine-waters']);
        break;
    }

  }

}
