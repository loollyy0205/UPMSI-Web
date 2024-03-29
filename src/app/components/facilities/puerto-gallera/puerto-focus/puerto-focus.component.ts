import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puerto-focus',
  templateUrl: './puerto-focus.component.html',
  styleUrls: ['./puerto-focus.component.css']
})
export class PuertoFocusComponent implements OnInit {
  ourFocus = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1628146384/Facilities/2%20Puerto%20Galera%20Station%20-%20Elements/03-bio-and-eco-health_l1tes0.jpg', title: 'BIODIVERSITY & ECOSYSTEM HEALTH', content: 'Puerto Galera is the ideal location for biodiversity research because of the variety of its terrestrial and aquatic organisms. Long-term monitoring programs give better understanding and management of the health of the ecosystems of Puerto Galera, giving communities the opportunity to improve conservation, monitoring, and management initiatives, while also integrating nearby indigenous groups.'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1628146416/Facilities/2%20Puerto%20Galera%20Station%20-%20Elements/04-disaster-risk-management_fn65rj.jpg', title: 'Disaster Risk Reduction and Management', content: `Disaster Risk Reduction and Management (DRRM) research programs support fields of study like an ecosystem’s vulnerability and resilience, climate impacts on ecosystems and biodiversity, decision support systems for environment management, early warning systems for communities, and renewable energy for local communities among many others. These topics will enable communities to adapt better to environmental risks, especially a changing climate.`},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
