import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies-opp',
  templateUrl: './vacancies-opp.component.html',
  styleUrls: ['./vacancies-opp.component.css']
})
export class VacanciesOppComponent implements OnInit {
  mb = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1646265292/News/4e86739b-d420-4056-896d-9cfb64658aaf_anrgvs.png'}
  
  ]

   co = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1646265291/News/d251967e-7b1f-4f97-a62b-fa98e6825648_y6mpnn.png'}
  
  ]

  myArr = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/vacancies-&-opportunities/mb':
        this.myArr = this.mb;
        break;
        case '/News/vacancies-&-opportunities/co':
        this.myArr = this.co;
        break;
      
    }
  }

  moreVancancies(){
    this.router.navigate(['News/Vacancies-and-Opportunities/more']);
  }
}
