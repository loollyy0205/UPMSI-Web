import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labpage',
  templateUrl: './labpage.component.html',
  styleUrls: ['./labpage.component.css']
})
export class LabpageComponent implements OnInit {
  mmlb = [
    {viewing: 'Marine Molecular Biology Laboratory',
    photoBanner: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2F01-UPDATED-conaco-banner.jpg?alt=media&token=1eb3bf3f-821a-4381-9fc9-70ba2d5374ae',
    bannerLogo: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2FMMBL_logo_white.png?alt=media&token=848cabd4-c7a0-4ae5-a006-0fdb1c976821',
    title: 'MARINE MOLECULAR BIOLOGY LABORATORY',
    content: 'The Marine Molecular Biology Laboratory explores the genomic complement of marine organisms to reveal the keys to their success in different ecological niches and to gain insights into the origin and evolution of animal diversity and complexity. Research areas include gene expression dynamics, evolution and development, and marine symbiosis.',
    labHighBanner: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fhighlight_heliopora%20overgrowing%20other%20corals.jpg?alt=media&token=aa4fa09a-220d-447c-a5c2-c7365052cf47',
    labHighlight: 'Generated a transcriptome resource for the blue coral, Heliopora coerula, to determine the molecular mechanisms underlying its rapid growth at warmer temperatures.',
    labAuthor: 'Guzman, et al.,',
    labDate: '2019',
    labContent: ' Warm seawater temperature promotes substrate colonization by the blue coral, Heliopora coerulea. PeerJ. 7:e7785.'
  }
  ];

  miel = [
    {viewing: 'Marine Invertebrate Ecology Laboratory',
    photoBanner: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2F01-updated-menez-banner.jpg?alt=media&token=2d00fc69-b726-4a1f-962e-0123dbfe8036',
    bannerLogo: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2FMIEL%20Logo.png?alt=media&token=566f0d1c-14a0-425c-bbfb-1ca23e2f3b25',
    title: 'The Marine Invertebrate Ecology Laboratory',
    content: 'The Marine Invertebrate Ecology Laboratory focuses on understanding the basic biology and ecology of high value marine invertebrates to develop a model invertebrate management system which supports sustainable aquaculture, increases invertebrate natural stocks and provides high-value products to fishers. This is to augment capture production and rebuild natural stocks of exploited marine invertebrates. Our research is geared towards expanding options for sustainable and competitive mariculture industry which provides equitable economic benefits to various stakeholders (e.g., fishers, growers, processors, traders, etc.) while maintaining the productivity and biodiversity of commercially important invertebrate fishery resources in the country.',
    labHighBanner: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Flab-highlight.png?alt=media&token=72b2a507-b987-4070-b4e1-64cdd6eeab6c',
    labHighlight: 'Identification of Priority Sites to Support Management of Commercially Important Sea Cucumber Species by Applying Infomap and Habitat Filters to Larval Dispersal Data',
    labAuthor: 'Deauna, et al.,',
    labDate: 'January 2021',
    labContent: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto at neque perspiciatis fugit quisquam blanditiis officia similique placeat quod vitae.'
    }
  ];

  mol = [
    {viewing: 'Microbial Oceanography Laboratory',
    photoBanner: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F1.%20Banner%20Photo.png?alt=media&token=4f98c121-9009-4f09-8802-22a7aec2ec18',
    bannerLogo: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F2.%20Logo.png?alt=media&token=b0fbfb65-93bd-4c3f-9dd2-a8b92bb3ee32',
    title: 'Microbial Oceanography Laboratory',
    content: 'Understanding host-symbiont interactions, microbial biogeography, diversity, dynamics and trophic interactions, plastics-microbes interactions, and consequences of changing conditions using -omics approaches (genomics, transcriptomics and metagenomics), other molecular methods and advanced techniques in confocal laser scanning microscopy',
    labHighBanner: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F7.%20Lab%20highlight%20Photo%20(Dr.%20Deo%20Onda%20before%20the%20descend%20to%20the%20Emden%20Deep).jpg?alt=media&token=1737e868-aa09-4be5-9cde-6955b8ff27fc',
    labHighlight: 'Deo is known for being the first Filipino to descend into the Emden Deep in the Philippine Trench.',
}
  ];

  myArr = [];


  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/marine-molecular-biology-lab'){
      this.myArr = this.mmlb;
    }else if(this.router.url === '/Research/laboratories/marine-invertebrate-ecology-lab'){
      this.myArr = this.miel;
    }else if(this.router.url === '/Research/laboratories/microbial-oceanography-lab'){
      this.myArr = this.mol;
    }
  }

  gotoResearch(){
    this.router.navigate(['/Research/laboratories']);
  }

}
