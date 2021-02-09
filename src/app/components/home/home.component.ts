import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  images = [
    {path: "../../../assets/photos/turtle.jpg"},
    {path: "../../../assets/photos/news1.jpeg"},
    {path: "../../../assets/photos/extension.jpg"},
    {path: "../../../assets/photos/resources.jpg"},
  ];
  constructor() { }

  ngOnInit(): void {

  }


}
