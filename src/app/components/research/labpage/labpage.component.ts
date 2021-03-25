import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labpage',
  templateUrl: './labpage.component.html',
  styleUrls: ['./labpage.component.css']
})
export class LabpageComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoResearch(){
    this.router.navigate(['/Research/laboratories']);
  }

}
