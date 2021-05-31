import { MuseumExhibitsComponent } from './../museum-exhibits.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-museum-dialog',
  templateUrl: './museum-dialog.component.html',
  styleUrls: ['./museum-dialog.component.css']
})
export class MuseumDialogComponent implements OnInit {
  imgSrc:string;
  imgIndex:number;
  lastIndex:number;
  myArr = [];

  constructor(public dialogRef: MatDialogRef<MuseumExhibitsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

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
