import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-BBI-vid',
  templateUrl: './BBI-vid.component.html',
  styleUrls: ['./BBI-vid.component.css']
})
export class BBIVidComponent implements OnInit {

  news=[
    
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
