import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-press-content',
  templateUrl: './press-content.component.html',
  styleUrls: ['./press-content.component.css']
})
export class PressContentComponent implements OnInit {
  news=[
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage3.jpg", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    ];
  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  moreMsiNews(){
    this.router.navigate(['News/content']);
  }
}
