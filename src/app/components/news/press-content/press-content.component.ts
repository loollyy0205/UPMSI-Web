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
  
    title: `Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist`,
    date: 'September 7, 2022',
    author: 'DOST.Gov',
    Pthumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg',
    photoContent: '',
    courtesy: 'PHOTO COURTESY OF DOST.GOV',

     news: [
      
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956573/News/press/siringan-anc_anitfe.png", title: "Research station on West PH Sea's Pag-asa island unveiled", content: `UP Marine Science Institute opens research hub on Pag-asa Island`, url: 'island-unveiled'},
      ]
  }];

   press02 = [{
    title: `West Philippine Sea: UP experts set sail for 3-year study seeking opportunities`,
    date: 'June 6, 2022',
    author: 'Yahoo! News',
    Pthumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg',
    photoContent: '',
    courtesy: 'The West Philippine Sea (WPS) remains threatened by both',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956573/News/press/siringan-anc_anitfe.png", title: "Research station on West PH Sea's Pag-asa island unveiled", content: `UP Marine Science Institute opens research hub on Pag-asa Island`, url: 'island-unveiled'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

press03 = [{
    title: `Research facility sa Pag-asa Island, West PH Sea binuksan ng Pinoy experts`,
    date: 'October 25, 2021',
    author: 'TV Patrol',
    thumbnail: 'https://www.youtube.com/embed/DjoFeUivwNQ',
    photoContent: 'UP Marine Science Institute opens research hub on Pag-asa Island',
    courtesy: 'VIDEO COURTESY OF ANC 24/7',

      news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

press04 = [{
    title: `Research station on West PH Sea's Pag-asa island unveiled`,
    date: 'October 25, 2021',
    author: 'ANC 24/7',
    thumbnail: 'https://www.youtube.com/embed/fIwlGAkir-c',
    photoContent: 'UP Marine Science Institute opens research hub on Pag-asa Island',
    courtesy: 'VIDEO COURTESY OF ANC 24/7',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];



  press05 = [{
    title: `Team of PH scientists now headed to Pag-asa Island`,
    date: 'October 4, 2021',
    author: 'Inquirer.net',
    Pthumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1644304858/News/press/inquirernews-1_py0bky.png',
    photoContent: '',
    courtesy: 'PHOTO COURTESY OF INQUIRER.NET',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press6 = [{
    title: `Of science and sovereignty: Research station opens in Pag-asa Island`,
    date: 'October 25, 2021',
    author: 'Manila News',
    Pthumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1644303123/News/press/manilanews_mdqq1d.jpg',
    photoContent: '',
    courtesy: 'PHOTO COURTESY OF MANILA NEWS',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press7 = [{
    title: `Pag-asa Island sets up scientific research station`,
    date: 'October 30, 2021',
    author: 'Palawan News',
    Pthumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1643947924/News/press/palawannews_oetc57.jpg',
    photoContent: '',
    courtesy: 'PHOTO COURTESY OF PALAWAN NEWS',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

   press8 = [{
    title: `Pag-asa Island sets up scientific research station`,
    date: 'October 30, 2021',
    author: 'Esquire Mag',
    Pthumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1644303122/News/press/esquirenews_trarhb.jpg',
    photoContent: '',
    courtesy: 'PHOTO COURTESY OF ESQUIRE MAG',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];


press9 = [{
    title: `UP Marine Science Institute opens research hub on Pag-asa Island`,
    date: 'October 25, 2021',
    author: 'ANC 24/7',
    thumbnail: 'https://www.youtube.com/embed/f8f43IOjDOc',
    photoContent: 'UP Marine Science Institute opens research hub on Pag-asa Island',
    courtesy: 'VIDEO COURTESY OF ANC 24/7',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press10 = [{
    title: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep',
    date: 'March 25, 2021',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/MwSTJ8qJqwk',
    photoContent: 'Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong pinakamalalim na bahagi ng mundo | Saksi',
    courtesy: 'VIDEO COURTESY OF GMA News',

      news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press11 = [{
    title: 'Meet the Innovator Protecting Our Oceans in the Philippines: Dr. Laura T. meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david',
    date: 'June 3, 2020',
    author: 'The World Bank',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1639464112/News/press/press_16_3_fb8olo.jpg',
    photoContent: '',
    courtesy: 'PHOTO COURTESY OF THE WORLD BANK',

      news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press12 = [{
    title: `Southeast Asia Speaks: Marine scientist Deo Onda on protecting West Philippine Sea resources`,
    date: 'June 10, 2021',
    author: 'Rappler',
    thumbnail: 'https://www.youtube.com/embed/IR5wWPBz_Tc',
    photoContent: `Rappler editor-at-large Marites Vitug speaks to marine scientist Deo Onda on the importance of the resources found in Philippine waters and how the country can protect them.`,
    courtesy: 'VIDEO COURTESY OF Rappler',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press13 = [{
    title: `SONA: UP Marine Science Institute, nanawagan na protektahan ang ating EEZ`,
    date: 'July 2, 2019',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/F0rmzPW9yHg',
    photoContent: 'Matapos tumambad ang mga sira-sirang bahura sa West Philippine Sea, nanawagan ang UP Marine Science Institute na dapat protektahan ang ating exclusive economic zone.',
    courtesy: 'VIDEO COURTESY OF GMA News',

      news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press14 = [{
    title: `ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea`,
    date: 'May 9, 2019',
    author: 'PTV',
    thumbnail: 'https://www.youtube.com/embed/yWbKSEe0ffE',
    photoContent: 'ON THE SPOT: All Filipino scientific expedition sa Kalayaan Island sa West Philippine Sea',
    courtesy: 'VIDEO COURTESY OF PTV',

      news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press15 = [{
    title: `BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute`,
    date: 'April 22, 2019',
    author: 'GMA News',
    thumbnail: 'https://www.youtube.com/embed/h682sTqDpjI',
    photoContent: 'BT: Paglalakbay ng ilang kawani ng gobyerno at estudyante ng UP-marine science institute papuntang West Philippine Sea, sinimulan na',
    courtesy: 'VIDEO COURTESY OF GMA News',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press16 = [{
    title: `Manila Bay - Rehabilitasyon o Reklamasyon? (Ika-2 Yugto) | Failon Ngayon`,
    date: 'April 14, 2019',
    author: 'ABS-CBN News',
    thumbnail: 'https://www.youtube.com/embed/a5TKZfDFgYw',
    photoContent: `"Failon Ngayon" explains how human settlement and urbanization contributed to the pollution of the waterways connected to Manila Bay, tackles the challenges in maintaining the sewerage systems in Metro Manila and the government's effort to address human settlement issue that is seen as a significant contributor to water pollution, elaborates the hazards and risks of the proposed reclamation projects in Manila Bay, and shows the opposing viewpoints about the proposed Manila Bay reclamation amid the pending implementation of NEDA's Manila Bay Sustainable Development Master Plan.`,
    courtesy: 'VIDEO COURTESY OF ABS-CBN News',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press17 = [{
    title: `Adopt a giant clam program, suportado ng UP-Marine Science Institute`,
    date: 'April 22, 2019',
    author: 'Eagle News',
    thumbnail: 'https://www.youtube.com/embed/fvEU56AhKaA',
    photoContent: 'Adopt a giant clam program, suportado ng UP-Marine Science Institute',
    courtesy: 'VIDEO COURTESY OF Eagle News',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press18 = [{
    title: `AHA!: The giant clams of Bolinao, Pangasinan`,
    date: 'January 8, 2018',
    author: 'GMA Playground',
    thumbnail: 'https://www.youtube.com/embed/Dzoi457nF30',
    photoContent: 'Apart from its scenic beaches, the province of Pangasinan is also known as one of the major habitats of giant clams or "taklobo." Take a look at the Bolinao Marine Laboratory, the largest giant clam sea nursery in the country!',
    courtesy: 'VIDEO COURTESY OF GMA Playground',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press19 = [{
    title: `How to take care of giant clams`,
    date: 'May 5, 2017',
    author: 'INQUIRER.net',
    thumbnail: 'https://www.youtube.com/embed/-L4zdcWL3W8',
    photoContent: 'How to take care of giant clams. Video by Noy Morcso and Rem Zamora/editing by Noy Morcoso/Interviewed by Gabriel Cardinoza',
    courtesy: 'VIDEO COURTESY OF INQUIRER.net',

       news: [
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  press20 = [{
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
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1627980994/About/03%20Faculty/19-Wilfred_John_E._Santia%C3%B1ez_Ph.D._fm2i0o.jpg", title: "Balik Scientist names 6 Seaweed Genera, holds a record by a Filipino Scientist", content: `A Balik Scientist, Dr. Wilfred John E. Santiañez of the University of the Philippines-Marine Science Institute...`, url: 'Balik-Scientist-names-6-Seaweed-Genera'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1663125465/News/press/Press-1_mzjfwd.jpg", title: " West Philippine Sea: UP experts set sail for 3-year study seeking opportunities", content: 'The West Philippine Sea (WPS) remains threatened by both...', url: 'UP-experts-set-sail'},
      {image: "https://res.cloudinary.com/upmsi/image/upload/v1643956812/News/press/tvpatrol_giksmr.png", title: "Team of PH scientists now headed to Pag-asa Island", content: 'UP Marine Science Institute opens research hub on Pag-asa Island"', url: 'West-PH-Sea'},
      ]
  }];

  

          

  myArr = [];

   
  press01Bool:boolean = false;
  press02Bool:boolean = false;
  press03Bool:boolean = false;
  press04Bool:boolean = false;
  press05Bool:boolean = false;
  press6Bool:boolean = false;
  press9Bool:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {

  /**
    switch(this.router.url) {
      case '/News/press-coverage-headlines/Research-facility':
        this.myArr = this.press01;
        break;
      case '/News/press-coverage-headlines/Research-facility':
        this.myArr = this.press02;
        break;
      case '/News/press-coverage-headlines/Research-facility':
        this.myArr = this.press03;
        break;
      case '/News/press-coverage-headlines/island-unveiled':
        this.myArr = this.press04;
        break;
      case '/News/press-coverage-headlines/Team-of-PH':
        this.myArr = this.press05;
        this.press03Bool = true;
        break;
      case '/News/press-coverage-headlines/station-opens':
        this.myArr = this.press6;
        this.press04Bool = true;
        break;
      case '/News/press-coverage-headlines/Pag-asa sland':
        this.myArr = this.press7;
        this.press05Bool = true;
        break;
      case '/News/press-coverage-headlines/scientific-research':
        this.myArr = this.press8;
        this.press6Bool = true;
        break;
      case '/News/press-coverage-headlines/UP-Marine-Science-Institute-opens-research-hub-on-Pag-asa-Island':
        this.myArr = this.press9;
        break;
      case '/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep':
        this.myArr = this.press10;
        break;
      case '/News/press-coverage-headlines/meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david':
        this.myArr = this.press11;
        this.press9Bool = true;
        break;
      case '/News/press-coverage-headlines/Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources':
        this.myArr = this.press12;
        break;
      case '/News/press-coverage-headlines/SONA-UP-Marine-Science-Institute-nanawagan-na-protektahan-ang-ating-EEZ':
        this.myArr = this.press13;
        break;
      case '/News/press-coverage-headlines/ON-THE-SPOT-All-filipino-scientific-expedition-sa-kalayaan-island-sa-West-Philippine-Sea':
        this.myArr = this.press14;
        break;
      case '/News/press-coverage-headlines/BT-Paglalakbay-ng-ilang-kawani-ng-gobyerno-at-estudyante-ng-UP-marine-science-institute':
        this.myArr = this.press15;
        break;
      case '/News/press-coverage-headlines/Manila-Bay-rehabilitasyon-o-reklamasyon':
        this.myArr = this.press16;
        break;
      case '/News/press-coverage-headlines/adopt-a-giant-clam-program-suportado-ng-UP-Marine-Science-Institute':
        this.myArr = this.press17;
        break;
      case '/News/press-coverage-headlines/AHA!-The-giant-clams-of-Bolinao-Pangasinan':
        this.myArr = this.press18;
        break;
      case '/News/press-coverage-headlines/how-to-take-care-of-giant-clams':
        this.myArr = this.press19;
        break;
      case '/News/press-coverage-headlines/the-giant-clam-nursery-in-Bolinao-Pangasinan':
        this.myArr = this.press20;
        break;

    }
    */

    if(this.router.url.includes('/News/press-coverage-headlines/Balik-Scientist-names-6-Seaweed-Genera')){
      this.myArr = this.press01;
      this.press01Bool = true;
      }

    if(this.router.url.includes('/News/press-coverage-headlines/UP-experts-set-sail')){
      this.myArr = this.press02;
      this.press02Bool = true;
      }

    if(this.router.url.includes('/News/press-coverage-headlines/West-PH-Sea')){
      this.myArr = this.press03;
      }

    if(this.router.url.includes('/News/press-coverage-headlines/island-unveiled')){
      this.myArr = this.press04;
      }

    if(this.router.url.includes('/News/press-coverage-headlines/Team-of-PH')){
      this.myArr = this.press05;
      this.press03Bool = true;
      }

    if(this.router.url.includes('/News/press-coverage-headlines/station-opens')){
      this.myArr = this.press6;
      this.press04Bool = true;
      }

    if(this.router.url.includes('/News/press-coverage-headlines/Pag-asa-island')){
      this.myArr = this.press7;
      this.press05Bool = true;
      }

    if(this.router.url.includes('/News/press-coverage-headlines/scientific-research')){
      this.myArr = this.press8;
      this.press6Bool = true;
      }

     if(this.router.url.includes('/News/press-coverage-headlines/UP-Marine-Science-Institute-opens-research-hub-on-Pag-asa-Island')){
      this.myArr = this.press9;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep')){
      this.myArr = this.press10;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/meet-the-innovator-protecting-our-oceans-in-the-philippines-dr-laura-david')){
      this.myArr = this.press11; 
      this.press9Bool = true;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/Southeast-Asia-Speaks-Marine-scientist-Deo-Onda-on-protecting-West-Philippine-Sea-resources')){
      this.myArr = this.press12;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/SONA-UP-Marine-Science-Institute-nanawagan-na-protektahan-ang-ating-EEZ')){
      this.myArr = this.press13;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/ON-THE-SPOT-All-filipino-scientific-expedition-sa-kalayaan-island-sa-West-Philippine-Sea')){
      this.myArr = this.press14;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/BT-Paglalakbay-ng-ilang-kawani-ng-gobyerno-at-estudyante-ng-UP-marine-science-institute')){
     this.myArr = this.press15;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/Manila-Bay-rehabilitasyon-o-reklamasyon')){
      this.myArr = this.press16;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/adopt-a-giant-clam-program-suportado-ng-UP-Marine-Science-Institute')){
      this.myArr = this.press17;
      }
      if(this.router.url.includes('/News/press-coverage-headlines/AHA!-The-giant-clams-of-Bolinao-Pangasinan')){
      this.myArr = this.press18;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/how-to-take-care-of-giant-clams')){
      this.myArr = this.press19;
      }
    if(this.router.url.includes('/News/press-coverage-headlines/the-giant-clam-nursery-in-Bolinao-Pangasinan')){
      this.myArr = this.press20;
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
