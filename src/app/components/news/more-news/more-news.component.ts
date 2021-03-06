import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css']
})
export class MoreNewsComponent implements OnInit {
  news=[
    {image: "https://dc585.4shared.com/img/6gvZfJ_fea/s24/179b1eea670/News-01-scientist?async&rand=0.22673633825554562", subtitle: 'April 30, 2021', title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made...'},
    {image: "https://dc585.4shared.com/img/fTDppHwOiq/s24/179b1eeaa58/News-02-awards?async&rand=0.5250163112703308", subtitle: 'April 30, 2021', title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center...'},
    {image: "https://dc349.4shared.com/img/Pc3HKlRniq/s24/179b1eeb228/News-03-clams?async&rand=0.6186946789066841", subtitle: 'April 30, 2021', title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery...'},
    {image: "https://dc349.4shared.com/img/0HKY7wFdea/s24/179b1eed168/News-04-narfleet?async&rand=0.43578058087384264", subtitle: 'April 30, 2021', title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the...'},
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
