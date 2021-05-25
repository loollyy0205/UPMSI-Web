import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';

@Component({
  selector: 'app-extension',
  templateUrl: './extension.component.html',
  styleUrls: ['./extension.component.css']
})
export class ExtensionComponent implements OnInit {

  images = [
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2F01%20highlight-research-projects.jpg?alt=media&token=bb39bdce-22fc-454c-a2e4-f75beddaa499"},
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2F01-vacancies-and-opportunities.png?alt=media&token=e463eb22-60e1-404f-be90-8c06ab393d26"},
    {path: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/News%2F02-research-projects-highlights.png?alt=media&token=31574533-1128-46cd-9f68-436090dc1d7c"},
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

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    autoplaySpeed: 3500,
    dotsSpeed: 3500,
    autoplayTimeout: 4000,
    autoplay: true,
    items: 1,
    autoHeight: false,
  }
}
