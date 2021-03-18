import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryComponent } from '../../extension/gallery/gallery.component';

@Component({
  selector: 'app-facilities-dialog',
  templateUrl: './facilities-dialog.component.html',
  styleUrls: ['./facilities-dialog.component.css']
})
export class FacilitiesDialogComponent implements OnInit {
  imgSrc:string;

  constructor(public dialogRef: MatDialogRef<GalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.imgSrc = this.data.imgSrc;
  }

}
