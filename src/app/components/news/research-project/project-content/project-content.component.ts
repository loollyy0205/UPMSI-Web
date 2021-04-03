import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-content',
  templateUrl: './project-content.component.html',
  styleUrls: ['./project-content.component.css']
})
export class ProjectContentComponent implements OnInit {
  project=[
    {image: "../../../../assets/photos/sampleImage1.jpg", title: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/sampleImage2.jpg", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    {image: "../../../../assets/photos/sampleImage3.jpg", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur'},
    ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreResearchProjects(){
    this.router.navigate(['News/Research-projects-and-highlights']);
  }


}
