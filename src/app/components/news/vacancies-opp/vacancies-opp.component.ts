import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies-opp',
  templateUrl: './vacancies-opp.component.html',
  styleUrls: ['./vacancies-opp.component.css']
})
export class VacanciesOppComponent implements OnInit {

   rp = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1663238961/News/Announcements%20Icons/mmbl-posting_auylz7.png'}
  
  ]

  mb = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1646265292/News/4e86739b-d420-4056-896d-9cfb64658aaf_anrgvs.png'}
  
  ]

   co = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1646265291/News/d251967e-7b1f-4f97-a62b-fa98e6825648_y6mpnn.png'}
  
  ]

  fp = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1648545015/News/pmtmem_chemoce-poster_rli9xo.png'}
  
  ]


  myArr = [];
   fpBool:boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
       case '/News/vacancies-&-opportunities/Research-Personnel&Potential-Student':
        this.myArr = this.rp;
        break;
        case '/News/vacancies-&-opportunities/Marine-Biologist':
        this.myArr = this.mb;
        break;
        case '/News/vacancies-&-opportunities/Chemical-Oceanographer':
        this.myArr = this.co;
        break;
        case '/News/vacancies-&-opportunities/Faculty-Positions':
        this.myArr = this.fp;
        this.fpBool = true;
        break;
      
    }
  }

  moreVancancies(){
    this.router.navigate(['News/Vacancies-and-Opportunities/more']);
  }
}
