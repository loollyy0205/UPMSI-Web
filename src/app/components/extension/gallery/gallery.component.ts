import { Router } from '@angular/router';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
})
export class GalleryComponent implements OnInit {
  // imageObject: Array<object> = [{
  //   image: '../../../../assets/photos/lab2.jpg',
  //   thumbImage: '../../../../assets/photos/lab2.jpg',
  //   alt: 'Inductive Seawater Inductivity Sensor',
  //   title: 'Inductive Seawater Inductivity Sensor'
  // }, {
  //     image: '../../../../assets/photos/lab3.png',
  //     thumbImage: '../../../../assets/photos/lab3.png',
  //     title: 'Coral Reef',
  //     alt: 'Coral Reef'
  // }, {
  //   image: '../../../../assets/photos/r1.JPG',
  //   thumbImage: '../../../../assets/photos/r1.JPG',
  //   title: 'Sea Creatures',
  //   alt: 'Sea Creatures'
  // }, {
  //   image: '../../../../assets/photos/r2.JPG',
  //   thumbImage: '../../../../assets/photos/r2.JPG',
  //   title: 'Reefs in Aquariums',
  //   alt: 'Reefs in Aquariums'
  // }, {
  //   image: '../../../../assets/photos/news3.jpeg',
  //   thumbImage: '../../../../assets/photos/news3.jpeg',
  //   title: 'Ship',
  //   alt: 'Ship'
  // }, {
  //   image: '../../../../assets/photos/lab.JPG',
  //   thumbImage: '../../../../assets/photos/lab.JPG',
  //   title: 'Bolinao Marine Laboratory',
  //   alt: 'Bolinao Marine Laboratory'
  // }
  // ];

  photos1 = [{image: '../../../../assets/photos/sampleImage1.jpg'},
  {image: '../../../../assets/photos/sampleImage2.jpg'},
  {image: '../../../../assets/photos/sampleImage3.jpg'},
  {image: '../../../../assets/photos/sampleImage1.jpg'},
  {image: '../../../../assets/photos/sampleImage2.jpg'},
  {image: '../../../../assets/photos/sampleImage3.jpg'}]

  photos2 = [
  {image: '../../../../assets/photos/sampleImage2.jpg'},
  {image: '../../../../assets/photos/sampleImage3.jpg'},
  {image: '../../../../assets/photos/sampleImage1.jpg'},
  {image: '../../../../assets/photos/sampleImage2.jpg'},
  {image: '../../../../assets/photos/sampleImage3.jpg'},]

  height:string = '500px';
  width:string = '1100px';

  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth <= 1445 && this.innerWidth >= 768) {
    this.height= '500px';
    this.width = '1100px';
  } else if (this.innerWidth <= 1665 && this.innerWidth >= 1446) {
    this.height= '580px';
    this.width = '1200px';
  }else if (this.innerWidth <= 1865 && this.innerWidth >= 1666) {
    this.height= '660px';
    this.width = '1400px';
  }else if (this.innerWidth <= 2065 && this.innerWidth >= 1866) {
    this.height= '740px';
    this.width = '1600px';
  }else if (this.innerWidth <= 2265 && this.innerWidth >= 2066) {
    this.height= '820px';
    this.width = '1800px';
  }else if (this.innerWidth <= 2465 && this.innerWidth >= 2266) {
    this.height= '900px';
    this.width = '2000px';
  }else if (this.innerWidth <= 2665 && this.innerWidth >= 2466) {
    this.height= '980px';
    this.width = '2200px';
  }else if (this.innerWidth <= 2865 && this.innerWidth >= 2560) {
    this.height= '1060px';
    this.width = '2400px';
  }
}

  constructor(public dialog: MatDialog, private upl:UploadFetchService, private router:Router) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

  openDialog(imgSrc){
    this.dialog.open(ImageDialogComponent, {
      height: this.height,
      width: this.width,
      data: {
        imgSrc: imgSrc
      }
    });
  }

  allPhotos(title, photos){
    const name = (<HTMLParagraphElement>title.target).innerText;
    // console.log({name, photos})

    this.upl.sendData({name,photos});
    this.router.navigate(['/Extension/gallery/images'])
  }
}
