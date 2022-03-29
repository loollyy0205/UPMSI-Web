import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herbarium-content',
  templateUrl: './herbarium-content.component.html',
  styleUrls: ['./herbarium-content.component.css']
})
export class HerbariumContentComponent implements OnInit {
 


herb = [{
    thumbnail: 'https://www.youtube.com/embed/p4pWafuvdrY',
    
    locationContent: '',
  }];




   

  myArr = [];
  
  herbBool:boolean = false;

  
  


  constructor(private router:Router) { }

  ngOnInit(): void {
    // switch(this.router.url) {
    //   case '/News/scicomm/against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community':
    //     this.myArr = this.giantclam;
    //     this.giantclamBool = true;
    //     break;
    // }

   
  
   if(this.router.url.includes('/News/herbarium/herbarium-feature')){
      this.myArr = this. herb;
      this. herbBool = true;
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
