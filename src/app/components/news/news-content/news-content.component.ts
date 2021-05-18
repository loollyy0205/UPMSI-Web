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
    thumbnail: '../../../assets/photos/press-coverage/thumbnail-03.jpg',
    photoContent: 'A Filipino scientist from the University of the Philippines has started his historic descent as one of the first humans to reach the third deepest spot on earth.',
    courtesy: 'PHOTO COURTESY OF ABS-CBN News',
    location: 'Emden Deep, Philippines',
    locationContent: 'Few have been brave enough to venture the depths of the oceans. Diving ten kilometers below sea level may not have required as much funding as the 1969 moon landing did, but it is worthy of just as much credit.',
    paragraph1: 'The Emden Deep point of the Philippine trench has a depth of 10,540 meters. Compared to the tallest man-made structure, the Burj Khalifa (830 m), or the highest peak on earth, Mt. Everest (8,849 m), the Emden Deep is of much larger scale.',
    paragraph2: `Last year, Dr. Deo Florence L. Onda, a microbial oceanographer from the UP Marine Science Institute (UPMSI), was invited to the Emden Deep by private travel company Eyos Expeditions. Caladan Oceanic, a prolific organization focused on undersea technology and expeditions, has been organizing a dive in the Emden Deep and chose Dr. Onda's name out of a list of prospective Filipinos. The invitation included diving alongside Mr. Victor Vescovo, undersea explorer and founder of Caladan Oceanic, in the US$48 million DSV Limiting Factor.`,
    paragraph3: `The expedition ran from March 22 to 28 aboard the research-oriented vessel DSSV Pressure Drop. The descent itself took place on March 23rd and spanned ten hours, which Dr. Onda claims to have prepared for by watching videos of ocean explorations, attuning himself to enclosed environments, and making sure that he was always prepared for the worst.Last year, Dr. Deo Florence L. Onda, a microbial oceanographer from the UP Marine Science Institute (UPMSI), was invited to the Emden Deep by private travel company Eyos Expeditions. Caladan Oceanic, a prolific organization focused on undersea technology and expeditions, has been organizing a dive in the Emden Deep and chose Dr. Onda's name out of a list of prospective Filipinos. The invitation included diving alongside Mr. Victor Vescovo, undersea explorer and founder of Caladan Oceanic, in the US$48 million DSV Limiting Factor.`,
    paragraph4: 'Dr. Onda leads the Microbial Oceanography Laboratory of the UPMSI. His research gives insight on the role of microbial communities in events that take place in the ocean. The Emden Deep expedition has given him the opportunity to further emphasize the importance of scientific research in policy-making and marine preservation.',
    news: [
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-02-awards.png?alt=media&token=b37e6620-360c-4db1-b5df-e7df309df1ed", title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).', url: 'UPMSI-scientists-receive-accolades-from-NAST'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-03-clams.png?alt=media&token=c948a69c-e1e5-4f5e-9232-40b5d4c61a44", title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery and ocean nursery.', url: 'all-about-the-giant-clam'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-04-narfleet.png?alt=media&token=02ecfc68-452c-48cf-9324-83cfdf99ac49", title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the academe and the Philippine government.', url: 'NARFleet-is-on-its-way-to-prowl-Philippine-waters'},
      ]
  }];

  NAST = [{
    title: 'UPMSI scientists receive accolades from NAST, OMLC',
    date: 'Updated April 30, 2021',
    author: 'By Mia Judicpa, MSI Contributor',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-02-awards.png?alt=media&token=b37e6620-360c-4db1-b5df-e7df309df1ed',
    courtesy: 'PHOTO COURTESY OF Dr. Michael Y. Roleda',
    location: 'Quezon City, Philippines',
    locationContent: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).',
    paragraph1: 'Dr. Laura T. David is the first recipient of the Climate Frontiers Fellowship for Climate Resilience for the contributions of her academic and research work to address the threat of climate change.',
    paragraph2: `Dr. Rachel June R. Gotanco was conferred the Eduardo A. Quisumbing Medal for Basic Research alongside co-author Andrew F. Torres during the National Science and Technology Week (NSTW). The award recognizes the study entitled, "Rarity of the 'common' coral Pacillopora damicornis in the western Philippine Archipelago."`,
    paragraph3: `Another NAST-recognized scientist is Dr. Wilfred John E. Santianez, who was a finalist in the 2020 NAST Talent Search for Young Scientists. There he presented his study, “Untangling nets: elucidating the diversity and phylogeny of the clathrate brown algal genus Hydroclathrus, with the description of a new genus Tronoella (Scytosiphonaceae, Phaeophyceae).”`,
    paragraph4: 'The UPMSI congratulates these scientists for their continued contributions to Philippine marine and coastal science.',
    news: [
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-01-scientist.png?alt=media&token=5f120f4e-9976-4e32-9f85-1c4306f17279", title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-03-clams.png?alt=media&token=c948a69c-e1e5-4f5e-9232-40b5d4c61a44", title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery and ocean nursery.', url: 'all-about-the-giant-clam'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-04-narfleet.png?alt=media&token=02ecfc68-452c-48cf-9324-83cfdf99ac49", title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the academe and the Philippine government.', url: 'NARFleet-is-on-its-way-to-prowl-Philippine-waters'},
      ]
  }];

  clams = [{
    title: 'All About the Giant Clams',
    date: 'Updated April 30, 2021',
    author: 'By Gabrielle Abrahan, MSI Contributor',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-03-clams.png?alt=media&token=c948a69c-e1e5-4f5e-9232-40b5d4c61a44',
    photoContent: 'Body text here',
    courtesy: 'PHOTO COURTESY OF ...',
    location: 'Bolinao, Pangasinan',
    locationContent: 'More commonly known as "taklobo" in Filipino, giant clams (Tridacna Gigas) with electric green, brown, and violet colors that are impossible to miss are being grown in the waters surrounding Silaqui Island, the northernmost tip of the town of Bolinao, Pangasinan.',
    paragraph1: 'Thousands of these giant clams are being grown—with juveniles released in the reef to grow into adulthood after spending five months in the hatchery at the Bolinao Marine Laboratory (BML) of the University of the Philippines Marine Science Institute (UPMSI).',
    paragraph2: `Dr. Rachel June R. Gotanco was conferred the Eduardo A. Quisumbing Medal for Basic Research alongside co-author Andrew F. Torres during the National Science and Technology Week (NSTW). The award recognizes the study entitled, "Rarity of the 'common' coral Pacillopora damicornis in the western Philippine Archipelago."`,
    paragraph3: `With only a few breeders from larvae and juveniles that were imported from the Solomon Islands and Australia in 1987, the laboratory was able to cultivate 35,648 adults and 11,209 juveniles. Currently, it is the largest giant clam nursery in the Philippines with 8 species out of 11 found in the country.`,
    paragraph4: 'Over 200,000 giant clams, which came from Bolinao are now growing in more than 70 sites nationwide, making this project a very successful conservation effort that saves the giant clams from possible extinction.',
    paragraph5: 'While there is growing support for the movement, giant clams are still vulnerable and remain endangered due to poor management, unregulated harvesting, and illegal possession and trade.',
    paragraph6: `To curb this, UPMSI-BML has spearheaded 'Adopt a Clam' campaigns to help protect giant clams by raising funds, while raising awareness to the public on the need to preserve them and their importance to marine life as well as the whole ecosystem.`,
    news: [
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-01-scientist.png?alt=media&token=5f120f4e-9976-4e32-9f85-1c4306f17279", title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-02-awards.png?alt=media&token=b37e6620-360c-4db1-b5df-e7df309df1ed", title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).', url: 'UPMSI-scientists-receive-accolades-from-NAST'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-04-narfleet.png?alt=media&token=02ecfc68-452c-48cf-9324-83cfdf99ac49", title: "NARFleet is on its way to prowl Philippine waters", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims to provide better access to ocean research for both the academe and the Philippine government.', url: 'NARFleet-is-on-its-way-to-prowl-Philippine-waters'},
      ]
  }];

  narfleet = [{
    title: 'NARFleet is on its way to prowl Philippine waters',
    date: 'Updated April 30, 2021',
    author: '(author)',
    thumbnail: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-04-narfleet.png?alt=media&token=02ecfc68-452c-48cf-9324-83cfdf99ac49',
    photoContent: 'Body text here',
    courtesy: 'PHOTO COURTESY OF ...',
    location: 'West PH Sea',
    locationContent: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition soon. Established as a response to limited ocean research capacity, the NARFleet program aims to provide better access to ocean research for both the academe and the Philippine government. To achieve this, participating research groups will address problems such as reef protection and productivity, mapping the pelagic zone, and maximizing the use of bio resources. The University of the Philippines Visayas (UPV), Bicol University, and Mindanao State University - Iligan Institute of Technology (MSU-IIT) join the UP Marine Science Institute as collaborators and vessel hosts.',
    news: [
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-01-scientist.png?alt=media&token=5f120f4e-9976-4e32-9f85-1c4306f17279", title: "Filipino scientist makes history by reaching the 3rd deepest spot on Earth", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made history as the second human and the first Filipino to reach Emden Deep, the third deepest spot on earth.', url: 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-02-awards.png?alt=media&token=b37e6620-360c-4db1-b5df-e7df309df1ed", title: "UPMSI scientists receive accolades from NAST, OMLC", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology (NAST) and the Oscar M. Lopez Center for Climate Change Adaptation and Disaster Risk Management Foundation, Inc (OMLC).', url: 'UPMSI-scientists-receive-accolades-from-NAST'},
      {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2FNews-03-clams.png?alt=media&token=c948a69c-e1e5-4f5e-9232-40b5d4c61a44", title: "All About the Giant Clam", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four species at its onshore hatchery and ocean nursery.', url: 'all-about-the-giant-clam'},
      ]
  }];

  myArr = [];
  nastBool:boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/content/filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth':
        this.myArr = this.deepestSpot;
        break;
      case '/News/content/UPMSI-scientists-receive-accolades-from-NAST':
        this.myArr = this.NAST;
        this.nastBool = false;
        break;
      case '/News/content/all-about-the-giant-clam':
        this.myArr = this.clams;
        break;
      case '/News/content/NARFleet-is-on-its-way-to-prowl-Philippine-waters':
        this.myArr = this.narfleet;
        break;
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
