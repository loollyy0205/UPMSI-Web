import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreVacancies(){
    this.router.navigate(['News/Vacancies-and-Opportunities/more']);
  }

  moreResearchOpp(){
    this.router.navigate(['/News/Research-projects-and-highlights']);
  }

  moreNews(){
    this.router.navigate(['/News/news-headlines']);
  }

  newsContent(){
    this.router.navigate(['/News/']);
  }


  gotoAnnouncement(){
    this.router.navigate(['/News/Announcement/content']);
  }

  announcement(){
    this.router.navigate(['/News/Announcement']);
  }

  press(){
    this.router.navigate(['/News/press-coverage-headlines']);
  }
}
