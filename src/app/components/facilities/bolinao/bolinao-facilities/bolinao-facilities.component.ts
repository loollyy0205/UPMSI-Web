import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolinao-facilities',
  templateUrl: './bolinao-facilities.component.html',
  styleUrls: ['./bolinao-facilities.component.css']
})
export class BolinaoFacilitiesComponent implements OnInit {
  instituteCont = [
    {img: 'https://dc592.4shared.com/img/bAMLb--0iq/s24/179ac7af590/4-research-facilities?async&rand=0.7099034409759462', title: 'RESEARCH FACILITIES', content: 'BML maintains outdoor culture facilities and experimental areas with flow-through seawater and continuous aeration, as well as facilities for microa-lgae culture. Laboratories are equipped with analytical instruments. Generators ensure 24/7 power supply. SCUBA and snorkeling gear and small watercraft are available for fieldwork.'},
    {img: 'https://dc592.4shared.com/img/Wl0pDH5Rea/s24/179ac7ae9d8/42-field-based-facilities?async&rand=0.18128803456863718', title: 'FIELD-BASED FACILITIES', content: `The biodiversity of Bolinao and its surrounding waters makes BML an ideal location for marine science research. Field-based facilities include the giant clam ocean nursery and sea cucumber sea ranch. Continuous monitoring systems record environmental parameters at various sites.`},
    {img: 'https://dc592.4shared.com/img/ZGqzJ4BDea/s24/179ac7af1a8/43-other-campus-facilities?async&rand=0.46875296711485226', title: 'OTHER CAMPUS FACILITIES', content: `The BML campus maintains an on-site library, museums for fish, clam, and coral collections, classrooms, conference facilities, and housing for students and researchers.`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
