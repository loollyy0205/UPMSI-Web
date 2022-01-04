import { Component, OnInit } from '@angular/core';
import { ShipAssetsDialogComponent } from './ship-assets-dialog/ship-assets-dialog.component';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-ship-assets',
  templateUrl: './ship-assets.component.html',
  styleUrls: ['./ship-assets.component.css']
})
export class ShipAssetsComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;

   residentProf1 = [
    {name: 'Capt. Edgardo B. Cruz', label1: 'Master'},
    {name: 'C/O Abraham Q. Quindoy Jr.', label1: 'Chief Officer'},
    {name: '2/O Reyan S. Maalihan', label1: 'Second Officer'},
    {name: '2/E Ricky I Villaruel', label1: 'Second Engineer'},
    {name: 'A/B1 Michael C. Manalo', label1: 'Able Bodied Seaman'},
  ];

   residentProf2 = [
    {name: 'BSN. Leonardo S. Bagtong', label1: 'Buson'},
    {name: 'A/B2 Jeffrey S. Idor', label1: 'Able Bodied Seaman'},
    {name: 'OLR Reynald P. Nietes', label1: 'Oiler'},
    {name: 'John Rey M. Nepumoceno', label1: 'Chief Cook'},

  ];

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

   scrollUp(event){
    setTimeout(() => {
      this.scroll(event.path[3].attributes[1].nodeValue);
    }, 200);
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView(true);
  }

  openDialog(imgSrc){
    this.dialog.open(ShipAssetsDialogComponent, {
      height: 'auto',
      width: 'auto',
      data: {
        imgSrc: imgSrc
      }
    });
  }

}
