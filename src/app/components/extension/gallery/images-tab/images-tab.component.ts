import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { Component, OnInit } from '@angular/core';
import { ImageDialogComponent } from '../image-dialog/image-dialog.component';

@Component({
  selector: 'app-images-tab',
  templateUrl: './images-tab.component.html',
  styleUrls: ['./images-tab.component.css']
})
export class ImagesTabComponent implements OnInit {
  dataGallery:{};
  constructor(private upl:UploadFetchService, public dialog:MatDialog, private router:Router) { }

  ngOnInit(): void {
    this.upl.message$.subscribe(data => {
      this.dataGallery = data
    });

    if(this.dataGallery == null){
      this.router.navigate(['/Extension/gallery'])
    }

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

  galleryTab(){
    this.router.navigate(['/Extension/gallery']);
  }

}
