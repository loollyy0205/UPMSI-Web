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
    this.router.navigate(['/News/press-coverage-headlines/Maarte-sea-cucumber-bring-hope-for-stronger-covid-vax-cancer-treatment']);
  }

  newsContent1(){
    this.router.navigate(['/News/press-coverage-headlines/New-seaweed-genus-named-by-filipino-scientist']);
  }

  newsContent2(){
    this.router.navigate(['/News/press-coverage-headlines/UP-scientists-race-to-find-plastic-eating-microbes']);
  }

  newsContent3(){
    this.router.navigate(['/News/press-coverage-headlines/Umaasim-ang-Dagat']);
  }
}
