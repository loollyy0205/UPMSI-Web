import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alan-branch',
  templateUrl: './alan-branch.component.html',
  styleUrls: ['./alan-branch.component.css']
})
export class AlanBranchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(){
    this.router.navigate(['/News/alan', 'coral-propagation']);
  }

 
  
} 
