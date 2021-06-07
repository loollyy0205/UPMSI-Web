import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-vacancies',
  templateUrl: './more-vacancies.component.html',
  styleUrls: ['./more-vacancies.component.css']
})
export class MoreVacanciesComponent implements OnInit {
  vacancies= [
  /**
  edited: changed writter to writers in 1st article
  */
    {image: 'https://dc585.4shared.com/img/tKX0D7_lea/s24/179b20e6b40/crop1?async&rand=0.21103768418055657', title: 'Q.A, Copywriters, Content Writers', date:'April 09, 2021'},
    {image: 'https://dc585.4shared.com/img/0h7K157Xea/s24/179b20e6f28/crop2?async&rand=0.5044312217296254', title: 'University Research Associate II (SG-14)', date:'March 17, 2021'},
    {image: 'https://dc585.4shared.com/img/RX59GjISiq/s24/179b20e7310/crop3?async&rand=0.7073458443341203', title: 'University Research Associate II (SG-14)', date:'March 05, 2021'},
    {image: 'https://dc585.4shared.com/img/H9c2Zpqriq/s24/179b20e76f8/crop4?async&rand=0.697827759464791', title: 'Full Time Research Associate II (SG-14)', date:'February 20, 2021'},
    ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'job-opportunity-msi-apr9']);
        break;
      case 1:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'job-opportunity-msi-mar17']);
        break;
      case 2:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'job-opportunity-msi-mar05']);
        break;
      case 3:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'job-opportunity-msi-feb20']);
        break;
    }
  }

}
