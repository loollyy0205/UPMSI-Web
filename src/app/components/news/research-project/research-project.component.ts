import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-project',
  templateUrl: './research-project.component.html',
  styleUrls: ['./research-project.component.css']
})
export class ResearchProjectComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  toAcad(){
    this.router.navigate(['/Academics']);
  }

}
