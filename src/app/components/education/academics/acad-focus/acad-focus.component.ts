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

    acadCont1 = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650857792/Academics/masters/masters-banner.1_bsoyvm.png', title: 'Master’s Program', content: 'Students can choose to major in Marine Biology, Marine Physical Sciences, or Marine Biotechnology. The MSc program aims to provide basic understanding of the nature of biological and physical processes in the ocean, as well as rigorous training in formulating and carrying out independent research.'},
    

    ]

    acadCont2 = [
   
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650858166/Academics/phd/phd-banner.2_km4p9a.png', title: 'PhD/Doctoral Program', content: `The Ph.D. Program in Marine Science (Marine Biology, Marine Physical Sciences, and Marine Biotechnology) aims to provide advanced education on the sciences of the sea with emphasis on the dynamics of marine life, in preparation for careers as high-level marine scientists in academic, research, and other institutions in the public and private sector.`},
    

    ]

    acadCont3 = [
    
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650857693/Academics/pm-tmem/banner-PMTMEM.1_n66zlg.png', title: 'PM-TMEM', content: `The Professional Masters in Tropical Marine Ecosystems Management (PM-TMEM) is designed for professionals who wish to pursue careers in government, civil service organization, and private sector involving the management and governance of tropical marine ecosystems.
`},
    ]
  constructor() { }

  ngOnInit(): void {
  }

}
