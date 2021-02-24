import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {
  @ViewChild('imgfirstInput') firstImage: ElementRef;
  @ViewChild('imgsecondInput') secondImage: ElementRef;
  @ViewChild('imgthirdInput') thirdImage: ElementRef;
  @ViewChild('imgfourthInput') fourthImage: ElementRef;


  imgBool1:boolean = false;
  imgBool2:boolean = false;
  imgBool3:boolean = false;
  imgBool4:boolean = false;

  titleBool1:boolean = false;
  titleBool2:boolean = false;
  titleBool3:boolean = false;
  titleBool4:boolean = false;

  contentBool1:boolean = false;
  contentBool2:boolean = false;
  contentBool3:boolean = false;
  contentBool4:boolean = false;

  linkBool1:boolean = false;
  linkBool2:boolean = false;
  linkBool3:boolean = false;
  linkBool4:boolean = false;

  headlineArr = [];
  headline1:string;
  headline2:string;
  headline3:string;
  headline4:string;

  contentArr = [];
  content1:string;
  content2:string;
  content3:string;
  content4:string;

  linkArr = [];
  link1:string;
  link2:string;
  link3:string;
  link4:string;
  constructor(private upl:UploadFetchService) { }

  ngOnInit(): void {
    this.upl.onFetchHomeHeadline().subscribe( resData => {
      this.headlineArr = resData
      this.headline1 = resData[0]["headline"]
      this.headline2 = resData[1]["headline"]
      this.headline3 = resData[2]["headline"]
      this.headline4 = resData[3]["headline"]
    });

    this.upl.onFetchHomeContent().subscribe( resData => {
      this.contentArr = resData;
      this.content1 = resData[0]["content"]
      this.content2 = resData[1]["content"]
      this.content3 = resData[2]["content"]
      this.content4 = resData[3]["content"]
    })

    this.upl.onFetchHomeLink().subscribe( resData =>{
      this.linkArr = resData;
      this.link1 = resData[0]["link"]
      this.link2 = resData[1]["link"]
      this.link3 = resData[2]["link"]
      this.link4 = resData[3]["link"]
    })
  }

  headline1Info(headlineInfo){
    this.titleBool1 = false;
    const id = this.headlineArr[0].id;
    const content = headlineInfo.value;

    this.upl.onUpdateHeadline(id,content);
    alert("Save Successfully!");
  }

  headline2Info(headlineInfo){
    this.titleBool2 = false;
    const id = this.headlineArr[1].id;
    const content = headlineInfo.value;

    this.upl.onUpdateHeadline(id,content);
    alert("Save Successfully!");
  }

  headline3Info(headlineInfo){
    this.titleBool3 = false;
    const id = this.headlineArr[2].id;
    const content = headlineInfo.value;

    this.upl.onUpdateHeadline(id,content);
    alert("Save Successfully!");
  }

  headline4Info(headlineInfo){
    this.titleBool4 = false;
    const id = this.headlineArr[3].id;
    const content = headlineInfo.value;

    this.upl.onUpdateHeadline(id,content);
    alert("Save Successfully!");
  }

  content1Info(contentInfo){
    this.contentBool1 = false;
    const id = this.contentArr[0].id;
    const content = contentInfo.value;

    this.upl.onUpdateContent(id,content);
    alert("Save Successfully!");
  }

  content2Info(contentInfo){
    this.contentBool1 = false;
    const id = this.contentArr[1].id;
    const content = contentInfo.value;

    this.upl.onUpdateContent(id,content);
    alert("Save Successfully!");
  }

  content3Info(contentInfo){
    this.contentBool1 = false;
    const id = this.contentArr[2].id;
    const content = contentInfo.value;

    this.upl.onUpdateContent(id,content);
    alert("Save Successfully!");
  }

  content4Info(contentInfo){
    this.contentBool1 = false;
    const id = this.contentArr[3].id;
    const content = contentInfo.value;

    this.upl.onUpdateContent(id,content);
    alert("Save Successfully!");
  }

  link1Info(linkInfo){
    this.linkBool1 = false;
    const id = this.linkArr[0].id;
    const content = linkInfo.value;

    this.upl.onUpdateLinks(id,content);
    alert("Save Successfully!");
  }

  link2Info(linkInfo){
    this.linkBool2 = false;
    const id = this.linkArr[1].id;
    const content = linkInfo.value;

    this.upl.onUpdateLinks(id,content);
    alert("Save Successfully!");
  }

  link3Info(linkInfo){
    this.linkBool3 = false;
    const id = this.linkArr[2].id;
    const content = linkInfo.value;

    this.upl.onUpdateLinks(id,content);
    alert("Save Successfully!");
  }

  link4Info(linkInfo){
    this.linkBool4 = false;
    const id = this.linkArr[3].id;
    const content = linkInfo.value;

    this.upl.onUpdateLinks(id,content);
    alert("Save Successfully!");
  }

}
