import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alan-content',
  templateUrl: './alan-content.component.html',
  styleUrls: ['./alan-content.component.css']
})
export class AlanContentComponent implements OnInit {
 


charlon = [{
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1632802602/News/Features/charlon/Colony_145_-_rapid_sampling-2_krb6md.jpg',
    thumbnail2: 'https://res.cloudinary.com/upmsi/image/upload/v1632803414/News/Features/charlon/Optimized-Charlon_m0qfbc.jpg',
    thumbnail3: 'https://res.cloudinary.com/upmsi/image/upload/v1633077311/News/Features/charlon/For_Web_2x-2_jqbox0.png',
    thumbnail4: 'https://res.cloudinary.com/upmsi/image/upload/v1633077308/News/Features/charlon/for-mobile-2_hufvyo.png',
    
    locationContent: '',
  }];



   

  myArr = [];
  
  charlonBool:boolean = false;

  
  


  constructor(private router:Router) { }

  ngOnInit(): void {
    // switch(this.router.url) {
    //   case '/News/scicomm/against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community':
    //     this.myArr = this.giantclam;
    //     this.giantclamBool = true;
    //     break;
    // }

   
  
   if(this.router.url.includes('/News/alan/coral-propagation')){
      this.myArr = this.charlon;
      this.charlonBool = true;
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
