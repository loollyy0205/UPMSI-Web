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
    this.router.navigate(['/News/press-coverage-headlines/UP-Marine-Science-Institute-opens-research-hub-on-Pag-asa-Island']);
  }

  newsContent1(){
    this.router.navigate(['/News/press-coverage-headlines/Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-Emden-Deep']);
  }

  newsContent2(){
    this.router.navigate(['/News/press-coverage-headlines/SONA-UP-Marine-Science-Institute-nanawagan-na-protektahan-ang-ating-EEZ']);
  }

  newsContent3(){
    this.router.navigate(['/News/press-coverage-headlines/Manila-Bay-rehabilitasyon-o-reklamasyon']);
  }
}
