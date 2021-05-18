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

  newsContent(){
    this.router.navigate(['/News/content', 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth']);
  }
  newsContent1(){
    this.router.navigate(['/News/content', 'UPMSI-scientists-receive-accolades-from-NAST']);
  }
  newsContent2(){
    this.router.navigate(['/News/content', 'all-about-the-giant-clam']);
  }
  newsContent3(){
    this.router.navigate(['/News/content', 'NARFleet-is-on-its-way-to-prowl-Philippine-waters']);
  }
}
