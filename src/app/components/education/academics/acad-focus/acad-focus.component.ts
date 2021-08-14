import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acad-focus',
  templateUrl: './acad-focus.component.html',
  styleUrls: ['./acad-focus.component.css']
})
export class AcadFocusComponent implements OnInit {
  instituteCont = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981421/Academics/acad-sub/02-marine-bio-thumbnail_t8pwpc.jpg', title: 'MARINE BIOLOGY', content: 'Marine biology not only examines organisms individually, but also considers their interactions with the other members of their ecosystems. Graduate students who major in Marine Biology are required to take MS 210 (Physical Ocean), MS 220 (Chemical Ocean), and MS 240 (Biological Ocean).'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981422/Academics/acad-sub/2.1-physical-sciences-thumbnail_ynqbyi.jpg', title: 'MARINE PHYSICAL SCIENCES', content: `The physical sciences branch of marine science attempts to understand the physical, chemical and geological patterns and processes of the coastal and open oceans. Graduate students who major in Marine Physical Sciences  are required to take MS 210 (Physical Ocean), MS 220 (Chemical Ocean), MS 230 (Geological Ocean), and MS 240 (Biological Ocean).`},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981423/Academics/acad-sub/2.3-marine-biotech-thumbnail_yvhbyw.jpg', title: 'MARINE BIOTECHNOLOGY', content: `Through marine biotechnology, molecular biological approaches are used to understand the phylogeny of marine organisms, and identify and develop natural products for various applications. Graduate students who major in Marine Biology are required to take MS 240 (Biological Ocean), MS 270 (Biochemistry of Marine Organisms), and MS 272 (Marine Biotechnology I). For their fourth course, they may choose between MS 210 (Physical Oceanography) and MS 220 (Chemical Oceanography).`},
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
