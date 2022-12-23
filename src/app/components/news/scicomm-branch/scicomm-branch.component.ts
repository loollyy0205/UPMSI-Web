import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scicomm-branch',
  templateUrl: './scicomm-branch.component.html',
  styleUrls: ['./scicomm-branch.component.css']
})
export class ScicommBranchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent3(){
    this.router.navigate(['/News/eddy', 'fishing-in-a-vortex']);
  }
 
  newsContent2(){
    this.router.navigate(['/News/herbarium', 'herbarium-feature']);
  }

  newsContent1(){
    this.router.navigate(['/News/report', 'report-expeditions']);
  }

  newsContent(){
    this.router.navigate(['/News/sea', 'Sea-cucumber-management']);
  }
  
} 
