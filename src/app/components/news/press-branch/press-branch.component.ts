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
    this.router.navigate(['/Press/content']);
  }

  newsContent(){
    // this.router.navigate(['/News/content']);
  }
}
