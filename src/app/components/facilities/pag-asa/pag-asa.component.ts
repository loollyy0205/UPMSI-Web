import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pag-asa',
  templateUrl: './pag-asa.component.html',
  styleUrls: ['./pag-asa.component.css']
})
export class PagAsaComponent implements OnInit {

  readMore:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoFacilities(){
    this.router.navigate(['/Facilities/floating-assets']);
  }
}
