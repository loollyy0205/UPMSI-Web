import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  researchOpp=[
    {image: "../../../../assets/photos/ancmntImage1.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid, libero totam ad quam architecto! Ut velit dolores ipsam aliquid, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/ancmntImage2.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/ancmntImage3.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/ancmntImage4.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid, , libero totam ad quam architecto! Ut velit dolores ipsam aliquid, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/ancmntImage1.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/ancmntImage2.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/ancmntImage3.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
    {image: "../../../../assets/photos/ancmntImage4.png", title: "Lorem ipsum dolor sit amet", content: 'Lorem ipsum, dolor sit amet con adipisicing elit. Vel repellat nostrum voluptatibus sint porro consequuntur, libero totam ad quam architecto! Ut velit dolores ipsam aliquid'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
