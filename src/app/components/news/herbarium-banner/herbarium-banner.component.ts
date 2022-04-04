import { Component, OnInit } from '@angular/core';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-herbarium-banner',
  templateUrl: './herbarium-banner.component.html',
  styleUrls: ['./herbarium-banner.component.css']
})
export class HerbariumBannerComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplaySpeed: 3500,
    dotsSpeed: 500,
    autoplayTimeout: 8000,
    autoplay: true,
    items: 1,
    autoHeight: false,
  }

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
  headline5:string;
  headline6:string;
  headline7:string;
  headline8:string;
  headline9:string;
  headline10:string;
  headline11:string;
  headline12:string;
  headline13:string;
  headline14:string;


  bgImage1:string;
  bgImage2:string;
  bgImage3:string;
  bgImage4:string;
  bgImage5:string;
  bgImage6:string;
  bgImage7:string;
  bgImage8:string;
  bgImage9:string;
  bgImage10:string;
  bgImage11:string;
  bgImage12:string;
  bgImage13:string;
  bgImage14:string;

  content1:string;
  content2:string;
  content3:string;
  content4:string;
  content5:string;
  content6:string;
  content7:string;
  content8:string;
  content9:string;
  content10:string;
  content11:string;
  content12:string;
  content13:string;
  content14:string;

  link1:string;
  link2:string;
  link3:string;
  link5:string;
  link6:string;
  link7:string;
  link8:string;
  link9:string;
  link10:string;
  link11:string;
  link12:string;
  link13:string;
  link14:string;

  constructor(private fetch:UploadFetchService) { }

  ngOnInit(): void {
    this.fetch.onFetchHomeHeadline().subscribe(resData => {
      this.headlineArr = resData;
      this.headline1 = resData[0].headline
      this.headline2 = resData[1].headline
      this.headline3 = resData[2].headline
      this.headline4 = resData[3].headline
      this.headline5 = resData[4].headline
      this.headline6 = resData[5].headline
      this.headline7 = resData[6].headline
      this.headline8 = resData[7].headline
      this.headline9 = resData[8].headline
      this.headline10 = resData[9].headline
      this.headline11 = resData[10].headline
      this.headline12 = resData[11].headline
      this.headline13 = resData[12].headline
      this.headline14 = resData[13].headline


      this.bgImage1 = resData[0].bgImage
      this.bgImage2 = resData[1].bgImage
      this.bgImage3 = resData[2].bgImage
      this.bgImage4 = resData[3].bgImage
      this.bgImage5 = resData[4].bgImage
      this.bgImage6 = resData[5].bgImage
      this.bgImage7 = resData[6].bgImage
      this.bgImage8 = resData[7].bgImage
      this.bgImage9 = resData[8].bgImage
      this.bgImage10 = resData[9].bgImage
      this.bgImage11 = resData[10].bgImage
      this.bgImage12 = resData[11].bgImage
      tthis.bgImage13 = resData[12].bgImage
      this.bgImage14 = resData[13].bgImage
    })

    this.fetch.onFetchHomeContent().subscribe(resData => {
      this.content1 = resData[0].content;
      this.content2 = resData[1].content;
      this.content3 = resData[2].content;
      this.content4 = resData[3].content;
      this.content5 = resData[4].content;
      this.content6 = resData[5].content;
      this.content7 = resData[6].content;
      this.content8 = resData[7].content;
      this.content9 = resData[8].content;
      this.content10 = resData[9].content;
      this.content11 = resData[10].content;
      this.content12 = resData[11].content;
      this.content13 = resData[12].content;
      this.content14 = resData[13].content;
    })

    this.fetch.onFetchHomeLink().subscribe(resData => {
      this.link1 = resData[0].link;
      this.link2 = resData[1].link;
      this.link3 = resData[2].link;
      this.link4 = resData[3].link;
      this.link5 = resData[4].link;
      this.link6 = resData[5].link;
      this.link7 = resData[6].link;
      this.link8 = resData[7].link;
      this.link9 = resData[8].link;
      this.link10 = resData[9].link;
      this.link11 = resData[10].link;
      this.link12 = resData[11].link;
      this.link13 = resData[12].link;
      this.link14 = resData[13].link;
    })
  }

}
