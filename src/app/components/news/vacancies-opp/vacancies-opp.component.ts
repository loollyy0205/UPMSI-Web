import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vacancies-opp',
  templateUrl: './vacancies-opp.component.html',
  styleUrls: ['./vacancies-opp.component.css']
})
export class VacanciesOppComponent implements OnInit {
  apr9 = [
    {thumbnail: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-full-01.jpg?alt=media&token=565676aa-cab2-441f-929a-9ade865644ca'}
  ]
  mar17 = [
    {thumbnail: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-full-02.jpg?alt=media&token=093068c2-7e82-494c-8bd5-d48160a7cf0f'}
  ]
  mar05 = [
    {thumbnail: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-full-03.jpg?alt=media&token=c8c1af5a-a6d7-4c51-b3c4-f199cc94ceab'}
  ]
  feb20 = [
    {thumbnail: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/vacancies%2Fvac-full-04.jpg?alt=media&token=0827af02-d393-4bf6-b262-5a10ff24ac15'}
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
