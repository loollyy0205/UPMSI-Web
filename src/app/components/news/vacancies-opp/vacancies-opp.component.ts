import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies-opp',
  templateUrl: './vacancies-opp.component.html',
  styleUrls: ['./vacancies-opp.component.css']
})
export class VacanciesOppComponent implements OnInit {
  /**apr9 = [
    {thumbnail: 'https://res.cloudinary.com/upmsi/image/upload/v1628147007/News/crop1_n1jb3u.jpg'}
  ]
  */
  myArr = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/vacancies-&-opportunities/job-opportunity-msi-apr9':
        this.myArr = this.apr9;
        break;
    }
  }

  moreVancancies(){
    this.router.navigate(['News/Vacancies-and-Opportunities/more']);
  }
}
