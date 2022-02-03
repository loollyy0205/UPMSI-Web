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
    this.router.navigate(['/News/scicomm', 'against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community']);
  }
 
  newsContent2(){
    this.router.navigate(['/News/scicomm', 'coral-propagation']);
  }

  newsContent1(){
    this.router.navigate(['/News/scicomm', 'In-Full-Bloom']);
  }

  newsContent(){
    this.router.navigate(['/News/alan', 'coral-propagation']);
  }
  
} 
