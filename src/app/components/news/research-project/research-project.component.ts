import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-research-project',
  templateUrl: './research-project.component.html',
  styleUrls: ['./research-project.component.css']
})
export class ResearchProjectComponent implements OnInit {
  researchOpp=[
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor sit amet", subtitle: 'Juan Dela Cruz, February 21, 2019', content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
