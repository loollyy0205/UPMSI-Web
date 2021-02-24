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

  bgImage1:string;
  bgImage2:string;
  bgImage3:string;
  bgImage4:string;

  content1:string;
  content2:string;
  content3:string;
  content4:string;

  link1:string;
  link2:string;
  link3:string;
  link4:string;

  constructor(private fetch:UploadFetchService) { }

  ngOnInit(): void {
    this.fetch.onFetchHomeHeadline().subscribe(resData => {
      this.headlineArr = resData;
      this.headline1 = resData[0].headline
      this.headline2 = resData[1].headline
      this.headline3 = resData[2].headline
      this.headline4 = resData[3].headline

      this.bgImage1 = resData[0].bgImage
      this.bgImage2 = resData[1].bgImage
      this.bgImage3 = resData[2].bgImage
      this.bgImage4 = resData[3].bgImage
    })

    this.fetch.onFetchHomeContent().subscribe(resData => {
      this.content1 = resData[0].content;
      this.content2 = resData[1].content;
      this.content3 = resData[2].content;
      this.content4 = resData[3].content;
    })

    this.fetch.onFetchHomeLink().subscribe(resData => {
      this.link1 = resData[0].link;
      this.link2 = resData[1].link;
      this.link3 = resData[2].link;
      this.link4 = resData[3].link;
    })

  }


}
