import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-herbarium',
  templateUrl: './herbarium.component.html',
  styleUrls: ['./herbarium.component.css']
})
export class HerbariumComponent implements OnInit {
  readMore:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
}
