import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-masters-forms',
  templateUrl: './masters-forms.component.html',
  styleUrls: ['./masters-forms.component.css']
})
export class MastersFormsComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;

   acadCont = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650412696/Academics/masters/1_1_tndfqt.jpg', title: 'Marine Biology', content: 'Marine biology not only examines organisms individually, but also considers their interactions with the other members of their ecosystems. Graduate students who major in Marine Biology are required to take MS 210 (Physical Ocean), MS 220 (Chemical Ocean), and MS 240 (Biological Ocean).'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650412696/Academics/masters/2_1_kqhki1.png', title: 'Marine Physical Sciences', content: `The physical sciences branch of marine science attempts to understand the physical, chemical and geological patterns and processes of the coastal and open oceans. Graduate students who major in Marine Physical Sciences are required to take MS 210 (Physical Ocean), MS 220 (Chemical Ocean), MS 230 (Geological Ocean), and MS 240 (Biological Ocean).`},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650412696/Academics/masters/3_1_f2av2m.jpg', title: 'Marine Biotechnology', content: `Through marine biotechnology, molecular biological approaches are used to understand the phylogeny of marine organisms, and identify and develop natural products for various applications. Graduate students who major in Marine Biology are required to take MS 240 (Biological Ocean), MS 270 (Biochemistry of Marine Organisms), and MS 272 (Marine Biotechnology I). For their fourth course, they may choose between MS 210 (Physical Oceanography) and MS 220 (Chemical Oceanography).`},
    ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
