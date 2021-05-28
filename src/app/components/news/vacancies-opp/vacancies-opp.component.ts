import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies-opp',
  templateUrl: './vacancies-opp.component.html',
  styleUrls: ['./vacancies-opp.component.css']
})
export class VacanciesOppComponent implements OnInit {
  apr9 = [
    {thumbnail: 'https://dc585.4shared.com/img/SyHiB3ulea/s24/179b20e5f88/169570726_10160205766627323_78?async&rand=0.4963483103750912'}
  ]
  mar17 = [
    {thumbnail: 'https://dc585.4shared.com/img/F6fSJSDDea/s24/179b20e5ba0/161941672_10157998106685509_24?async&rand=0.18343630716970516'}
  ]
  mar05 = [
    {thumbnail: 'https://dc585.4shared.com/img/HZ5bHjZSea/s24/179b20e57b8/157700410_906574743443631_5420?async&rand=0.2260014347817274'}
  ]
  feb20 = [
    {thumbnail: 'https://dc585.4shared.com/img/huUuQ2h_ea/s24/179b20e4fe8/151139169_3589025434543507_473?async&rand=0.3172312285738339'}
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
