import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-vacancies',
  templateUrl: './more-vacancies.component.html',
  styleUrls: ['./more-vacancies.component.css']
})
export class MoreVacanciesComponent implements OnInit {
  vacancies= [
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1646265290/News/MB-crop_mpdihx.png', title: 'Marine Biologist', date: ''},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1646265290/News/CO-crop_buzuqs.png', title: 'Chemical Oceanographer or Marine Chemist'},

   
    ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'mb']);
        break;
      case 1:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'co']);
        break;  
     
    }
  }

}
