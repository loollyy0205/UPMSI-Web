import { ShipAssetsComponent } from './../ship-assets.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-ship-assets-dialog',
  templateUrl: './ship-assets-dialog.component.html',
  styleUrls: ['./ship-assets-dialog.component.css']
})
export class ShipAssetsDialogComponent implements OnInit {
  imgSrc:string;

  professors = [
    {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/246924281_261596472426730_7069209798158484843_n_rgwang.jpg', name: 'Capt. Edgardo B. Cruz', title1: 'Master',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/246924281_261596472426730_7069209798158484843_n_rgwang.jpg', name: 'C/O Abraham Q. Quindoy Jr.', title1: 'Chief Officer',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/246902179_3046296712305666_7022591525587063947_n_pawtcd.jpg', name: '2/O Reyan S. Maalihan', title1: 'Second Officer',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287865/Facilities/4%20Floating%20Assets/crew/247053163_668457317454054_82604722284351304_n_z6y12o.jpg', name: '2/E Ricky I Villaruel',  title1: 'Second Engineer',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/246948155_842906909740409_3559305746756473599_n_qxguty.jpg', name: 'A/B1 Michael C. Manalo',  title1: 'Able Bodied Seaman',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/246930571_1093711201384776_8444379466768210463_n_hnwlp4.jpg', name: 'BSN. Leonardo S. Bagtong',  title1: 'Buson',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/247038596_611712206855943_4655780033757611587_n_zd9inz.jpg', name: 'A/B2 Jeffrey S. Idor',  title1: 'Able Bodied Seaman',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/246870210_252636126820929_7556828600226851234_n_vkqlfn.jpg', name: 'OLR Reynald P. Nietes',  title1: 'Oiler',
    publication:[
    ]},

   {image: 'https://res.cloudinary.com/upmsi/image/upload/v1641287864/Facilities/4%20Floating%20Assets/crew/246870210_252636126820929_7556828600226851234_n_vkqlfn.jpg', name: 'John Rey M. Nepumoceno',  title1: 'Chief Cook',
    publication:[
    ]},
   

   
  ];
  myArr = [];

  publi:boolean = false;

  constructor(public dialogRef: MatDialogRef<ShipAssetsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.myArr = this.professors.filter(res => res.name === this.data.imgSrc);
    console.log(this.data.imgSrc);
  }


}
