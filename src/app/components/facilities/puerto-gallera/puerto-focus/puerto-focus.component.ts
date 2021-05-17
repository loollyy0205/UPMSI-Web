import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puerto-focus',
  templateUrl: './puerto-focus.component.html',
  styleUrls: ['./puerto-focus.component.css']
})
export class PuertoFocusComponent implements OnInit {
  ourFocus = [
    {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fpuerto%2F03-bio-and-eco-health.jpg?alt=media&token=1462c013-e2df-40c4-a85c-5415bb98930a', title: 'BIODIVERSITY & ECOSYSTEM HEALTH', content: 'MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.'},
    {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fpuerto%2F04-disaster-risk-management.jpeg?alt=media&token=b193b87b-f25f-41e2-b050-d809ab58f691', title: 'Disaster Risk Reduction and Management', content: `MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
