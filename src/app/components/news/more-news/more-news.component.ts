import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-news',
  templateUrl: './more-news.component.html',
  styleUrls: ['./more-news.component.css']
})
export class MoreNewsComponent implements OnInit {
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

  newsContent(){
    this.router.navigate(['/News/content']);
  }

}
