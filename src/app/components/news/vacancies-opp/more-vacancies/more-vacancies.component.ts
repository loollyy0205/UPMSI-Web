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
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628147007/News/crop1_n1jb3u.jpg', title: 'Q.A, Copywriters, Content Writers', date:'April 09, 2021'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628147005/News/crop2_e6sjhv.jpg', title: 'University Research Associate II (SG-14)', date:'March 17, 2021'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628147006/News/crop3_bxg6df.jpg', title: 'University Research Associate II (SG-14)', date:'March 05, 2021'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628147007/News/crop4_akease.jpg', title: 'Full Time Research Associate II (SG-14)', date:'February 20, 2021'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629959743/News/Opening-1crop_tthqzm.png', title: 'Full Time Chemical Oceanographer or Marine Chemist', date:'September 15, 2021'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629959743/News/Opening-2crop_ycpoiw.png', title: 'Marine Biologist', date:'September 15, 2021'},
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
        case 4:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'job-opportunity-msi-new1']);
        break;
      case 5:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'job-opportunity-msi-new2']);
        break;
    }
  }

}
