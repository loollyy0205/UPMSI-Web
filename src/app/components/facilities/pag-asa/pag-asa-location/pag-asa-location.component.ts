import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pag-asa-location',
  templateUrl: './pag-asa-location.component.html',
  styleUrls: ['./pag-asa-location.component.css']
})
export class PagAsaLocationComponent implements OnInit {
  ourFocus = [
    {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/pag-asa%2F03-biodiversity.png?alt=media&token=05d461b5-bd33-42a4-8d36-880a26e42eb9', title: 'BIODIVERSITY & ECOSYSTEM HEALTH', content: 'These islands and reefs found in the western region are ecologically and economically valuable due to the richness in marine habitats that host a vast diversity of economically important fish and other marine organisms, and they are a source of approximately 20-25% of the country’s annual commercial fisheries.'},
    {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/pag-asa%2F04-facilities.png?alt=media&token=5c4e5878-07ef-4b82-9970-707d52f55a00', title: 'FACILITIES', content: `Since the Philippine’s occupation of the Pag-Asa Island in the 1970’s, the island remained severely underdeveloped compared to the smaller features in the Spratlys occupied by other claimant countries. Currently, the island has a weather station and naval station built in the 1970’s but has not been refurbished for four decades.`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
