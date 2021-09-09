import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-content',
  templateUrl: './news-content.component.html',
  styleUrls: ['./news-content.component.css']
})
export class NewsContentComponent implements OnInit {
  deepestSpot = [{
    title: 'Filipino scientist makes history by reaching the 3rd deepest spot on Earth',
    date: 'Updated April 30, 2021',
    author: 'By Mia Judicpa, MSI Contributor',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147196/News/News%20Icons/News-01-scientist_pshtv5.png',
    photoContent: 'Filipino scientist Dr. Deo Florence L. Onda from the University of the Philippines is one of the first humans to reach the third deepest spot on Earth.',
    /**
    edited the photocontent
    */

    courtesy: 'PHOTO COURTESY OF Caladan Oceanic',
    location: 'Emden Deep, Philippines',
    locationContent: 'Few have been brave enough to venture the depths of the oceans. Diving ten kilometers below sea level may not have required as much funding as the 1969 moon landing did, but it is worthy of just as much credit.',
    paragraph1: 'The Emden Deep point of the Philippine trench has a depth of 10,540 meters. Compared to the tallest man-made structure, the Burj Khalifa (830 m), or the highest peak on earth, Mt. Everest (8,849 m), the Emden Deep is of much larger scale.',
    paragraph2: `Last year, Dr. Deo Florence L. Onda, a microbial oceanographer from the UP Marine Science Institute (UPMSI), was invited to the Emden Deep by private travel company Eyos Expeditions. Caladan Oceanic, a prolific organization focused on undersea technology and expeditions, has been organizing a dive in the Emden Deep and chose Dr. Onda's name out of a list of prospective Filipinos. The invitation included diving alongside Mr. Victor Vescovo, undersea explorer and founder of Caladan Oceanic, in the US$48 million DSV Limiting Factor.`,
    paragraph3: `The expedition ran from March 22 to 28 aboard the research-oriented vessel DSSV Pressure Drop. The descent itself took place on March 23rd and spanned ten hours, which Dr. Onda claims to have prepared for by watching videos of ocean explorations, attuning himself to enclosed environments, and making sure that he was always prepared for the worst.Last year, Dr. Deo Florence L. Onda, a microbial oceanographer from the UP Marine Science Institute (UPMSI), was invited to the Emden Deep by private travel company Eyos Expeditions. Caladan Oceanic, a prolific organization focused on undersea technology and expeditions, has been organizing a dive in the Emden Deep and chose Dr. Onda's name out of a list of prospective Filipinos. The invitation included diving alongside Mr. Victor Vescovo, undersea explorer and founder of Caladan Oceanic, in the US$48 million DSV Limiting Factor.`,
    paragraph4: 'Dr. Onda leads the Microbial Oceanography Laboratory of the UPMSI. His research gives insight on the role of microbial communities in events that take place in the ocean. The Emden Deep expedition has given him the opportunity to further emphasize the importance of scientific research in policy-making and marine preservation.',
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-02-awards_fiqdzh.png", title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).', url: 'UPMSI-scientists-receive-accolades-from-NAST'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147225/News/News%20Icons/News-03-clams_yczwfs.png", title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery and ocean nursery.', url: 'all-about-the-giant-clam'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-04-narfleet_g3lebs.png", title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the academe and the Philippine government.', url: 'NARFleet-is-on-its-way-to-prowl-Philippine-waters'},
      ]
  }];

  NAST = [{
    title: 'UPMSI scientists receive accolades from NAST, OMLC',
    date: 'Updated April 30, 2021',
    author: 'By Mia Judicpa, MSI Contributor',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-02-awards_fiqdzh.png',
    courtesy: 'PHOTO COURTESY OF Dr. Michael Y. Roleda',
    location: 'Quezon City, Philippines',
    locationContent: 'Four scientists from the UPMSI have been recognized for their work by the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OML Center) and the National Academy of Science and Technology (NAST).',
    /**
    edited the (OMLC) to (OML Center)
    */


    paragraph1: 'Dr. Laura T. David is the first recipient of the Climate Frontiers Fellowship for Climate Resilience for the contributions of her academic and research work to address the threat of climate change.',

    paragraph3: `Another NAST-recognized scientist is Dr. Wilfred John E. Santianez, who was a finalist in the 2020 NAST Talent Search for Young Scientists. There he presented his study, “Untangling nets: elucidating the diversity and phylogeny of the clathrate brown algal genus Hydroclathrus, with the description of a new genus Tronoella (Scytosiphonaceae, Phaeophyceae).”`,
    paragraph4: 'The UPMSI congratulates these scientists for their continued contributions to Philippine marine and coastal science.',
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147196/News/News%20Icons/News-01-scientist_pshtv5.png", title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147225/News/News%20Icons/News-03-clams_yczwfs.png", title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery and ocean nursery.', url: 'all-about-the-giant-clam'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-04-narfleet_g3lebs.png", title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the academe and the Philippine government.', url: 'NARFleet-is-on-its-way-to-prowl-Philippine-waters'},
      ]
  }];

  clams = [{
    title: 'All About the Giant Clams',
    date: 'Updated April 30, 2021',
    author: 'By Gabrielle Abrahan, MSI Contributor',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147225/News/News%20Icons/News-03-clams_yczwfs.png',
    gclambool: true,
    courtesy: 'PHOTO COURTESY OF UP-MPRO',
    location: 'Bolinao, Pangasinan',
    // locationContent: 'More commonly known as "taklobo" in Filipino, giant clams (Tridacna Gigas) with electric green, brown, and violet colors that are impossible to miss are being grown in the waters surrounding Silaqui Island, the northernmost tip of the town of Bolinao, Pangasinan.',
    paragraph1: 'Thousands of these giant clams are being grown—with juveniles released in the reef to grow into adulthood after spending five months in the hatchery at the Bolinao Marine Laboratory (BML) of the University of the Philippines Marine Science Institute (UPMSI).',

    paragraph3: `With only a few breeders from larvae and juveniles that were imported from the Solomon Islands and Australia in 1987, the laboratory was able to cultivate 35,648 adults and 11,209 juveniles. Currently, it is the largest giant clam nursery in the Philippines with 8 species out of 11 found in the country.`,
    paragraph4: 'Over 200,000 giant clams, which came from Bolinao are now growing in more than 70 sites nationwide, making this project a very successful conservation effort that saves the giant clams from possible extinction.',
    paragraph5: 'While there is growing support for the movement, giant clams are still vulnerable and remain endangered due to poor management, unregulated harvesting, and illegal possession and trade.',
    paragraph6: `To curb this, UPMSI-BML has spearheaded 'Adopt a Clam' campaigns to help protect giant clams by raising funds, while raising awareness to the public on the need to preserve them and their importance to marine life as well as the whole ecosystem.`,
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147196/News/News%20Icons/News-01-scientist_pshtv5.png", title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-02-awards_fiqdzh.png", title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).', url: 'UPMSI-scientists-receive-accolades-from-NAST'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-04-narfleet_g3lebs.png", title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the academe and the Philippine government.', url: 'NARFleet-is-on-its-way-to-prowl-Philippine-waters'},
      ]
  }];

  narfleet = [{
    title: 'NARFleet is on its way to prowl Philippine waters',
    date: 'Updated September 7, 2021',
    author: 'By. Mia N. Judicpa & Gabrielle A. Abrahan, MSI Contributors',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1630983200/News/News%20Icons/Panata-GeoOce_pa7p4n.png',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1630898764/News/News%20Icons/Narfleet_vessels_vzdtip.png',
    photoContent: '',
    courtesy: 'PHOTO COURTESY OF GeoOce Media',
    location: 'Diliman, Quezon City, PH',
    enarfleetbool: true,
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147196/News/News%20Icons/News-01-scientist_pshtv5.png", title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-02-awards_fiqdzh.png", title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).', url: 'UPMSI-scientists-receive-accolades-from-NAST'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147225/News/News%20Icons/News-03-clams_yczwfs.png", title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery and ocean nursery.', url: 'all-about-the-giant-clam'},
      ]
   }];

   wps = [{
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628650267/News/wps-1_advztg.jpg',
    photoContent: 'The West Philippine Sea (WPS) is home to rich ecosystems that provide valuable resources to the country. With its remarkable biodiversity, it also serves as a research frontier in marine science.',
    locationContent: '',
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147196/News/News%20Icons/News-01-scientist_pshtv5.png", title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147198/News/News%20Icons/News-02-awards_fiqdzh.png", title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).', url: 'UPMSI-scientists-receive-accolades-from-NAST'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147225/News/News%20Icons/News-03-clams_yczwfs.png", title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery and ocean nursery.', url: 'all-about-the-giant-clam'},
      ]
   }];

   pirs = [{
    title: 'A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea',
    author: 'By Gabrielle A. Abrahan & Mia N. Judicpa, MSI Contributors',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1630638350/News/Features/pirs/01-header_y6d9oj.png',
    thumbnail1: 'https://res.cloudinary.com/upmsi/image/upload/v1630638385/News/Features/pirs/Mrose_mmzjdx.png',
    thumbnail2: 'https://res.cloudinary.com/upmsi/image/upload/v1630638392/News/Features/pirs/sir-ando_zrd37x.png',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1630638768/News/Features/pirs/marine-life-in-pagasa_esfbwv.png',
    thumbnail4: 'https://res.cloudinary.com/upmsi/image/upload/v1630638776/News/Features/pirs/sustainability_l5wob9.png',
    thumbnail5: 'https://res.cloudinary.com/upmsi/image/upload/v1630742676/News/Features/pirs/kalayaan-lab_2_gdhovk.jpg',
    photoContent: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program has extensive plans for its restoration, which will be rolling out in phases.',
    courtesy: 'PHOTO COURTESY OF GeoOce Media',

    locationContent: '',
    paragraph1: '',
    paragraph2: ``,
    paragraph3: ``,
    paragraph4: '',
  }];



  myArr = [];
  nastBool:boolean = true;
  clamsBool:boolean = false;
  wpsBool:boolean = false;
  narfleetBool:boolean = false;
  pirsBool:boolean = false;


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
    
    if(this.router.url.includes('/News/content/filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth')){
      this.myArr = this.deepestSpot;
      }
    if(this.router.url.includes('/News/content/UPMSI-scientists-receive-accolades-from-NAST')){
      this.myArr = this.NAST;
      this.nastBool = false;
      }
    if(this.router.url.includes('/News/content/all-about-the-giant-clam')){
      this.myArr = this.clams;
      this.clamsBool = true;
      }
    if(this.router.url.includes('/News/content/NARFleet-is-on-its-way-to-prowl-Philippine-waters')){
      this.myArr = this.narfleet;
      }
    if(this.router.url.includes('/News/content/wps-expeditions')){
      this.myArr = this.wps;
      this.wpsBool = true;
      }
     if(this.router.url.includes('/News/content/A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea')){
      this.myArr = this.pirs;
      this.pirsBool = true;
    }
  }

  moreMsiNews(){
    this.router.navigate(['/News/news-headlines']);
  }

  nextNews(url:string){
    this.router.navigate(['/News/content/', url]).then(() => {
      window.location.reload();
    });;
  }
}
