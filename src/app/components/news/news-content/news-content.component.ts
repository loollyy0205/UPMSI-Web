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
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.', url: 'wps-expeditions'},
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
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1646876270/News/News%20Icons/webinar/final-banner_poz48i.png", title: "The Case For Marine Scientific Research in the Philippines", content: 'Experts discussed challenges and opportunities in the approval process and framework for marine scientific research (MSR)...', url: 'The-Case-For-Marine-Scientific-Research'},
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
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
     {image: "https://res.cloudinary.com/upmsi/image/upload/v1646876270/News/News%20Icons/webinar/final-banner_poz48i.png", title: "The Case For Marine Scientific Research in the Philippines", content: 'Experts discussed challenges and opportunities in the approval process and framework for marine scientific research (MSR)...', url: 'The-Case-For-Marine-Scientific-Research'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.', url: 'wps-expeditions'},
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
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.', url: 'wps-expeditions'},
      ]
   }];

   wps = [{
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628650267/News/wps-1_advztg.jpg',
    photoContent: 'The West Philippine Sea (WPS) is home to rich ecosystems that provide valuable resources to the country. With its remarkable biodiversity, it also serves as a research frontier in marine science.',
    locationContent: '',
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1646876270/News/News%20Icons/webinar/final-banner_poz48i.png", title: "The Case For Marine Scientific Research in the Philippines", content: 'Experts discussed challenges and opportunities in the approval process and framework for marine scientific research (MSR)...', url: 'The-Case-For-Marine-Scientific-Research'},
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

     news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
     {image: "https://res.cloudinary.com/upmsi/image/upload/v1646876270/News/News%20Icons/webinar/final-banner_poz48i.png", title: "The Case For Marine Scientific Research in the Philippines", content: 'Experts discussed challenges and opportunities in the approval process and framework for marine scientific research (MSR)...', url: 'The-Case-For-Marine-Scientific-Research'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.', url: 'wps-expeditions'},
      ]
  }];

  merf = [{
    title: 'UP MSI, MERF host short courses on skills development for Philippine Coast Guard',
    date: 'November 24, 2021',
    author: 'By. Mia N. Judicpa & Gabrielle A. Abrahan, MSI Contributors',
    location: 'Quezon City, Philippines',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png',
    thumbnail2: 'https://res.cloudinary.com/upmsi/image/upload/v1637799737/News/News%20Icons/merf/diving-course_rluw7l.jpg',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1637799743/News/News%20Icons/merf/diving-course-2_ihobg5.jpg',
    thumbnail4: 'https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/manta-tow_okzqjx.jpg',
    thumbnail5: 'https://res.cloudinary.com/upmsi/image/upload/v1637799748/News/News%20Icons/merf/closing-photo_zrnryr.png',
    photoContent: '',
    courtesy: '',
  
    paragraph7: 'Researchers and professors from UP MSI gave in-depth lectures and held exercises on water quality monitoring; aerial, surface, and underwater data gathering techniques for coastal and ocean resources; and the valuation process from an actual case of local coral damage.',
    paragraph8: 'Day 1 tackled phytoplankton, their importance as primary producers, and the threats they face from climate change and (micro)plastics pollution. Ms. Erika Grace Gernato, a researcher, discussed the methods involved in phytoplankton monitoring, such as the plankton net, microscopic imaging, and plankton identification. Her lecture was complemented by Ms. Norchel Gomez’s discussion on plastics monitoring and how it can help us address and mitigate pollution.',
    paragraph9: 'Water quality monitoring was the focus of Day 2. Marine chemist Dr. Charissa Ferrera shared her expertise on measuring different parameters related to water quality, including how to use the Conductivity Temperature and Pressure (CTD) system, Acoustic Doppler Current Profiler (ADCP), and multiparameter sensor.',
    paragraph10: 'A total of 58 participants joined the workshop.',
    paragraph11: 'A total of 58 participants joined the workshop.',



    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1646876270/News/News%20Icons/webinar/final-banner_poz48i.png", title: "The Case For Marine Scientific Research in the Philippines", content: 'Experts discussed challenges and opportunities in the approval process and framework for marine scientific research (MSR)...', url: 'The-Case-For-Marine-Scientific-Research'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1630638350/News/Features/pirs/01-header_y6d9oj.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.', url: 'wps-expeditions'},
      ]
   }];

    web = [{
    title: 'The Case For Marine Scientific Research in the Philippines',
    date: 'March 10, 2022',
    author: 'By Gabrielle Abrahan & Mia Judicpa , MSI Contributor',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1646965737/News/News%20Icons/webinar/final-banner-3_s9fwux.png',
    thumbnail2: 'https://res.cloudinary.com/upmsi/image/upload/v1646876267/News/News%20Icons/webinar/1_ayf48v.jpg',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1646876307/News/News%20Icons/webinar/P4280281_bbqgaf.jpg',
    thumbnail4: 'https://res.cloudinary.com/upmsi/image/upload/v1646965798/News/News%20Icons/webinar/poster-2_zorsj1.png',
    photoContent: '',
    /**
    edited the photocontent
    */

    courtesy: '',
    location: '',
    locationContent: '',
    paragraph1: '',
    paragraph2: ``,
    paragraph3: ` `,
    paragraph4: '',
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1637799742/News/News%20Icons/merf/banner-final_cni12e.png", title: "UP MSI, MERF host short courses on skills development for Philippine Coast Guard", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1630638350/News/Features/pirs/01-header_y6d9oj.png", title: "A Revived Pag-asa Island Research Station Strengthens Philippine Marine Scientific Research in the West Philippine Sea", content: 'Years of neglect have led to the facility becoming run-down. The Upgrade CIA program...', url: 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628493886/News/wps_wypn1r.png", title: "UP MSI WPS expeditions 2021", content: 'Learn more about the latest explorations of the blue planet deep under our very own seas.', url: 'wps-expeditions'},
      ]
  }];




  myArr = [];
  nastBool:boolean = true;
  clamsBool:boolean = false;
  wpsBool:boolean = false;
  narfleetBool:boolean = false;
  pirsBool:boolean = false;
  merfBool:boolean = false;
  webBool:boolean =  false;

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
    if(this.router.url.includes('/News/content/UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard')){
      this.myArr = this.merf;
      this.merfBool = true;
    }
    if(this.router.url.includes('/News/content/The-Case-For-Marine-Scientific-Research')){
      this.myArr = this.web;
      this.webBool = true;

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
