import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eddy-content',
  templateUrl: './eddy-content.component.html',
  styleUrls: ['./eddy-content.component.css']
})
export class EddyContentComponent implements OnInit {
 


panay = [{
    thumbnail: 'https://www.youtube.com/embed/p4pWafuvdrY',
    
    locationContent: '',
  }];




   

  myArr = [];
  
  panayBool:boolean = false;

  
  


  constructor(private router:Router) { }

  ngOnInit(): void {
    // switch(this.router.url) {
    //   case '/News/scicomm/against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community':
    //     this.myArr = this.giantclam;
    //     this.giantclamBool = true;
    //     break;
    // }

   
  
   if(this.router.url.includes('/News/eddy/fishing-in-a-vortex')){
      this.myArr = this.panay;
      this.panayBool = true;
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
