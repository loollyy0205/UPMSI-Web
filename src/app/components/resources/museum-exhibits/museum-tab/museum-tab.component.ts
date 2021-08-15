import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { MuseumDialogComponent } from '../museum-dialog/museum-dialog.component';

@Component({
  selector: 'app-museum-tab',
  templateUrl: './museum-tab.component.html',
  styleUrls: ['./museum-tab.component.css']
})
export class MuseumTabComponent implements OnInit {
  photos1 = [
    {name: 'Mobile Marine and Naval Centrum (MMNC)'}, {content: 'The UPMSI joined forces with the Citizen’s Support Your Navy Foundation Philippines, Inc. (CSYNFPI), the Philippine Navy, and the Department of Science and Technology to produce the Mobile Marine and Naval Centrum (MMNC). The MMNC is a roving museum of interactive exhibits that toured various sites from 2018 to 2019. Constructed to be mobile and transportable, the exhibits aim to raise awareness on ocean and maritime issues, like food security and climate change.',
    content2: 'During its year-long run, the MMNC was set up in six locations across the country. In 2018, it was showcased at the UP Diliman College of Science Administration Building and in the SM Megamall Atrium. It was on display at the Philippine Science High School Main Campus in 2019 and, in the same year, it was flown to Panay Island to be displayed at Aklan State University. The MMNC was also part of various events of the Philippine Navy.',
    content3: 'The exhibit includes educational posters, displays of ship models, interactive sets, and dioramas of marine structures and formations.'},
    {gallery: [
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
    ]}];

    dataGallery = [];
    upmroBool:boolean = false;
    constructor(public dialog:MatDialog, private router:Router) { }

    ngOnInit(): void {
      switch(this.router.url) {
        case '/Resources/museum-&-exhibits/Mobile-Marine-and-Naval-Centrum':
          this.dataGallery = this.photos1;
          break;
      }
    }

    openDialog(imgSrc, i){
      this.dialog.open(MuseumDialogComponent, {
        height: '65%',
        width: 'auto',
        data: {
          imgSrc: imgSrc, i
        }
      });
    }

    galleryTab(){
      this.router.navigate(['/Resources/museum-&-exhibits']);
    }
}
