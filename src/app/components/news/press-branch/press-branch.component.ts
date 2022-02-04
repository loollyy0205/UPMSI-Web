import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press-branch',
  templateUrl: './press-branch.component.html',
  styleUrls: ['./press-branch.component.css']
})
export class PressBranchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  pressContent(){
    this.router.navigate(['/News/press-coverage-headlines/']);
  }

  newsContent(){
    this.router.navigate(['/News/press-coverage-headlines/Research-facility']);
  }

  newsContent1(){
    this.router.navigate(['/News/press-coverage-headlines/Research-station']);
  }

  newsContent2(){
    this.router.navigate(['/News/press-coverage-headlines/Team-of-PH']);
  }

  newsContent3(){
    this.router.navigate(['/News/press-coverage-headlines/station-opens']);
  }
}
