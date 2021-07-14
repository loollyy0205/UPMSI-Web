import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-press-content',
  templateUrl: './press-content.component.html',
  styleUrls: ['./press-content.component.css']
})

/**
edited9:  edited all the 3 articles inside the news: [] (1)
*/


export class PressContentComponent implements OnInit {
  press01 = [{
    title: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep',
    date: 'March 25, 2021',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/MwSTJ8qJqwk',
    photoContent: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi',
    courtesy: 'VIDEO COURTESY OF GMA News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press02 = [{
    title: 'Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David',
    date: 'June 3, 2020',
    author: 'The World Bank',
    Pthumbnail: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg',
    photoContent: `I am a teacher, researcher and science communicator. I make use of remote sensing and modelling to explore how ocean physics influence the distribution and state of ocean flora and fauna. Currently, I am the Director of the Marine Science Institute, University of the Philippines.`,
    courtesy: 'VIDEO COURTESY OF The World Bank',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong... | Saksi", content: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim...', url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press03 = [{
    title: `Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources`,
    date: 'June 10, 2021',
    author: 'Rappler',
    thumbnail: 'https://www.youtube.com/embed/IR5wWPBz_Tc',
    photoContent: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of the resources found in Philippine waters and how the country can protect them.`,
    courtesy: 'VIDEO COURTESY OF Rappler',

     news: [
      {image: "../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong... | Saksi", content: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim...', url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press04 = [{
    title: `SONA: UP Marine Science Institute, nanawagan na protektahan ang ating EEZ`,
    date: 'July 2, 2019',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/F0rmzPW9yHg',
    photoContent: 'Matapos tumambad ang mga sira-sirang bahura sa West Philippine Sea, nanawagan ang UP Marine Science Institute na dapat protektahan ang ating exclusive economic zone.',
    courtesy: 'VIDEO COURTESY OF GMA News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press05 = [{
    title: `ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea`,
    date: 'May 9, 2019',
    author: 'PTV',
    thumbnail: 'https://www.youtube.com/embed/yWbKSEe0ffE',
    photoContent: 'ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea',
    courtesy: 'VIDEO COURTESY OF PTV',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press6 = [{
    title: `BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute`,
    date: 'April 22, 2019',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/h682sTqDpjI',
    photoContent: 'BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute papuntang West Philippine Sea, sinimulan na',
    courtesy: 'VIDEO COURTESY OF GMA News',

     news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press7 = [{
    title: `Manila Bay - Rehabilitasyon o Reklamasyon? (Ika-2 Yugto) | Failon Ngayon`,
    date: 'April 14, 2019',
    author: 'ABS-CBN News',
    thumbnail: 'https://www.youtube.com/embed/a5TKZfDFgYw',
    photoContent: `"Failon Ngayon" explains how human settlement and urbanization contributed to the pollution of the waterways connected to Manila Bay, tackles the challenges in maintaining the sewerage systems in Metro Manila and the government's effort to address human settlement issue that is seen as a significant contributor to water pollution, elaborates the hazards and risks of the proposed reclamation projects in Manila Bay, and shows the opposing viewpoints about the proposed Manila Bay reclamation amid the pending implementation of NEDA's Manila Bay Sustainable Development Master Plan.`,
    courtesy: 'VIDEO COURTESY OF ABS-CBN News',

     news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press8 = [{
    title: `Adopt a giant clam program, suportado ng UP-Marine Science Institute`,
    date: 'April 22, 2019',
    author: 'Eagle News',
    thumbnail: 'https://www.youtube.com/embed/fvEU56AhKaA',
    photoContent: 'Adopt a giant clam program, suportado ng UP-Marine Science Institute',
    courtesy: 'VIDEO COURTESY OF Eagle News',

     news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press9 = [{
    title: `AHA!: The giant clams of Bolinao, Pangasinan`,
    date: 'January 8, 2018',
    author: 'GMA Playground',
    thumbnail: 'https://www.youtube.com/embed/Dzoi457nF30',
    photoContent: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo." Take a look at the Bolinao Marine Laboratory, the largest giant clam sea nursery in the country!',
    courtesy: 'VIDEO COURTESY OF GMA Playground',

     news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong... | Saksi", content: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim...', url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      ]
  }];

  press10 = [{
    title: `How to take care of giant clams`,
    date: 'May 5, 2017',
    author: 'INQUIRER.net',
    thumbnail: 'https://www.youtube.com/embed/-L4zdcWL3W8',
    photoContent: 'How to take care of giant clams. Video by Noy Morcso and Rem Zamora/editing by Noy Morcoso/Interviewed by Gabriel Cardinoza',
    courtesy: 'VIDEO COURTESY OF INQUIRER.net',

     news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

  press11 = [{
    title: `The Giant Clam Nursery in Bolinao, Pangasinan`,
    date: 'April 25, 2017',
    author: 'Manila Bulletin Online',
    thumbnail: 'https://www.youtube.com/embed/h682sTqDpjI',
    photoContent: 'Manila Bulletin and Sony present: Hope for the Oceans',
    photoContent2: 'The UP Marine Science Institute helps cultivate a hatchery and nursery of over 30,000 giant clams in Bolinao, Pangasinan.',
    photoContent3: 'These clams are transported around the country to help rehabilitate reefs that have been destroyed due to man-made or natural disasters.',
    photoContent4: 'The largest of the giant clam species is the Tridacna gigas. Seeding several of these underwater giants can bring back reef life by providing habitats and food for fish and coral life.',
    photoContent5: 'Giant clams are the miracle workers of the coral reefs. And they are endangered. ',
    courtesy: 'VIDEO COURTESY OF Manila Bulletin Online',

     news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-06.jpg", title: "Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources", content: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of...`, url: 'Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources'},
      {image: "https://res.cloudinary.com/dqs7gg03v/image/upload/v1626222672/News/Press%20Coverage/thumbnail-16_kgvqlv.jpg", title: "Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. David", content: 'I am a teacher, researcher and science communicator. I make use of remote sensing..', url: 'meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-13.jpg", title: "AHA!: The giant clams of Bolinao, Pangasinan", content: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo."', url: 'AHA!-The-giant-clams-of-Bolinao-Pangasinan'},
      ]
  }];

          /**
        edited9 : changed the press numbering (2)
        */


  myArr = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep':
        this.myArr = this.press01;
        break;
      case '/News/press-coverage-headlines/meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david':
        this.myArr = this.press02;
        break;
      case '/News/press-coverage-headlines/Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources':
        this.myArr = this.press03;
        break;
      case '/News/press-coverage-headlines/SONA-UP-Marine-Science-Institute-nanawagan-na-protektahan-ang-ating-EEZ':
        this.myArr = this.press04;
        break;
      case '/News/press-coverage-headlines/ON-THE-SPOT-All-filipino-scientific-expedition-sa-kalayaan-island-sa-West-Philippine-Sea':
        this.myArr = this.press05;
        break;
      case '/News/press-coverage-headlines/BT-Paglalakbay-ng-ilang-kawani-ng-gobyerno-at-estudyante-ng-UP-marine-science-institute':
        this.myArr = this.press6;
        break;
      case '/News/press-coverage-headlines/Manila-Bay-rehabilitasyon-o-reklamasyon':
        this.myArr = this.press7;
        break;
      case '/News/press-coverage-headlines/adopt-a-giant-clam-program-suportado-ng-UP-Marine-Science-Institute':
        this.myArr = this.press8;
        break;
      case '/News/press-coverage-headlines/AHA!-The-giant-clams-of-Bolinao-Pangasinan':
        this.myArr = this.press9;
        break;
      case '/News/press-coverage-headlines/how-to-take-care-of-giant-clams':
        this.myArr = this.press10;
        break;
      case '/News/press-coverage-headlines/the-giant-clam-nursery-in-Bolinao-Pangasinan':
        this.myArr = this.press11;
        break;

    }
  }

          /**
        edited9 : edited ng switch case numbers (3)
        */

  moreMsiNews(){
    this.router.navigate(['/News/press-coverage-headlines']);
  }

  nextNews(url:string){
    this.router.navigate(['/News/press-coverage-headlines/', url]).then(() => {
      window.location.reload();
    });;
  }
}
