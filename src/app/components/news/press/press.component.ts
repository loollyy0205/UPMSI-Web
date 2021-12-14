import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})

/**
edited9 : removed the article 3,4,5,7 (1)

then change the infos of the article 2
*/


export class PressComponent implements OnInit {
  news=[

    {image: "https://res.cloudinary.com/upmsi/image/upload/v1639465218/News/press/press_12_fprwjz.png", title: "UP Marine Science Institute opens research hub on Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island'},

    {image: "../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong... | Saksi", content: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim...'},

    {image: "https://res.cloudinary.com/upmsi/image/upload/v1639463662/News/press/press_16_liqhvf.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..'},

    {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-08.jpg", title: "SONA: UP Marine Science Institute, nanawagan na protektahan ang ating EEZ", content: `Matapos tumambad ang mga sira-sirang bahura sa West Philippine Sea, nanawagan ang UP Marine Science Institute na dapat protektahan ang ating...`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-09.jpg", title: "ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea", content: `ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-10.jpg", title: "BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute", content: `BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute papuntang West Philippine Sea, sinimulan na`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-11.jpg", title: "Manila Bay - Rehabilitasyon o Reklamasyon? (Ika-2 Yugto) | Failon Ngayon", content: `"Failon Ngayon" explains how human settlement and urbanization contributed to the pollution of the waterways connected to Manila Bay...`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-12.jpg", title: "Adopt a giant clam program, suportado ng UP-Marine Science Institute", content: `Adopt a giant clam program, suportado ng UP-Marine Science Institute`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: `Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-14.jpg", title: "How to take care of giant clams", content: `How to take care of giant clams. Video by Noy Morcso and Rem Zamora/editing by Noy Morcoso/Interviewed by Gabriel Cardinoza`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-15.jpg", title: "The Giant Clam Nursery in Bolinao, Pangasinan", content: `The UP Marine Science Institute helps cultivate a hatchery and nursery of over 30,000 giant `},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/press-coverage-headlines', 'UP-Marine-Science-Institute-opens-research-hub-on-Pag-asa-Island']);
        break;
      case 1:
        this.router.navigate(['/News/press-coverage-headlines', 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep']);
        break;
      case 2:
        this.router.navigate(['/News/press-coverage-headlines', 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david']);
        break;
      case 3:
        this.router.navigate(['/News/press-coverage-headlines', 'Rappler-Talk-Deo-Onda-on-the-value-of-West-PH-Sea-resources-to-filipinos']);
        break;
      case 4:
        this.router.navigate(['/News/press-coverage-headlines', `SONA-UP-Marine-Science-Institute-nanawagan-na-protektahan-ang-ating-EEZ`]);
        break;
      case 5:
        this.router.navigate(['/News/press-coverage-headlines', 'ON-THE-SPOT-All-filipino-scientific-expedition-sa-kalayaan-island-sa-West-Philippine-Sea']);
        break;
      case 6:
        this.router.navigate(['/News/press-coverage-headlines', 'BT-Paglalakbay-ng-ilang-kawani-ng-gobyerno-at-estudyante-ng-UP-marine-science-institute']);
        break;
      case 7:
        this.router.navigate(['/News/press-coverage-headlines', 'Manila-Bay-rehabilitasyon-o-reklamasyon']);
        break;
      case 8:
        this.router.navigate(['/News/press-coverage-headlines', 'adopt-a-giant-clam-program-suportado-ng-UP-Marine-Science-Institute']);
        break;
      case 9:
        this.router.navigate(['/News/press-coverage-headlines', `AHA!-The-giant-clams-of-Bolinao-Pangasinan`]);
        break;
      case 10:
        this.router.navigate(['/News/press-coverage-headlines', 'how-to-take-care-of-giant-clams']);
        break;
      case 11:
        this.router.navigate(['/News/press-coverage-headlines', 'the-giant-clam-nursery-in-Bolinao-Pangasinan']);
        break;
    }
  }

}

        /**
        edited9 : changed the switch case numbers (4)
        */
