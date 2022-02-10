import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scicomm-content',
  templateUrl: './scicomm-content.component.html',
  styleUrls: ['./scicomm-content.component.css']
})
export class ScicommContentComponent implements OnInit {
  giantclam = [{
    title: 'Against the Current: How the giant clams of the Philippines escaped extinction with the help of science and the community',
    author: 'By. Mia N. Judicpa & Gabrielle A. Abrahan, MSI Contributors',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628066287/News/Features/01-final-header_hjud3l.png',
    thumbnail1: 'https://res.cloudinary.com/upmsi/image/upload/v1628071216/News/Features/20160101-GOPR1311_neec9j.jpg',
    thumbnail2: 'https://res.cloudinary.com/upmsi/image/upload/v1628068583/News/Features/20130222-assembly_with_the_Members_sonsjg.jpg',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1628071206/News/Features/20210802-coral_planting_hn5rci.jpg',
    photoContent: 'The boundaries of science, including the limits of who can participate in it, are being pushed every day. In many types of research, citizen scientists play a key role in the data gathering process and are thus deserving of as much recognition as professional scientists garner. But who exactly are citizen scientists, and can you be one of them?',
    courtesy: 'PHOTO COURTESY OF Cantaan Centennial Multi-purpose Cooperative (CCMPC)',

    locationContent: '',
    paragraph1: '',
    paragraph2: ``,
    paragraph3: ``,
    paragraph4: '',
  }];


charlon = [{
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1632802602/News/Features/charlon/Colony_145_-_rapid_sampling-2_krb6md.jpg',
    thumbnail2: 'https://res.cloudinary.com/upmsi/image/upload/v1632803414/News/Features/charlon/Optimized-Charlon_m0qfbc.jpg',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1633077311/News/Features/charlon/For_Web_2x-2_jqbox0.png',
    thumbnail4: 'https://res.cloudinary.com/upmsi/image/upload/v1633077308/News/Features/charlon/for-mobile-2_hufvyo.png',
    
    locationContent: '',
  }];

habs = [{
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1634801080/News/Features/HABS/Bolinao_bloom_discoloration_1_ojv2vj.jpg',
    thumbnail2: 'https://res.cloudinary.com/upmsi/image/upload/v1634808527/News/Features/HABS/website1_a7ye7g.jpg',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1634809763/News/Features/HABS/website3_gxyeka.jpg',
    thumbnail4: 'https://res.cloudinary.com/upmsi/image/upload/v1634801082/News/Features/HABS/Bolinao_fish_cage1_Rica_i3mjvk.jpg',
    thumbnail5: 'https://res.cloudinary.com/upmsi/image/upload/v1635818420/News/Features/HABS/Field_at_Bolinao3_t5hvol.jpg',
    thumbnail6: 'https://res.cloudinary.com/upmsi/image/upload/v1634808843/News/Features/HABS/Aerial_shot_fish_farming_Pangasinan_2016_-_G_Jacinto_tq00il.jpg',
    thumbnail7: 'https://res.cloudinary.com/upmsi/image/upload/v1634800888/News/Features/HABS/Field_at_Bolinao4_ovhxsr.jpg',
    thumbnail8: 'https://res.cloudinary.com/upmsi/image/upload/v1635219142/News/Features/HABS/Bolinao_workshop_with_stakeholders_xpoknn.jpg',
    thumbnail9: 'https://res.cloudinary.com/upmsi/image/upload/v1635219321/News/Features/HABS/fisherman-bolinao_r9sspv.jpg',
    locationContent: '',
  }];

   kig = [{
    title: 'The First of Many: A Research Expedition Beyond Science Going Beyond Science: An Expedition for the People',
    date2: '',
    author: 'By: Gabrielle A. Abrahan & Mia N. Judicpa ',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1644397404/News/Features/kig/20211019_095252_n5sjih.jpg',
    thumbnail1: 'https://res.cloudinary.com/upmsi/image/upload/v1644397359/News/Features/kig/Screen_Shot_2021-11-29_at_11.28.53_AM_w4ytop.jpg',
   


    location: '',
    locationContent: '',
    photoContent: 'The Pag-asa Island Research Station during its soft launch.',
    courtesy: 'PHOTO COURTESY OF Sarahmae Buen',
    paragraph1: `A new year of Science is to be kicked off with the UP Marine Science Institute’s (UP MSI) first research expedition to Pag-asa island in the Kalayaan Island Group (KIG) for 2022.`,
    paragraph2: `Pag-asa island has been envisioned to pilot sustainable small-island living, demonstrating systems and practices guided by science that can be applied in other existing small islands in the country, eventually helping improve their own living conditions sustainably.`,
    paragraph3: `A new milestone for the Pag-asa Island Research Station (PIRS) is the rollout of the long-term stay program during the expedition. Five members of the science crew will be assigned on the island for approximately two to three months, testing the functionality of PIRS, the only marine research station in the entire KIG in the West Philippine Sea (WPS).`,
    paragraph4: 'In line with this, the team will be continuing the refurbishment of PIRS that was done in previous expeditions. Furnishings, such as tables, chairs, shelves, kitchen essentials, and quarters will be installed.',
    paragraph5: 'But more importantly, aside from the scientific research that will be conducted, this expedition will be a homecoming for our marine scientists. For the first time since the onslaught of Typhoon Odette, they will finally be able to visit Pag-asa island.',
    paragraph6: 'As members of the local island community, UP MSI put together a donation drive to extend their help to the people. The priority for the first few days of the expedition is to provide relief and extend assistance, especially to those that need it the most. The plans include the rebuilding of houses and other infrastructure, distribution of food packs, medicine, books, and school supplies.',
    paragraph7: 'At the end of the day, the pursuit of science alone is not enough. It must always be done as an act of service for the people and the environment.',
    paragraph8: 'The UP MSI would like to extend its gratitude to all its partners and private entities who have donated by providing funds to purchase materials or in-kind to help the people of Pag-asa Island.',
    paragraph9: 'For this expedition, the team will be carrying out the next plans for the Initial Repair and Refurbishment of the Pag-asa station (IRARE) project under the Upgrading Capability, Infrastructure and Assets (UPGRADE-CIA) program, which is supported by the National Security Council (NSC). The delegation also includes members from the Department of Environment and Natural Resources - Environmental Management Bureau (DENR - EMB) and National Mapping and Resource Information Authority (NAMRIA). ',

    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.', url: 'wps-expeditions'},
      ]
  }];

   

  myArr = [];
  giantclamBool:boolean = false;
  charlonBool:boolean = false;
  habsBool:boolean = false;
  kigBool:boolean = false;
  
  


  constructor(private router:Router) { }

  ngOnInit(): void {
    // switch(this.router.url) {
    //   case '/News/scicomm/against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community':
    //     this.myArr = this.giantclam;
    //     this.giantclamBool = true;
    //     break;
    // }

    if(this.router.url.includes('/News/scicomm/against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community')){
      this.myArr = this.giantclam;
      this.giantclamBool = true;
    }

  
   if(this.router.url.includes('/News/scicomm/coral-propagation')){
      this.myArr = this.charlon;
      this.charlonBool = true;
    }

    if(this.router.url.includes('/News/scicomm/In-Full-Bloom')){
      this.myArr = this.habs;
      this.habsBool = true;
    }


    if(this.router.url.includes('/News/scicomm/The-First-Of-Many')){
      this.myArr = this.kig;
      this.kigBool = true;
    }
  
   
  }

  moreScicomm(){
    this.router.navigate(['/News/scicomm-headlines']);
  }

  nextNews(url:string){
    this.router.navigate(['/News/scicomm/', url]).then(() => {
      window.location.reload();
    });;
  }
}
