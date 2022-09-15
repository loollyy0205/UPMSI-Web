import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-vacancies',
  templateUrl: './more-vacancies.component.html',
  styleUrls: ['./more-vacancies.component.css']
})
export class MoreVacanciesComponent implements OnInit {
  vacancies= [
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1663238961/News/Announcements%20Icons/mmbl-posting-crop_sj6lfz.png', title: 'Research Personnel & Potential Student', date: ''},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1646265290/News/MB-crop_mpdihx.png', title: 'Marine Biologist', date: ''},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1646265290/News/CO-crop_buzuqs.png', title: 'Chemical Oceanographer or Marine Chemist'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1648545015/News/pmtmem_chemoce-poster_rli9xo.png', title: 'Opening: Faculty Positions'},

   
    ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreContent(i){
    switch(i) {
       case 0:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'Research-Personnel&Potential-Student']);
        break;
      case 0:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'Marine-Biologist']);
        break;
      case 1:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'Chemical-Oceanographer']);
        break;
      case 2:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'Faculty-Positions']);
        break;    
     
    }
  }

}
