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

   

  myArr = [];
  giantclamBool:boolean = false;
  charlonBool:boolean = false;
  habsBool:boolean = false;
  
  


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
