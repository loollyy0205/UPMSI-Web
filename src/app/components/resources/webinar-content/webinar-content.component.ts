import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webinar-content',
  templateUrl: './webinar-content.component.html',
  styleUrls: ['./webinar-content.component.css']
})
export class WebinarContentComponent implements OnInit {
  first = [{
    title: 'Resilient Coastal Livelihoods and Ecosystems',
    date: 'October 25, 2021',
    photoContent: '',
    thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1635379963/Resources/Webinars/245622758_1274692192953084_8707796824964279474_n_xqy1et.jpg',
    locationContent: '',
    paragraph1: '',
    paragraph2: ``,
    paragraph3: ``,
    paragraph4: '',
  }];

  second= [{
    
    photoContent: '-)',

    locationContent: '',
    paragraph1: '',
    paragraph2: ``,
    paragraph3: ``,
    paragraph4: '',
  }];


   

  myArr = [];
  firstBool:boolean = false;
  secondBool:boolean = false;
  
  


  constructor(private router:Router) { }

  ngOnInit(): void {
 

    if(this.router.url.includes('/Resources/webinar/resilient-coastal-livelihoods-and-ecosystems')){
      this.myArr = this.first;
      this.firstBool = true;
    }

  
   if(this.router.url.includes('/Resources/webinar/2-Resilient-Coastal-Livelihoods-and-Ecosystems')){
      this.myArr = this.second;
      this.secondBool = true;
    }
  
   
  }

  toWeb(){
    this.router.navigate(['/Resources/webinar']);
  }

  nextNews(url:string){
    this.router.navigate(['/Resources/webinar/', url]).then(() => {
      window.location.reload();
    });;
  }
}
