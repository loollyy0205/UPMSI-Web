import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies-opp',
  templateUrl: './vacancies-opp.component.html',
  styleUrls: ['./vacancies-opp.component.css']
})
export class VacanciesOppComponent implements OnInit {
  apr9 = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147007/News/crop1_n1jb3u.jpg'}
  ]
  mar17 = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147005/News/crop2_e6sjhv.jpg'}
  ]
  mar05 = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147006/News/crop3_bxg6df.jpg'}
  ]
  feb20 = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147007/News/crop4_akease.jpg'}
  ]

  myArr = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/vacancies-&-opportunities/job-opportunity-msi-apr9':
        this.myArr = this.apr9;
        break;
      case '/News/vacancies-&-opportunities/job-opportunity-msi-mar17':
        this.myArr = this.mar17;
        break;
      case '/News/vacancies-&-opportunities/job-opportunity-msi-mar05':
        this.myArr = this.mar05;
        break;
      case '/News/vacancies-&-opportunities/job-opportunity-msi-feb20':
        this.myArr = this.feb20;
        break;
    }
  }

  moreVancancies(){
    this.router.navigate(['News/Vacancies-and-Opportunities/more']);
  }
}
