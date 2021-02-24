import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
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
  headlineArr = [];
  headline1:string;
  headline2:string;
  headline3:string;
  headline4:string;

  constructor(private fetch:UploadFetchService) { }

  ngOnInit(): void {
    this.fetch.onFetchHomeHeadline().subscribe(resData => {
      this.headlineArr = resData;
      this.headline1 = resData[0].headline
      this.headline2 = resData[1].headline
      this.headline3 = resData[2].headline
      this.headline4 = resData[3].headline
    })

  }


}
