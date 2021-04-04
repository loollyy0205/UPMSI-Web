import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { Component, OnInit } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-images-tab',
  templateUrl: './images-tab.component.html',
  styleUrls: ['./images-tab.component.css']
})
export class ImagesTabComponent implements OnInit {

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

  dataGallery:{};
  constructor(private upl:UploadFetchService, public dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;

    this.upl.message$.subscribe(data => {
      this.dataGallery = data
    });

    if(this.dataGallery == null){
      this.router.navigate(['/Extension/gallery'])
    }

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

  galleryTab(){
    this.router.navigate(['/Extension/gallery']);
  }

}
