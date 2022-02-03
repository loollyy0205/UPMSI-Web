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
  
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628147007/News/crop1_n1jb3u.jpg', title: 'Q.A, Copywriters, Content Writers', date:'April 09, 2021'},
    */
   
    ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreContent(i){
    switch(i) {
      /**
      case 0:
        this.router.navigate(['/News/vacancies-&-opportunities/', 'job-opportunity-msi-apr9']);
        break;
     */
    }
  }

}
