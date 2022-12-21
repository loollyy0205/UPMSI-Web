import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news-branch',
  templateUrl: './news-branch.component.html',
  styleUrls: ['./news-branch.component.css']
})
export class NewsBranchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  /** newsContent(){
    this.router.navigate(['/News/content', 'Blue-Beat-Initiative']);
  }*/

  newsContent(){
    this.router.navigate(['/News/content', 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard']);
  }

  newsContent1(){
    this.router.navigate(['/News/content', '2022-Golden-Goose-Award']);
  }
  newsContent2(){
    this.router.navigate(['/News/content', 'The-Case-For-Marine-Scientific-Research']);
  }
  
  newsContent3(){
    this.router.navigate(['/News/scicomm', 'The-First-Of-Many']);
  }
}
