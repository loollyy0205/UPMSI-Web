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
    this.router.navigate(['/News/content']);
  }
}
