import { GalleryComponent } from './../gallery.component';
import { Component, Inject, OnInit, HostListener  } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
// import { RIGHT_ARROW, LEFT_ARROW } from '@angular/cdk/keycodes';

export enum KEY_CODE {
  RIGHT_ARROW = 39,
  LEFT_ARROW = 37
}

@Component({
  selector: 'app-image-dialog',
  templateUrl: './image-dialog.component.html',
  styleUrls: ['./image-dialog.component.css']
})
export class ImageDialogComponent implements OnInit {
  imgSrc:string;
  imgIndex:number;
  lastIndex:number;
  myArr = [];

  constructor(public dialogRef: MatDialogRef<GalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

    @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
      if(event.key == 'ArrowRight') {
        if(this.imgIndex < this.lastIndex) {
          this.next();
        }
      }else if(event.key == 'ArrowLeft') {
        if(this.imgIndex > 0){
          this.previous();
        }
      }
    }

  ngOnInit(): void {
    this.imgIndex = this.data.i;
    this.myArr = this.data.imgSrc;
    this.imgSrc = this.myArr[this.data.i].image;
    this.lastIndex = this.myArr.length - 1;
  }

  next() {
    const dataNext:number = this.imgIndex + 1
    this.imgIndex = dataNext;
    this.imgSrc = this.myArr[dataNext].image;
  }

  previous () {
    const dataNext:number = this.imgIndex - 1
    this.imgIndex = dataNext;

    this.imgSrc = this.myArr[dataNext].image;
  }

}
