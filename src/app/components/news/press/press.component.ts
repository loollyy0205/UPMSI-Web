import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {
  news=[
    {image: "../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong... | Saksi", content: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim...'},
    /**
    edited4: changed content
    */

    {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: 'Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the...'},
    /**
    edited4: changed content
    */

    {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy...'},
    /**
    edited4: changed content
    */

    {image: "../../../../assets/photos/press-coverage/thumbnail-04.jpg", title: "Dr. Deo Florence Onda to make history as 1st Filipino to reach 3rd deepest spot on Earth | 24 Oras", content: 'Dr. Deo Florence Onda is set to make history as the first Filipino to reach...'},
     /**
    edited4: changed content
    */

    {image: "../../../../assets/photos/press-coverage/thumbnail-05.jpg", title: "U.P. scientist set to be first Filipino to reach 3rd deepest point on earth | New Day", content: 'A scientist is set to make history as the first Filipino who will be able to reach the third deepest point in the world. We speak with Dr. Deo Florence Onda.'},
    {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`},
    {image: "../../../../assets/photos/press-coverage/thumbnail-07.jpg", title: "Rappler Talk: Deo Onda on the value of West PH Sea resources to Filipinos", content: `Follow Rappler for the latest news in the Philippines and across the globe. Rappler editor-at-large Marites Vitug sits down with Dr Deo Onda...`},
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
        this.router.navigate(['/News/press-coverage-headlines', 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep']);
        break;
      case 1:
        this.router.navigate(['/News/press-coverage-headlines', 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth']);
        break;
      case 2:
        this.router.navigate(['/News/press-coverage-headlines', `pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo`]);
        break;
      case 3:
        this.router.navigate(['/News/press-coverage-headlines', 'Dr.-Deo-Florence-Onda-to-make-history-as-1st-filipino-to-reach-3rd-deepest-spot-on-earth']);
        break;
      case 4:
        this.router.navigate(['/News/press-coverage-headlines', 'UP-scientist-set-to-be-first-filipino-to-reach-3rd-deepest-point-on-earth']);
        break;
      case 5:
        this.router.navigate(['/News/press-coverage-headlines', 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources']);
        break;
      case 6:
        this.router.navigate(['/News/press-coverage-headlines', 'Rappler-Talk-Deo-Onda-on-the-value-of-West-PH-Sea-resources-to-filipinos']);
        break;
      case 7:
        this.router.navigate(['/News/press-coverage-headlines', `SONA-UP-Marine-Science-Institute-nanawagan-na-protektahan-ang-ating-EEZ`]);
        break;
      case 8:
        this.router.navigate(['/News/press-coverage-headlines', 'ON-THE-SPOT-All-filipino-scientific-expedition-sa-kalayaan-island-sa-West-Philippine-Sea']);
        break;
      case 9:
        this.router.navigate(['/News/press-coverage-headlines', 'BT-Paglalakbay-ng-ilang-kawani-ng-gobyerno-at-estudyante-ng-UP-marine-science-institute']);
        break;
      case 10:
        this.router.navigate(['/News/press-coverage-headlines', 'Manila-Bay-rehabilitasyon-o-reklamasyon']);
        break;
      case 11:
        this.router.navigate(['/News/press-coverage-headlines', 'adopt-a-giant-clam-program-suportado-ng-UP-Marine-Science-Institute']);
        break;
      case 12:
        this.router.navigate(['/News/press-coverage-headlines', `AHA!-The-giant-clams-of-Bolinao-Pangasinan`]);
        break;
      case 13:
        this.router.navigate(['/News/press-coverage-headlines', 'how-to-take-care-of-giant-clams']);
        break;
      case 14:
        this.router.navigate(['/News/press-coverage-headlines', 'the-giant-clam-nursery-in-Bolinao-Pangasinan']);
        break;
    }
  }

}
