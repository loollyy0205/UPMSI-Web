import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacultyDialogComponent } from 'src/app/components/about/faculty/faculty-dialog/faculty-dialog.component';

@Component({
  selector: 'app-puerto-location',
  templateUrl: './puerto-location.component.html',
  styleUrls: ['./puerto-location.component.css']
})
export class PuertoLocationComponent implements OnInit {

  constructor(public dialog: MatDialog,) { }

  ngOnInit(): void {
  }

  openDialog(imgSrc){
    this.dialog.open(FacultyDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        imgSrc: imgSrc
      }
    });
  }
}
