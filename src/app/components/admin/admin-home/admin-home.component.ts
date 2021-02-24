import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { ElementRef } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
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

  imgUrl1:string;
  imgUrl2:string;
  imgUrl3:string;
  imgUrl4:string;

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
  constructor(private upl:UploadFetchService, private af:AngularFireStorage) { }
  path1:string;
  path2:string;
  path3:string;
  path4:string;
  ngOnInit(): void {
    this.upl.onFetchHomeHeadline().subscribe( resData => {
      this.headlineArr = resData
      this.headline1 = resData[0]["headline"]
      this.headline2 = resData[1]["headline"]
      this.headline3 = resData[2]["headline"]
      this.headline4 = resData[3]["headline"]

      this.imgUrl1 = resData[0]["bgImage"]
      this.imgUrl2 = resData[1]["bgImage"]
      this.imgUrl3 = resData[2]["bgImage"]
      this.imgUrl4 = resData[3]["bgImage"]
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

  uploadImage1(event){
    this.path1 = event.target.files[0];
    // console.log(this.path["name"])
  }

  async saveImage1(){
    if (this.imgUrl1 != undefined){
      this.af.storage.refFromURL(this.imgUrl1).delete();
    }

    let snapshot: firebase.default.storage.UploadTaskSnapshot = await this.af.upload("home/"+this.path1["name"], this.path1);
    snapshot.ref.getDownloadURL().then( resData => {
      const id = this.headlineArr[0].id;
      this.upl.onUpdateImage(id,resData);
      setTimeout(() => {

        this.upl.onFetchHomeHeadline().subscribe( res => {
          this.imgUrl1 = res[0]["bgImage"]
        });
        alert("Save Successfully!");
        this.firstImage.nativeElement.value = ""
        this.imgBool1 = false;
      }, 1000);
    }
    );
  }

  uploadImage2(event){
    this.path2 = event.target.files[0];
    // console.log(this.path["name"])
  }

  async saveImage2(){
    if (this.imgUrl2 != undefined){
      this.af.storage.refFromURL(this.imgUrl2).delete();
    }

    let snapshot: firebase.default.storage.UploadTaskSnapshot = await this.af.upload("home/"+this.path2["name"], this.path2);
    snapshot.ref.getDownloadURL().then( resData => {
      const id = this.headlineArr[1].id;
      this.upl.onUpdateImage(id,resData);
      setTimeout(() => {

        this.upl.onFetchHomeHeadline().subscribe( res => {
          this.imgUrl2 = res[1]["bgImage"]
        });
        alert("Save Successfully!");
        this.secondImage.nativeElement.value = ""
        this.imgBool2 = false;
      }, 1000);
    }
    );
  }

  uploadImage3(event){
    this.path3 = event.target.files[0];
    // console.log(this.path["name"])
  }

  async saveImage3(){
    if (this.imgUrl3 != undefined){
      this.af.storage.refFromURL(this.imgUrl3).delete();
    }

    let snapshot: firebase.default.storage.UploadTaskSnapshot = await this.af.upload("home/"+this.path3["name"], this.path3);
    snapshot.ref.getDownloadURL().then( resData => {
      const id = this.headlineArr[2].id;
      this.upl.onUpdateImage(id,resData);
      setTimeout(() => {

        this.upl.onFetchHomeHeadline().subscribe( res => {
          this.imgUrl3 = res[2]["bgImage"]
        });
        alert("Save Successfully!");
        this.thirdImage.nativeElement.value = ""
        this.imgBool3 = false;
      }, 1000);
    }
    );
  }

  uploadImage4(event){
    this.path4 = event.target.files[0];
    // console.log(this.path["name"])
  }

  async saveImage4(){
    if (this.imgUrl4 != undefined){
      this.af.storage.refFromURL(this.imgUrl4).delete();
    }

    let snapshot: firebase.default.storage.UploadTaskSnapshot = await this.af.upload("home/"+this.path4["name"], this.path4);
    snapshot.ref.getDownloadURL().then( resData => {
      const id = this.headlineArr[3].id;
      this.upl.onUpdateImage(id,resData);
      setTimeout(() => {

        this.upl.onFetchHomeHeadline().subscribe( res => {
          this.imgUrl4 = res[3]["bgImage"]
        });
        alert("Save Successfully!");
        this.fourthImage.nativeElement.value = ""
        this.imgBool4 = false;
      }, 1000);
    }
    );
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
