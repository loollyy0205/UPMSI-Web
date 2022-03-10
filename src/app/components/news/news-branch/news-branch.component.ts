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
    this.router.navigate(['/News/content', 'The-Case-For-Marine-Scientific-Research']);
  }

  newsContent1(){
    this.router.navigate(['/News/scicomm', 'The-First-Of-Many']);
  }
  newsContent2(){
    this.router.navigate(['/News/content', 'UP-MSI-MERF-host-short-courses-on-skills-development-for-Philippine-Coast-Guard']);
  }
  
  newsContent3(){
    this.router.navigate(['/News/content', 'A-Revived-Pag-asa-Island-Research-Station-Strengthens-Philippine-Marine-Scientific-Research-in-the-West-Philippine-Sea']);
  }
}
