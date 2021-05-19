import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-vacancies',
  templateUrl: './more-vacancies.component.html',
  styleUrls: ['./more-vacancies.component.css']
})
export class MoreVacanciesComponent implements OnInit {
  vacancies= [
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-01.jpg?alt=media&token=57ac679c-f417-43e7-9efa-f10f52cc8a65', title: 'Q.A, Copywritter, Content Writter', date:'April 09, 2021'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-03.jpg?alt=media&token=68b9953b-0e0c-4d93-99ab-a2fec44e1a79', title: 'University Research Associate II (SG-14)', date:'March 17, 2021'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-02.jpg?alt=media&token=fa596e87-a976-4409-9386-655321f8d77d', title: 'University Research Associate II (SG-14)', date:'March 05, 2021'},
    {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-04.jpg?alt=media&token=d62a9490-e8ee-4b95-aec1-ef55cd8babc9', title: 'Full Time Research Associate II (SG-14)', date:'February 20, 2021'},
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
