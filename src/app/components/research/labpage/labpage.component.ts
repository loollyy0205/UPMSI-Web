import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labpage',
  templateUrl: './labpage.component.html',
  styleUrls: ['./labpage.component.css']
})
export class LabpageComponent implements OnInit {
  biome = [
    {viewing: 'Biological Oceanography and Modeling of Ecosystem (BiOME) laboratory',
    photoBanner: '../../../../assets/photos/biological-lab/BiOME_banner photo.jpg',
    title: 'Biological Oceanography and Modeling of Ecosystem Laboratory',
    content: 'The BiOME lab is generally interested in understanding how marine ecosystem patterns and processes emerge from the local interactions of individual organisms. Specifically, our research is centered around understanding the dynamics of the base of the food web of ocean ecosystems, especially the phytoplankton, how these are affected by anthropogenic and natural factors, and how these effects can cascade up to our fisheries.  Through an arsenal of field, laboratory and modelling approaches, we hope to obtain a better handle on issues such as changes in productivity and ecosystem conditions. One main approach is the use of computational models integrating empirical data across oceanographic scales and disciplines in order to tease out the mechanisms driving populations and ecosystems, as well as to help provide decision-support systems for natural resource conservation and management. Beyond research, the lab is actively involved in promoting better appreciation and understanding of the oceans and science at various levels: from high school kids to graduate students.',
    profile: '../../../../assets/photos/biological-lab/profile.png',
    Pi: 'Aletta Concepcion T. Yñguez, Ph.D.',
    piDesc: 'Dr. Aletta Yñiguez is an Associate Professor at the Marine Science Institute, University of the Philippines in Diliman. She obtained her Ph.D. from the Rosenstiel School of Marine and Atmospheric Science (RSMAS), University of Miami in Florida with the support of Fulbright and Maytag scholarships. She is also the Chair of the UP Puerto Galera Biodiversity and Environmental Research and Outreach Center. She is interested in population and ecosystem dynamics, plankton ecology, harmful algal blooms, fisheries, human impacts on marine ecosystems, ecological modelling.',
    labTitle: 'Estuarine, Coastal and Shelf Science',
    credits: 'By: Kristina Cordero, Iris Bollozos, J.D. Palermo, Kathleen Silvano, Ma. Teresa Escobar, Gil Jacinto, Ma. Lourdes San Diego-McGlone, Laura David, Aletta T. Yñiguez',
    date: 'March 2021',
    labContent: 'Characterizing the vertical phytoplankton distribution in the Philippine Sea off the northeastern coast of Luzon',

    }
  ]

  gallery = [
    {image: '../../../../assets/photos/biological-lab/1_gallery_Plankton ecology.jpg'},
    {image: '../../../../assets/photos/biological-lab/3_gallery_Field sampling.JPG'},
    {image: '../../../../assets/photos/biological-lab/4_gallery_Plankton community experiments.png'},
    {image: '../../../../assets/photos/biological-lab/5_gallery_Developing tools and models.jpg'},
    {image: '../../../../assets/photos/biological-lab/6_gallery_Impacts on fisheries.jpg'},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/biological-oceanography-and-modeling-of-ecosystem-laboratory'){
      console.log('nice try')
    }
  }

  gotoResearch(){
    this.router.navigate(['/Research/laboratories']);
  }

}
