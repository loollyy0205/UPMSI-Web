import { MuseumDialogComponent } from './museum-dialog/museum-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-museum-exhibits',
  templateUrl: './museum-exhibits.component.html',
  styleUrls: ['./museum-exhibits.component.css']
})
export class MuseumExhibitsComponent implements OnInit {
  photos1 = [
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018361/Resources/MMNC/MMNC_25_cdkqlx.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018361/Resources/MMNC/MMNC_22_j8eaqk.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018359/Resources/MMNC/MMNC_24_g9odwl.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018359/Resources/MMNC/MMNC_16_rh88vp.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018359/Resources/MMNC/MMNC_23_kjggyp.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018359/Resources/MMNC/MMNC_13_mdodoj.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018357/Resources/MMNC/MMNC_21_qkw2d6.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018357/Resources/MMNC/MMNC_19_cznsyt.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018356/Resources/MMNC/MMNC_11_q7lev1.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018356/Resources/MMNC/MMNC_20_q38c5m.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018354/Resources/MMNC/MMNC_17_ga7llr.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018354/Resources/MMNC/MMNC_15_g7zeax.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018352/Resources/MMNC/MMNC_12_hztfrj.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018352/Resources/MMNC/MMNC_18_g4uptw.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018350/Resources/MMNC/MMNC_14_evxj7n.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018350/Resources/MMNC/MMNC_9_wylo5p.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018350/Resources/MMNC/MMNC_10_kt0z7w.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018350/Resources/MMNC/MMNC_6_xgooso.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018349/Resources/MMNC/MMNC_8_pgdeqt.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018349/Resources/MMNC/MMNC_3_wmbjte.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018349/Resources/MMNC/MMNC_4_pazhiu.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018349/Resources/MMNC/MMNC_5_v5l1e9.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018349/Resources/MMNC/MMNC_7_f5cxny.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018348/Resources/MMNC/MMNC_2_r47cqu.jpg'},
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1629018347/Resources/MMNC/MMNC_1_qsbx7b.jpg'},
  ];

  cellToShow:number = 3;
  height:any = '65%';

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
    let x = window.matchMedia("(max-width: 768px)");

    if (x.matches) { // If media query matches
      this.cellToShow = 2;
      this.height = 'auto';
    }
  }

  openDialog(imgSrc, i){
    this.dialog.open(MuseumDialogComponent, {
      height: this.height,
      width: 'auto',
      data: {
        imgSrc: imgSrc, i
      }
    });
  }

  mmnc() {
    this.router.navigate(['/Resources/museum-&-exhibits', 'Mobile-Marine-and-Naval-Centrum'])
  }
}
