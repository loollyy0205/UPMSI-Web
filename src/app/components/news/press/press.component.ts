import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {
  news=[
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
   ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }



}
