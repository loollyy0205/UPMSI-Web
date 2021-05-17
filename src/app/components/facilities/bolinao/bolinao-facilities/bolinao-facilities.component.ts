import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolinao-facilities',
  templateUrl: './bolinao-facilities.component.html',
  styleUrls: ['./bolinao-facilities.component.css']
})
export class BolinaoFacilitiesComponent implements OnInit {
  instituteCont = [
    {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fbml%2F4-research-facilities.jpg?alt=media&token=1fe88e12-7e13-4cbb-96d4-52583a93c4bb', title: 'RESEARCH FACILITIES', content: 'BML maintains outdoor culture facilities and experimental areas with flow-through seawater and continuous aeration, as well as facilities for microa-lgae culture. Laboratories are equipped with analytical instruments. Generators ensure 24/7 power supply. SCUBA and snorkeling gear and small watercraft are available for fieldwork.'},
    {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fbml%2F4.2-field-based-facilities.jpg?alt=media&token=8bd7e3d4-df51-4b22-8209-2b8fde4c88b2', title: 'FIELD-BASED FACILITIES', content: `The biodiversity of Bolinao and its surrounding waters makes BML an ideal location for marine science research. Field-based facilities include the giant clam ocean nursery and sea cucumber sea ranch. Continuous monitoring systems record environmental parameters at various sites.`},
    {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fbml%2F4.3-other-campus-facilities.JPG?alt=media&token=bb34236b-0874-4c75-bd8f-1d54419b5d57', title: 'OTHER CAMPUS FACILITIES', content: `The BML campus maintains an on-site library, museums for fish, clam, and coral collections, classrooms, conference facilities, and housing for students and researchers.`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
