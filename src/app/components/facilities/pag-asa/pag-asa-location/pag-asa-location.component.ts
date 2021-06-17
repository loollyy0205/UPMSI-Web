import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-asa-location',
  templateUrl: './pag-asa-location.component.html',
  styleUrls: ['./pag-asa-location.component.css']
})
export class PagAsaLocationComponent implements OnInit {
  ourFocus = [
    {img: 'https://dc606.4shared.com/img/GQngg6g2ea/s24/179ace95378/03-biodiversity?async&rand=0.7334046315186202', title: 'BIODIVERSITY & ECOSYSTEM HEALTH', content: 'These islands and reefs found in the western region are ecologically and economically valuable due to the richness in marine habitats that host a vast diversity of economically important fish and other marine organisms, and they are a source of approximately 20-25% of the country’s annual commercial fisheries.'},
    {img: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1623942218/Facilities/Pag-asa/Facilities_khufjl.png', title: 'FACILITIES', content: `Since the Philippine’s occupation of the Pag-Asa Island in the 1970’s, the island remained severely underdeveloped compared to the smaller features in the Spratlys occupied by other claimant countries. Currently, the island has a weather station and naval station built in the 1970’s but has not been refurbished for four decades.`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
