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
    this.router.navigate(['/News/press-coverage-headlines/Balik-Scientist-names-6-Seaweed-Genera']);
  }

  newsContent1(){
    this.router.navigate(['/News/press-coverage-headlines/UP-experts-set-sail']);
  }

  newsContent2(){
    this.router.navigate(['/News/press-coverage-headlines/West-PH-Sea']);
  }

  newsContent3(){
    this.router.navigate(['/News/press-coverage-headlines/island-unveiled']);
  }
}
