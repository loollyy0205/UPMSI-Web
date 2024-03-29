import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-focus',
  templateUrl: './institute-focus.component.html',
  styleUrls: ['./institute-focus.component.css']
})
export class InstituteFocusComponent implements OnInit {
  instituteCont = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981242/About/about%20msi/04-research-icon_dvuhzk.jpg', title: 'RESEARCH', content: 'Research in the UPMSI focuses on producing scientific results that promote the sustained utilization, management, and conservation of marine and coastal environments. Research groups and collaborators work on emerging and contemporary marine science issues in biology, biotechnology, and the physical sciences.'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981246/About/about%20msi/06-teaching-icon_gqo3ur.jpg', title: 'TEACHING', content: `The UPMSI offers master's, doctorate, and professional master's programs to train future marine scientists, policymakers, and professionals in the private sector. Students may choose to specialize in Marine Biology, Marine Physical Sciences, or Marine Biotechnology.`},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981271/About/about%20msi/05-extension-work_n6rp9g.png', title: 'EXTENSION', content: `The UPMSI regularly hosts workshops, conferences, and training courses on survey and monitoring techniques, coastal zone management, habitat restoration, mariculture, and science-based decision support systems. Public and private agencies can also consult the UP MSI for projects related to marine protection and management, biotechnology, and product development.`},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981276/About/about%20msi/07-marine-chem-icon_nbh2lu.jpg', title: 'MARINE CHEMISTRY', content: 'Many forms of marine life have adapted to the chemical characteristics of their ecosystems; subtle changes in the chemistry of these environments have dangerous consequences to all life on earth. Marine chemistry not only helps us understand these changes, but also identify the by-products of human activity that enter the oceans as pollutants. Fundamental research in marine chemistry also allows us to build or improve monitoring and sensing technologies.'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981255/About/about%20msi/08-physical-oceanography-icon_aw770f.jpg', title: 'PHYSICAL OCEANOGRAPHY', content: 'Physical variables like temperature, salinity, and density, as well as the processes occurring within the oceans, are the primary concerns of physical oceanography. These properties and processes describe the interaction between water and the atmosphere, the motion of currents, and the evolution of sea ice.'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1627981253/About/about%20msi/09-marine-geology-icon_upxap2.jpg', title: 'MARINE GEOLOGY', content: 'The geothermal forces and processes that occur kilometers below us predominantly shape the earth. Marine geology studies the ocean floor and coastal zone — it covers the physical and chemical properties, the sedimentology, and the paleontology of the deepest parts of the ocean. The mysteries and untapped resources of the ocean floor are priority fields in marine science research.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
