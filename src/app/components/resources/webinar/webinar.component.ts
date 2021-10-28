import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-webinar',
  templateUrl: './webinar.component.html',
  styleUrls: ['./webinar.component.css']
})
export class WebinarComponent implements OnInit {
  news=[
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1635381571/Resources/Webinars/248946561_597393174776028_7895454848903344494_n_pprsub.png",  title: "Resilient Coastal Livelihoods and Ecosystems", content: 'The webinar "Resilient Coastal Livelihoods and Ecosystems" was held on October 25, 2021 via ...'},
    
    
 
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/Resources/webinar', 'resilient-coastal-livelihoods-and-ecosystems']);
        break;
      
    }

  }

}
