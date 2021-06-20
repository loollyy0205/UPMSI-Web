import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-press-content',
  templateUrl: './press-content.component.html',
  styleUrls: ['./press-content.component.css']
})
export class PressContentComponent implements OnInit {
  press01 = [{
    title: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep',
    date: 'March 25, 2021',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/MwSTJ8qJqwk',
    photoContent: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi',
    courtesy: 'VIDEO COURTESY OF GMA News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-04.jpg", title: "Dr. Deo Florence Onda to make history as 1st Filipino to reach 3rd deepest spot on Earth | 24 Oras", content: 'Dr. Deo Florence Onda is set to make history as the first Filipino to reach the 34,100 feet Emden Deep, the third deepest spot on Earth.', url: 'Dr.-Deo-Florence-Onda-to-make-history-as-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      ]
  }];

  press02 = [{
    title: 'Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth',
    date: 'March 19, 2021',
    author: 'ANC 24/7',
    thumbnail: 'https://www.youtube.com/embed/8xzwOIehNDM',
    photoContent: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach the Emden Deep, the third deepest sport on Earth located in the Philippines trench.`,
    courtesy: 'VIDEO COURTESY OF ANC 24/7',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-04.jpg", title: "Dr. Deo Florence Onda to make history as 1st Filipino to reach 3rd deepest spot on Earth | 24 Oras", content: 'Dr. Deo Florence Onda is set to make history as the first Filipino to reach the 34,100 feet Emden Deep, the third deepest spot on Earth.', url: 'Dr.-Deo-Florence-Onda-to-make-history-as-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      ]
  }];

  press03 = [{
    title: `Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo`,
    date: 'March 19, 2021',
    author: 'ABS-CBN News',
    thumbnail: 'https://www.youtube.com/embed/-G79wneqOMw',
    photoContent: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.',
    courtesy: 'VIDEO COURTESY OF ABS-CBN News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-04.jpg", title: "Dr. Deo Florence Onda to make history as 1st Filipino to reach 3rd deepest spot on Earth | 24 Oras", content: 'Dr. Deo Florence Onda is set to make history as the first Filipino to reach the 34,100 feet Emden Deep, the third deepest spot on Earth.', url: 'Dr.-Deo-Florence-Onda-to-make-history-as-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      ]
  }];

  press04 = [{
    title: `Dr. Deo Florence Onda to make history as 1st Filipino to reach 3rd deepest spot on Earth`,
    date: 'March 19, 2021',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/LwRP7CZs8Ws',
    photoContent: 'Dr. Deo Florence Onda is set to make history as the first Filipino to reach the 34,100 feet Emden Deep, the third deepest spot on Earth.',
    courtesy: 'VIDEO COURTESY OF GMA News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press05 = [{
    title: `U.P. scientist set to be first Filipino to reach 3rd deepest point on earth | New Day`,
    date: 'March 19, 2021',
    author: 'CNN Philippines',
    thumbnail: 'https://www.youtube.com/embed/_OKb9p5eN_s',
    photoContent: 'A scientist is set to make history as the first Filipino who will be able to reach the third deepest point in the world. We speak with Dr. Deo Florence Onda.',
    courtesy: 'VIDEO COURTESY OF CNN Philippines',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press06 = [{
    title: `Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources`,
    date: 'June 10, 2021',
    author: 'Rappler',
    thumbnail: 'https://www.youtube.com/embed/IR5wWPBz_Tc',
    photoContent: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of the resources found in Philippine waters and how the country can protect them.`,
    courtesy: 'VIDEO COURTESY OF Rappler',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press07 = [{
    title: `Rappler Talk: Deo Onda on the value of West PH Sea resources to Filipinos`,
    date: 'August 5, 2019',
    author: 'Rappler',
    thumbnail: 'https://www.youtube.com/embed/GwCXnPBrwLI',
    photoContent: 'Follow Rappler for the latest news in the Philippines and across the globe. Rappler editor-at-large Marites Vitug sits down with Dr Deo Onda, UP MSI assistant professor to discuss the importance of the West Philippine Sea’s underwater resources to Filipinos and the threats the ecosystem faces on Monday, August 5, 2019.',
    courtesy: 'VIDEO COURTESY OF Rappler',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press08 = [{
    title: `SONA: UP Marine Science Institute, nanawagan na protektahan ang ating EEZ`,
    date: 'July 2, 2019',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/F0rmzPW9yHg',
    photoContent: 'Matapos tumambad ang mga sira-sirang bahura sa West Philippine Sea, nanawagan ang UP Marine Science Institute na dapat protektahan ang ating exclusive economic zone.',
    courtesy: 'VIDEO COURTESY OF GMA News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press09 = [{
    title: `ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea`,
    date: 'May 9, 2019',
    author: 'PTV',
    thumbnail: 'https://www.youtube.com/embed/yWbKSEe0ffE',
    photoContent: 'ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea',
    courtesy: 'VIDEO COURTESY OF PTV',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press10 = [{
    title: `BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute`,
    date: 'April 22, 2019',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/h682sTqDpjI',
    photoContent: 'BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute papuntang West Philippine Sea, sinimulan na',
    courtesy: 'VIDEO COURTESY OF GMA News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press11 = [{
    title: `Manila Bay - Rehabilitasyon o Reklamasyon? (Ika-2 Yugto) | Failon Ngayon`,
    date: 'April 14, 2019',
    author: 'ABS-CBN News',
    thumbnail: 'https://www.youtube.com/embed/a5TKZfDFgYw',
    photoContent: `"Failon Ngayon" explains how human settlement and urbanization contributed to the pollution of the waterways connected to Manila Bay, tackles the challenges in maintaining the sewerage systems in Metro Manila and the government's effort to address human settlement issue that is seen as a significant contributor to water pollution, elaborates the hazards and risks of the proposed reclamation projects in Manila Bay, and shows the opposing viewpoints about the proposed Manila Bay reclamation amid the pending implementation of NEDA's Manila Bay Sustainable Development Master Plan.`,
    courtesy: 'VIDEO COURTESY OF ABS-CBN News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press12 = [{
    title: `Adopt a giant clam program, suportado ng UP-Marine Science Institute`,
    date: 'April 22, 2019',
    author: 'Eagle News',
    thumbnail: 'https://www.youtube.com/embed/fvEU56AhKaA',
    photoContent: 'Adopt a giant clam program, suportado ng UP-Marine Science Institute',
    courtesy: 'VIDEO COURTESY OF Eagle News',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press13 = [{
    title: `AHA!: The giant clams of Bolinao, Pangasinan`,
    date: 'January 8, 2018',
    author: 'GMA Playground',
    thumbnail: 'https://www.youtube.com/embed/Dzoi457nF30',
    photoContent: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo." Take a look at the Bolinao Marine Laboratory, the largest giant clam sea nursery in the country!',
    courtesy: 'VIDEO COURTESY OF GMA Playground',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press14 = [{
    title: `How to take care of giant clams`,
    date: 'May 5, 2017',
    author: 'INQUIRER.net',
    thumbnail: 'https://www.youtube.com/embed/-L4zdcWL3W8',
    photoContent: 'How to take care of giant clams. Video by Noy Morcso and Rem Zamora/editing by Noy Morcoso/Interviewed by Gabriel Cardinoza',
    courtesy: 'VIDEO COURTESY OF INQUIRER.net',

    news: [
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];

  press15 = [{
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
      {image: "../../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep", content: `Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi`, url: 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: `Matters of Fact: Dr. Deo Onda, a microbial oceanographer from the University of the Philippines' Marine Science Institute, is about to make history as one of the first humans to reach...`, url: 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth'},
      {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'Ang scientist na si Dr. Deo Florence Onda ang isa sa pinakaunang tao at pinakaunang Pinoy na mararating ang "3rd deepest spot" sa mundo na matatagpuan sa Philippine Trench.', url: 'pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo'},
      ]
  }];


  myArr = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep':
        this.myArr = this.press01;
        break;
      case '/News/press-coverage-headlines/test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth':
        this.myArr = this.press02;
        break;
      case '/News/press-coverage-headlines/pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo':
        this.myArr = this.press03;
        break;
      case '/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-to-make-history-as-1st-filipino-to-reach-3rd-deepest-spot-on-earth':
        this.myArr = this.press04;
        break;
      case '/News/press-coverage-headlines/UP-scientist-set-to-be-first-filipino-to-reach-3rd-deepest-point-on-earth':
        this.myArr = this.press05;
        break;
      case '/News/press-coverage-headlines/Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources':
        this.myArr = this.press06;
        break;
      case '/News/press-coverage-headlines/Rappler-Talk-Deo-Onda-on-the-value-of-West-PH-Sea-resources-to-filipinos':
        this.myArr = this.press07;
        break;
      case '/News/press-coverage-headlines/SONA-UP-Marine-Science-Institute-nanawagan-na-protektahan-ang-ating-EEZ':
        this.myArr = this.press08;
        break;
      case '/News/press-coverage-headlines/ON-THE-SPOT-All-filipino-scientific-expedition-sa-kalayaan-island-sa-West-Philippine-Sea':
        this.myArr = this.press09;
        break;
      case '/News/press-coverage-headlines/BT-Paglalakbay-ng-ilang-kawani-ng-gobyerno-at-estudyante-ng-UP-marine-science-institute':
        this.myArr = this.press10;
        break;
      case '/News/press-coverage-headlines/Manila-Bay-rehabilitasyon-o-reklamasyon':
        this.myArr = this.press11;
        break;
      case '/News/press-coverage-headlines/adopt-a-giant-clam-program-suportado-ng-UP-Marine-Science-Institute':
        this.myArr = this.press12;
        break;
      case '/News/press-coverage-headlines/AHA!-The-giant-clams-of-Bolinao-Pangasinan':
        this.myArr = this.press13;
        break;
      case '/News/press-coverage-headlines/how-to-take-care-of-giant-clams':
        this.myArr = this.press14;
        break;
      case '/News/press-coverage-headlines/the-giant-clam-nursery-in-Bolinao-Pangasinan':
        this.myArr = this.press15;
        break;

    }
  }

  moreMsiNews(){
    this.router.navigate(['/News/press-coverage-headlines']);
  }

  nextNews(url:string){
    this.router.navigate(['/News/press-coverage-headlines/', url]).then(() => {
      window.location.reload();
    });;
  }
}
