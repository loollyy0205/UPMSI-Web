import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-focus',
  templateUrl: './institute-focus.component.html',
  styleUrls: ['./institute-focus.component.css']
})
export class InstituteFocusComponent implements OnInit {
  instituteCont = [
    {img: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1623341303/About/about%20msi/04-research-icon_gqw1c2.jpg', title: 'RESEARCH', content: 'Research in the UPMSI focuses on producing scientific results that promote the sustained utilization, management, and conservation of marine and coastal environments. Research groups and collaborators work on emerging and contemporary marine science issues in biology, biotechnology, and the physical sciences.'},
    {img: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1623341295/About/about%20msi/05-teaching-icon_cgogig.jpg', title: 'TEACHING', content: `The UPMSI offers master's, doctorate, and professional master's programs to train future marine scientists, policymakers, and professionals in the private sector. Students may choose to specialize in Marine Biology, Marine Physical Sciences, or Marine Biotechnology.`},
    {img: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1623341295/About/about%20msi/06-marine-bio-icon_k78xik.jpg', title: 'MARINE BIOLOGY', content: `The study of marine biology allows us to examine and classify organisms living in the different environments of the world's oceans. Studying their behaviors and interactions gives plenty of insights into how we can better protect our marine resources. Notable subfields of marine biology are ecology, genetics and genomics, anatomy, and microbiology.`},
    {img: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1623341300/About/about%20msi/07-marine-chem-icon_ypeoqd.jpg', title: 'MARINE CHEMISTRY', content: 'Many forms of marine life have adapted to the chemical characteristics of their ecosystems; subtle changes in the chemistry of these environments have dangerous consequences to all life on earth. Marine chemistry not only helps us understand these changes, but also identify the by-products of human activity that enter the oceans as pollutants. Fundamental research in marine chemistry also allows us to build or improve monitoring and sensing technologies.'},
    {img: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1623341296/About/about%20msi/08-physical-oceanography-icon_hvmmcb.jpg', title: 'PHYSICAL OCEANOGRAPHY', content: 'Physical variables like temperature, salinity, and density, as well as the processes occurring within the oceans, are the primary concerns of physical oceanography. These properties and processes describe the interaction between water and the atmosphere, the motion of currents, and the evolution of sea ice.'},
    {img: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1623341297/About/about%20msi/09-marine-geology-icon_gycuu4.jpg', title: 'MARINE GEOLOGY', content: 'The geothermal forces and processes that occur kilometers below us predominantly shape the earth. Marine geology studies the ocean floor and coastal zone — it covers the physical and chemical properties, the sedimentology, and the paleontology of the deepest parts of the ocean. The mysteries and untapped resources of the ocean floor are priority fields in marine science research.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
