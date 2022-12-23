import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-academics',
  templateUrl: './academics.component.html',
  styleUrls: ['./academics.component.css']
})
export class AcademicsComponent implements OnInit {

acadCont1 = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1654493954/Academics/student/Ann_Elizabeth_Enova1_ovclgl.jpg', title: 'Ann Elizabeth R. Enova', content: 'ENVIRONMENT - Modeling the Transport of Pharmaceutical Pollutants in Manila Bay, Philippines'},
    

    ]
     acadCont2 = [
   
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1654588981/Academics/student/ZAA2_pic_rbguj5.jpg', title: 'Zae-Zae A. Aguinaldo', content: ``},
    

    ]

    acadCont3 = [
    
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1654493953/Academics/student/Shalice_Susana1_zitbso.jpg', title: 'Shalice D. Susana', content: ``},
    ]

    acadCont4 = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1654493621/Academics/student/PosadasN_ID_buwzvs.jpg', title: 'Niño Dan G. Posadas', content: 'BIODIVERSITY - Gene Co-Expression Network Analysis Identifies Lineage-Specific XBP1 Associated with the Stress Response of a Calcareous Sponge'},
    

    ]
     acadCont5 = [
   
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1654588982/Academics/student/Blaire_Padayhag1_bmxxkr.jpg', title: 'Blaire M. Padayhag', content: `BIODIVERSITY - Microbial Community Structure and Settlement Induction Capacity of Marine Biofilms Developed Under Varied Reef Condition`},
    

    ]

    acadCont6 = [
    
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1654493622/Academics/student/JG_Baure_iepiry.jpg', title: 'Jerwin G. Baure', content: `ENVIRONMENT - Grazing of Seagrass-Associated Invertebrates Under Ocean Acidification and Warming`}, ]

    myArr = [];
  acadCont2Bool:boolean = false;
    
  constructor() { }

  

  ngOnInit(): void {
  }
}
