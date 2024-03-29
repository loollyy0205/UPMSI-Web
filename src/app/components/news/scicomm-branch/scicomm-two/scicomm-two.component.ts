import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scicomm-two',
  templateUrl: './scicomm-two.component.html',
  styleUrls: ['./scicomm-two.component.css']
})
export class ScicommTwoComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(){
    this.router.navigate(['/News/scicomm', 'against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community']);
  }
 
  newsContent1(){
    this.router.navigate(['/News/scicomm', 'two-coral-propagation']);
  }

  newsContent2(){
    this.router.navigate(['/News/scicomm', 'In-Full-Bloom']);
  }
  
} 
