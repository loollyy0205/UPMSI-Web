import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-resources',
  templateUrl: './resources.component.html',
  styleUrls: ['./resources.component.css']
})
export class ResourcesComponent implements OnInit {

  margin:number = -150;

  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
onResize(event) {
  this.innerWidth = window.innerWidth;
  if (this.innerWidth <= 1445 && this.innerWidth >= 768) {
    this.margin = -150;
  } else if (this.innerWidth <= 1665 && this.innerWidth >= 1446) {
    this.margin = -190;
  }else if (this.innerWidth <= 1865 && this.innerWidth >= 1666) {
    this.margin = -230;
  }else if (this.innerWidth <= 2065 && this.innerWidth >= 1866) {
    this.margin = -270;
  }else if (this.innerWidth <= 2265 && this.innerWidth >= 2066) {
    this.margin = -310;
  }else if (this.innerWidth <= 2465 && this.innerWidth >= 2266) {
    this.margin = -350;
  }else if (this.innerWidth <= 2665 && this.innerWidth >= 2466) {
    this.margin = -390;
  }else if (this.innerWidth <= 2865 && this.innerWidth >= 2560) {
    this.margin = -430;
  }
}

  images = [
    {path: "../../../assets/photos/turtle.jpg"},
    {path: "../../../assets/photos/news1.jpeg"},
    {path: "../../../assets/photos/extension.jpg"},
    {path: "../../../assets/photos/resources.jpg"},
  ];

  publication = [
    {
     title: 'Modeling seagrass bed dynamics under environmental impacts of intensive mariculture activities in Bolinao and Anda, the Philippines',
     date: 'Published: March 5, 2021',
     content: 'This study assessed the estuarine-scale dynamics of mixed seagrass beds in Bolinao and Anda coastal areas in the...',
     url: 'https://www.sciencedirect.com/science/article/abs/pii/S0272771420308830',
    },
    {
     title: 'Responses of Buluan Island turbid fringing reefs, southern Philippines to the 2016 thermal anomaly',
     date: 'Published: March 2021',
     content: 'March 2021 This study describes the response to coral bleaching of a turbid reef in Buluan Island Marine Sanctuary (BIMS), southern Philippines. Findings...',
     url: 'https://www.sciencedirect.com/science/article/pii/S2352485521000967',
    },
    {
     title: 'Small-molecule mimicry hunting strategy in the imperial cone snail, Conus imperialis',
     date: 'Published: March 12, 2021',
     content: 'We explored the specialized metabolites from the venom of the worm-hunting cone snail, Conus imperialis. Using the model polychaete worm Platynereis...',
     url: 'https://advances.sciencemag.org/content/7/11/eabf2704',
    },
    {
     title: 'Differentiating Two Closely Related Alexandrium Species Using Comparative Quantitative Proteomics',
     date: 'Published: January 2021',
     content: 'Using isobaric tags for relative and absolute quantitation (iTRAQ)-based quantitative proteomics and two-dimensional differential...',
     url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7823455/',
    },
    {
     title: 'Chemical profiling of the Arctic sea lettuce Ulva lactuca (Chlorophyta) mass-cultivated on land under controlled conditions for food applications',
     date: 'Published: March 30, 2021',
     content: 'Different strains of Arctic U. lactuca were mass-cultivated under controlled...',
     url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7823455/',
    },

  ]

  constructor() { }

  ngOnInit(): void {
    this.innerWidth = window.innerWidth;
  }

}


