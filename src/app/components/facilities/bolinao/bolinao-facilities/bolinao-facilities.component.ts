import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolinao-facilities',
  templateUrl: './bolinao-facilities.component.html',
  styleUrls: ['./bolinao-facilities.component.css']
})
export class BolinaoFacilitiesComponent implements OnInit {
  instituteCont = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1628146291/Facilities/1%20Bolinao%20Marine%20Laboratory%20-%20Elements-20210527T051358Z-001/4-research-facilities_n7kz1q.jpg', title: 'RESEARCH FACILITIES', content: 'BML maintains outdoor culture facilities and experimental areas with flow-through seawater and continuous aeration, as well as facilities for microa-lgae culture. Laboratories are equipped with analytical instruments. Generators ensure 24/7 power supply. SCUBA and snorkeling gear and small watercraft are available for fieldwork.'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1628146291/Facilities/1%20Bolinao%20Marine%20Laboratory%20-%20Elements-20210527T051358Z-001/4.2-field-based-facilities_en4w9s.jpg', title: 'FIELD-BASED FACILITIES', content: `The biodiversity of Bolinao and its surrounding waters makes BML an ideal location for marine science research. Field-based facilities include the giant clam ocean nursery and sea cucumber sea ranch. Continuous monitoring systems record environmental parameters at various sites.`},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1628146291/Facilities/1%20Bolinao%20Marine%20Laboratory%20-%20Elements-20210527T051358Z-001/4.3-other-campus-facilities_prlsje.jpg', title: 'OTHER CAMPUS FACILITIES', content: `The BML campus maintains an on-site library, museums for fish, clam, and coral collections, classrooms, conference facilities, and housing for students and researchers.`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
