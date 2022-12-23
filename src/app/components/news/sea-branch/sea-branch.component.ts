import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sea-branch',
  templateUrl: './sea-branch.component.html',
  styleUrls: ['./sea-branch.component.css']
})
export class SeaBranchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(){
    this.router.navigate(['/News/alan', 'coral-propagation']);
  }

 
  
} 
