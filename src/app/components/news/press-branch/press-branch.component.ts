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
    this.router.navigate(['/News/press-coverage-headlines']);
  }

  newsContent(){
    this.router.navigate(['/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep']);
  }

  newsContent1(){
    this.router.navigate(['/News/press-coverage-headlines/test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth']);
  }

  newsContent2(){
    this.router.navigate(['/News/press-coverage-headlines/pinoy-scientist-gagawa-ng-kasaysayan-sa-pagsisid-sa-3rd-deepest-spot-sa-mundo']);
  }

  newsContent3(){
    this.router.navigate(['/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-to-make-history-as-1st-filipino-to-reach-3rd-deepest-spot-on-earth']);
  }
}
