import { HttpClient } from '@angular/common/http';
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

  @ViewChild('titleInput1') title1: ElementRef;
  @ViewChild('titleInput2') title2: ElementRef;
  @ViewChild('titleInput3') title3: ElementRef;
  @ViewChild('titleInput4') title4: ElementRef;

  @ViewChild('contentInput1') content1: ElementRef;
  @ViewChild('contentInput2') content2: ElementRef;
  @ViewChild('contentInput3') content3: ElementRef;
  @ViewChild('contentInput4') content4: ElementRef;

  @ViewChild('linkInput1') link1: ElementRef;
  @ViewChild('linkInput2') link2: ElementRef;
  @ViewChild('linkInput3') link3: ElementRef;
  @ViewChild('linkInput4') link4: ElementRef;

  imgBool:boolean = false;
  titleBool:boolean = false;
  contentBool:boolean = false;
  linkBool:boolean = false;

  headlineArr = [];
  constructor(private upl:UploadFetchService, private http:HttpClient) { }

  ngOnInit(): void {
    this.upl.onFetchHomeHeadline().subscribe( resData => {
      this.headlineArr = resData[0]
      console.log(this.headlineArr["headline1"])
    });
  }

  save(value:{name:string}){
    console.log(value)
    this.upl.onSubmit(value);
  }

  imgCancel(){
    this.imgBool = false;
    this.firstImage.nativeElement.value = "";
    this.secondImage.nativeElement.value = "";
    this.thirdImage.nativeElement.value = "";
    this.fourthImage.nativeElement.value = "";
  }

  titleCancel(){
    this.titleBool = false;
    this.title1.nativeElement.value = "";
    this.title2.nativeElement.value = "";
    this.title3.nativeElement.value = "";
    this.title4.nativeElement.value = "";
  }

  contentCancel(){
    this.contentBool = false;
    this.content1.nativeElement.value = "";
    this.content2.nativeElement.value = "";
    this.content3.nativeElement.value = "";
    this.content4.nativeElement.value = "";
  }

  linkCancel(){
    this.linkBool = false;
    this.link1.nativeElement.value = "";
    this.link2.nativeElement.value = "";
    this.link3.nativeElement.value = "";
    this.link4.nativeElement.value = "";
  }
}
