import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-content',
  templateUrl: './announcement-content.component.html',
  styleUrls: ['./announcement-content.component.css']
})
export class AnnouncementContentComponent implements OnInit {
  deathAnniv = [{
    title: 'A letter for Dr. Ed Gomez on his first death anniversary',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147159/News/Announcements%20Icons/Announcement-01-article_lxmr0x.png',
    locationContent: 'Dear Dr. Gomez (Ed, Sir),',
    paragraph1: 'One year has passed since you left us, and we miss you. Today, we pause from our seemingly harried life because of the COVID-19 pandemic and remember you with much gratitude for your extraordinary contributions and the rich legacy you leave us behind.',
    paragraph2: `Your vision built MSI from scratch into a world-renowned institution that we indeed are all proud to be a part of. That vision shaped marine science in the Philippines and saw the development of other institutions in different parts of the country.`,
    paragraph3: `Being part of MSI is truly a privilege and an honor. It has opened many opportunities for us to pursue our professional and personal goals and serve the university and the country. We are indeed standing on the shoulders of Giants, with your being the tallest.`,
    paragraph4: 'You created a culture of excellence, hard work, integrity, and honesty, which you showed by example, and that we hope to continue and maintain. You have taught us never to grow tired of giving our best, and always to have the right attitude, for it is the key to success.',
    paragraph5: 'You have given MSI the best years of your life. We thank you for your passion, dedication, and motivation, which made a significant difference to MSI and the field of marine science. Please rest assured that your legacy will live in each one of us wherever the seas take us.',
    paragraph6: 'With all our love and respect,',
    paragraph7: 'Your MSI Family',
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147128/News/Announcements%20Icons/Announcement-02_lettlk.png", title: "UPMSI Official Statement on DENR Claims", content: `This is to clarify the statement made by Department of Environment and Natural Resources (DENR) Undersecretary Benny Antiporda accusing the University of the Philippines Marine Science Institute (UPMSI) of charging the DENR half a billion pesos in consultation fees and being, in a word, “bayaran.”`, url: 'UPMSI-official-statement-on-DENR-claims'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147118/News/Announcements%20Icons/Announcement-03-article-photo_kcitfn.png", title: "UPMSI Official Statement on the Addition of Dolomite Sand to Manila Bay", content: 'The UPMSI believes that the use of crushed dolomite sand will not help solve the environmental problems in Manila Bay. Read more about the implications of transferring dolomite sand in this statement.', url: 'UPMSI-official-statement-on-the-addition-of-Dolomite-Sand-to-Manila-Bay'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147144/News/Announcements%20Icons/Announcement-04_fkckkz.png", title: "The UPMSI is home to two new Professors Emeriti", content: 'The UPMSI congratulates Dr. Maria Lourdes San Diego-McGlone, a pioneering chemical oceanographer, and Dr. Gisela P. Concepcion, a leading figure in natural products chemistry, for being conferred as Professors Emeriti of the University of the Philippines.', url: 'the-UPMSI-is-home-to-two-new-professors-emeriti'},
      ]
  }];

  denr = [{
    title: 'UPMSI Official Statement on DENR Claims',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147128/News/Announcements%20Icons/Announcement-02_lettlk.png',
    locationContent: `The University of the Philippines Marine Science Institute (UPMSI), one of the seven academic institutes of the UP College of Science in Diliman, has been serving as the University's coordinating base for marine research since its establishment as the Marine Sciences Center in 1974. Since its elevation to an Institute in 1985, the UP MSI has been offering graduate programs in marine biology, marine chemistry, physical oceanography, marine geology, and related disciplines, training some of the country's top marine experts over the past decades.`,

    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147159/News/Announcements%20Icons/Announcement-01-article_lxmr0x.png", title: "A letter for Dr. Ed Gomez on his first death anniversary", content: `Today, we pause from our seemingly harried life because of the COVID-19 pandemic and remember you with much gratitude for your extraordinary contributions and the rich legacy you leave us behind.`, url: 'a-letter-for-Dr.-Ed-Gomez-on-his-first-death-anniversary'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147118/News/Announcements%20Icons/Announcement-03-article-photo_kcitfn.png", title: "UPMSI Official Statement on the Addition of Dolomite Sand to Manila Bay", content: 'The UPMSI believes that the use of crushed dolomite sand will not help solve the environmental problems in Manila Bay. Read more about the implications of transferring dolomite sand in this statement.', url: 'UPMSI-official-statement-on-the-addition-of-Dolomite-Sand-to-Manila-Bay'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147144/News/Announcements%20Icons/Announcement-04_fkckkz.png", title: "The UPMSI is home to two new Professors Emeriti", content: 'The UPMSI congratulates Dr. Maria Lourdes San Diego-McGlone, a pioneering chemical oceanographer, and Dr. Gisela P. Concepcion, a leading figure in natural products chemistry, for being conferred as Professors Emeriti of the University of the Philippines.', url: 'the-UPMSI-is-home-to-two-new-professors-emeriti'},
      ]
  }];

  denrBool:boolean = false;

  dolomite = [{
    title: 'UPMSI Official Statement on the Addition of Dolomite Sand to Manila Bay',
    date: 'September 30, 2020',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147118/News/Announcements%20Icons/Announcement-03-article-photo_kcitfn.png',
    locationContent: 'Manila Bay is strategically located in the heart of the most densely populated area in the Philippines.  It has a long history of use for shipping, navigation, and port services going back to the 16th century.  In addition to its cultural and historical significance, Manila Bay is important economically as site of industrial activities, human settlement, and source of fisheries.',
    paragraph1: `Manila Bay is bounded by four provinces and Metro Manila and is drained by 17,000 km2 of watershed which is home to 30% of the entire population of the country, and 42% of agricultural areas.  Both terrestrial and marine environments are intricately connected, such that the state of Manila Bay today is a testament of collective efforts and inaction.`,
    paragraph2: `Due to the myriad of uses of Manila Bay, pollution continues to be a major problem.  To address the continued pollution in Manila Bay, a Supreme Court ”Continuing Mandamus” was issued in 2008 ordering 13 government agencies headed by the Department of Environment and Natural Resources (DENR) to “clean up, rehabilitate, and preserve Manila Bay, and restore and maintain its waters to Class SB level to make them fit for swimming, skin-diving, and other forms of contact recreation”.`,
    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147159/News/Announcements%20Icons/Announcement-01-article_lxmr0x.png", title: "A letter for Dr. Ed Gomez on his first death anniversary", content: `Today, we pause from our seemingly harried life because of the COVID-19 pandemic and remember you with much gratitude for your extraordinary contributions and the rich legacy you leave us behind.`, url: 'a-letter-for-Dr.-Ed-Gomez-on-his-first-death-anniversary'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147128/News/Announcements%20Icons/Announcement-02_lettlk.png", title: "UPMSI Official Statement on DENR Claims", content: `This is to clarify the statement made by Department of Environment and Natural Resources (DENR) Undersecretary Benny Antiporda accusing the University of the Philippines Marine Science Institute (UPMSI) of charging the DENR half a billion pesos in consultation fees and being, in a word, “bayaran.”`, url: 'UPMSI-official-statement-on-DENR-claims'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147144/News/Announcements%20Icons/Announcement-04_fkckkz.png", title: "The UPMSI is home to two new Professors Emeriti", content: 'The UPMSI congratulates Dr. Maria Lourdes San Diego-McGlone, a pioneering chemical oceanographer, and Dr. Gisela P. Concepcion, a leading figure in natural products chemistry, for being conferred as Professors Emeriti of the University of the Philippines.', url: 'the-UPMSI-is-home-to-two-new-professors-emeriti'},
      ]
  }];

  emeriti = [{
    title: 'The UPMSI is home to two new Professors Emeriti',
    thumbnail: 'hhttps://res.cloudinary.com/upmsi/image/upload/v1628147144/News/Announcements%20Icons/Announcement-04_fkckkz.png',
    locationContent: `It's a double celebration for The Marine Science Institute! `,
    paragraph1: 'The UPMSI congratulates another Professor Emeritus this year, Dr. Maria Lourdes San Diego-McGlone!',
    paragraph2: `Dr. Maria Lourdes San Diego-McGlone is one of the very few and pioneering chemical oceanographers in the Philippines and is currently the head of the Marine Biogeochemistry Laboratory of UP MSI.  Through the years, her research focus has been on the changing coastal water quality, nutrient fluxes and budgets, primary production, and the effect of human activities on the land-ocean-sediment-atmosphere interactions.  She has also been part of several multi-disciplinary researches involving the chemical hydrography of the Philippine seas.  Until now, her research projects continue to address environmental stressors such as eutrophication, harmful algal blooms and ocean acidification, and their impact on coastal systems including coral reefs and blue carbon ecosystems.`,
    paragraph3: `The UP Marine Science Institute congratulates Dr. Gisela P. Concepcion for another notable academic milestone!`,
    paragraph4: 'Dr. Concepcion was recently conferred as Professor Emeritus of the University of the Philippines. Professor Emeritus is a title for life bestowed to retired professors for their exceptional contribution to the university. ',
    paragraph5: `Among Dr. Concepcion's significant contributions in the field of marine natural products chemistry are researches geared towards discovery of anti-cancer, antibacterial, antituberculosis, antimalarial, anti-inflammatory, neuroactive, and immunosuppressant properties of novel compounds through studies on marine natural products. She has published her scientific contributions in high-impact factor journals; with patents and patent applications. She has also mentored and co-advised graduate students from the Philippines and abroad.`,

    news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147159/News/Announcements%20Icons/Announcement-01-article_lxmr0x.png", title: "A letter for Dr. Ed Gomez on his first death anniversary", content: `Today, we pause from our seemingly harried life because of the COVID-19 pandemic and remember you with much gratitude for your extraordinary contributions and the rich legacy you leave us behind.`, url: 'a-letter-for-Dr.-Ed-Gomez-on-his-first-death-anniversary'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147128/News/Announcements%20Icons/Announcement-02_lettlk.png", title: "UPMSI Official Statement on DENR Claims", content: `This is to clarify the statement made by Department of Environment and Natural Resources (DENR) Undersecretary Benny Antiporda accusing the University of the Philippines Marine Science Institute (UPMSI) of charging the DENR half a billion pesos in consultation fees and being, in a word, “bayaran.”`, url: 'UPMSI-official-statement-on-DENR-claims'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147118/News/Announcements%20Icons/Announcement-03-article-photo_kcitfn.png", title: "UPMSI Official Statement on the Addition of Dolomite Sand to Manila Bay", content: 'The UPMSI believes that the use of crushed dolomite sand will not help solve the environmental problems in Manila Bay. Read more about the implications of transferring dolomite sand in this statement.', url: 'UPMSI-official-statement-on-the-addition-of-Dolomite-Sand-to-Manila-Bay'},
      ]
  }];



  myArr = [];
  nastBool:boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/Announcement/a-letter-for-Dr.-Ed-Gomez-on-his-first-death-anniversary':
        this.myArr = this.deathAnniv;
        break;
      case '/News/Announcement/UPMSI-official-statement-on-DENR-claims':
        this.myArr = this.denr;
        this.denrBool = true;
        break;
      case '/News/Announcement/UPMSI-official-statement-on-the-addition-of-Dolomite-Sand-to-Manila-Bay':
        this.myArr = this.dolomite;
        break;
      case '/News/Announcement/the-UPMSI-is-home-to-two-new-professors-emeriti':
        this.myArr = this.emeriti;
        break;
    }
  }

  nextNews(url:string){
    this.router.navigate(['/News/Announcement/', url]).then(() => {
      window.location.reload();
    });;
  }

  gotoAnnouncement(){
    this.router.navigate(['News/Announcement']);
  }

}
