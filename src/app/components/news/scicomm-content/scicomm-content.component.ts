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
  giantclamBool:boolean = false;
  pirsBool:boolean = false;


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
    if(this.router.url.includes('/News/scicomm/A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea')){
      this.myArr = this.pirs;
      this.pirsBool = true;
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
