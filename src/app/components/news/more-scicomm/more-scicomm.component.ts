import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-scicomm',
  templateUrl: './more-scicomm.component.html',
  styleUrls: ['./more-scicomm.component.css']
})
export class MoreScicommComponent implements OnInit {
  news=[

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1644400743/News/Features/kig/thumbnail-1_lwwpci.png",  title: "The First Of Many: UP MSI’s Most Important Expedition Yet", content: 'A new year of Science is to be kicked off with the UP Marine Science Institute’s (UP MSI) first research expedition to Pag-asa...'},

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1643598465/News/Features/alan/Banner_Mobile_rsorle.png",  title: "Lights Off: How does light pollution affect a coral’s little inhabitants?", content: ' Good bacteria roam the human skin freely, forming an additional protective layer against pathogens. They make up a part  of the human microbiota...'},

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1635907412/News/Features/HABS/Bloom_of_diatoms_jamqyb.jpg",  title: "In Full Bloom: Predicting HAB events using A.I.", content: 'When the monsoon winds take over and the conditions are right, algae can multiply like crazy. In their recently published collaborative work, Dr. Aletta Yñiguez and Ms. Zheina Ottong...'},
    
     {image: "https://res.cloudinary.com/upmsi/image/upload/v1632297254/News/Features/charlon/banner-thumbnail_xibgye.png",  title: "Underwater Cities: Studying coral propagation to rehabilitate coral communities", content: 'We often revere outer space as an expanse of wonder and mystery and look up at the...'},

     {image: "https://res.cloudinary.com/upmsi/image/upload/v1628066287/News/Features/01-final-header_hjud3l.png",  title: "Against the Current: How the giant clams of the Philippines escaped extinction with the help of science and the community", content: 'The boundaries of science, including the...'},


/** 

    {image: "https://dc585.4shared.com/img/fTDppHwOiq/s24/179b1eeaa58/News-02-awards?async&rand=0.5250163112703308", subtitle: 'April 30, 2021', title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center...'},
    {image: "https://dc349.4shared.com/img/Pc3HKlRniq/s24/179b1eeb228/News-03-clams?async&rand=0.6186946789066841", subtitle: 'April 30, 2021', title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery...'},
    {image: "https://dc349.4shared.com/img/0HKY7wFdea/s24/179b1eed168/News-04-narfleet?async&rand=0.43578058087384264", subtitle: 'April 30, 2021', title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the...'},
    */ 
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
        this.router.navigate(['/News/alan', 'lights-off']);
        break;
    case 2:
        this.router.navigate(['/News/scicomm/', 'In-Full-Bloom']);
        break;
    case 3:
        this.router.navigate(['/News/scicomm', 'coral-propagation']);
        break;
    case 4:
        this.router.navigate(['/News/scicomm', 'against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-communityIn-Full-Bloom']);
        break;
              
  /**   
 case 3:
        this.router.navigate(['/News/scicomm', 'NARFleet-is-on-its-way-to-prowl-Philippine-waters']);
        break;
        */
    }

  }

}
