import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FacultyDialogComponent } from 'src/app/components/about/faculty/faculty-dialog/faculty-dialog.component';

@Component({
  selector: 'app-pag-output',
  templateUrl: './pag-output.component.html',
  styleUrls: ['./pag-output.component.css']
})
export class PagOutputComponent implements OnInit {

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
