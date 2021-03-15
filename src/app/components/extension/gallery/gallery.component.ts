import { Router } from '@angular/router';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { ImageDialogComponent } from './image-dialog/image-dialog.component';
import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

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

  constructor(public dialog: MatDialog, private upl:UploadFetchService, private router:Router) { }

  ngOnInit(): void {
  }

  openDialog(imgSrc){
    this.dialog.open(ImageDialogComponent, {
      height: '500px',
      width: '1100px',
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
