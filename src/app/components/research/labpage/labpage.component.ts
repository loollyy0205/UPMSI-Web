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
    photoBanner: 'https://dc596.4shared.com/img/VEArH658ea/s24/179ac810458/01-UPDATED-conaco-banner?async&rand=0.7736930628342722',
    bannerLogo: 'https://dc596.4shared.com/img/HxbSmKGxea/s24/179ac81cb90/MMBL_logo_white?async&rand=0.24260581373392287',
    title: 'MARINE MOLECULAR BIOLOGY LABORATORY',
    content: 'The Marine Molecular Biology Laboratory explores the genomic complement of marine organisms to reveal the keys to their success in different ecological niches and to gain insights into the origin and evolution of animal diversity and complexity. Research areas include gene expression dynamics, evolution and development, and marine symbiosis.',
    labHighBanner: 'https://dc570.4shared.com/img/-oRcRP-Uiq/s24/179d2d96488/highlight_heliopora_overgrowin?async&rand=0.8240869498774461',
    labHighlight: 'Generated a transcriptome resource for the blue coral, Heliopora coerula, to determine the molecular mechanisms underlying its rapid growth at warmer temperatures.',
    labLink1: 'https://www.nature.com/articles/s41598-018-26718-5',
    labLink2: 'https://peerj.com/articles/7785/',
    labAuthor: 'Guzman, et al.,',
    labDate: '2019',
    labContent: 'Warm seawater temperature promotes substrate colonization by the blue coral, Heliopora coerulea. PeerJ. 7:e7785.'
  }
  ];

  miel = [
    {viewing: 'Marine Invertebrate Ecology Laboratory',
    photoBanner: 'https://dc592.4shared.com/img/bH8qmZPhiq/s24/179ac7fdf60/01-updated-menez-banner?async&rand=0.8872522715554823',
    bannerLogo: 'https://dc592.4shared.com/img/UXVa4VLsea/s24/179ac808f28/MIEL_Logo?async&rand=0.7027315813783175',
    title: 'The Marine Invertebrate Ecology Laboratory',
    content: 'The Marine Invertebrate Ecology Laboratory focuses on understanding the basic biology and ecology of high value marine invertebrates to develop a model invertebrate management system which supports sustainable aquaculture, increases invertebrate natural stocks and provides high-value products to fishers. This is to augment capture production and rebuild natural stocks of exploited marine invertebrates. Our research is geared towards expanding options for sustainable and competitive mariculture industry which provides equitable economic benefits to various stakeholders (e.g., fishers, growers, processors, traders, etc.) while maintaining the productivity and biodiversity of commercially important invertebrate fishery resources in the country.',
    labHighBanner: 'https://dc527.4shared.com/img/iD-7JJunea/s24/179ac808b40/lab-highlight?async&rand=0.039514617036574995',
    labHighlight: 'Identification of Priority Sites to Support Management of Commercially Important Sea Cucumber Species by Applying Infomap and Habitat Filters to Larval Dispersal Data',
    labLink1: 'https://www.frontiersin.org/articles/10.3389/fmars.2020.571712/full',
    labAuthor: 'Deauna, et al.,',
    labDate: 'January 2021',
  }
  ];

  mol = [
    {viewing: 'Microbial Oceanography Laboratory',
    photoBanner: 'https://dc588.4shared.com/img/rAJTe9GLea/s24/179ac7dc838/01-updated-onda-banner?async&rand=0.788219176795582',
    bannerLogo: 'https://dc592.4shared.com/img/oqoaYNfriq/s24/179ac7dd3f0/2_Logo?async&rand=0.9916611130663846',
    title: 'Microbial Oceanography Laboratory',
    labLink1: '/News/content/filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth',
    content: 'Understanding host-symbiont interactions, microbial biogeography, diversity, dynamics and trophic interactions, plastics-microbes interactions, and consequences of changing conditions using -omics approaches (genomics, transcriptomics and metagenomics), other molecular methods and advanced techniques in confocal laser scanning microscopy',
    labHighBanner: 'https://dc592.4shared.com/img/S6cJ7uEJea/s24/179ac7e1a40/7_Lab_highlight_Photo__Dr_Deo_?async&rand=0.9218025115002331',
    labHighlight: 'In 2020, Dr. Deo Florence L. Onda, head of (lab name), was invited to dive down Emden Deep with record-holder Victor Vescovo. Dr. Deo (or Dr. Onda?) is the first Filipino and second human to reach the depths of the third deepest point on Earth.',
  }
  ];

  algae = [
    {viewing: 'Algal Ecophysiology Laboratory (AlgaE)',
    photoBanner: 'https://dc588.4shared.com/img/SlXVDGXBea/s24/179ac7e7fd0/01-updated-roleda-banner?async&rand=0.49148985714339033',
    bannerLogo2: 'https://dc592.4shared.com/img/49qxAylBea/s24/179ac7e7fd0/0_AlgaE_lab_logo_hi-res?async&rand=0.23334327280584444',
    title: 'Algal Ecophysiology Laboratory (AlgaE)',
    content: 'AlgaE Lab research activities focus on the study of the biology, biochemistry, and ecophysiology of tropical marine macroalgae. Research on the growth, physiology, and biochemical performance of economically and ecologically important microalgal species will help us better understand their biological responses to environmental stress and changing ocean chemistry. We also investigate the important role of light and photosynthesis in algal growth by looking at gene expression under different environmental conditions.',
    labHighBanner: 'https://dc570.4shared.com/img/7UpwHEt8iq/s24/179d2dbba30/Epiphytes_IMG_6395?async&rand=0.22241311240017914',
    labHighlight: 'Discovery of novel haplotypes from wild populations of Kappaphycus (Gigartinales, Rhodophyta) in the Philippines',
    labAuthor: 'Roleda, et al.,',
    labDate: 'March 2021',
    labLink1: 'https://www.e-algae.org/journal/view.php?number=2935#:~:text=Although%20the%20present%20study%20evaluated,the%20Philippines%20still%20harbor%20unutilized',
    labLink2: 'https://www.sciencedirect.com/science/article/abs/pii/S0269749120360322',
    labContent: 'Inorganic carbon utilization of tropical calcifying macroalgae and the impacts of intensive mariculture-derived coastal acidification on the physiological performance of the rhodolith Sporolithon sp.',
    labAuthor2: 'Roleda, et al.,',
    labDate2: 'November 2020',
  }
  ];

  myArr = [];
  algaeBool: boolean = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/marine-molecular-biology-lab'){
      this.myArr = this.mmlb;
    }else if(this.router.url === '/Research/laboratories/marine-invertebrate-ecology-lab'){
      this.myArr = this.miel;
    }else if(this.router.url === '/Research/laboratories/microbial-oceanography-lab'){
      this.myArr = this.mol;
    }else if(this.router.url === '/Research/laboratories/algal-eco-physiology-lab'){
      this.myArr = this.algae;
      this.algaeBool = true;
    }
  }

  gotoResearch(){
    this.router.navigate(['/Research/laboratories']);
  }

}
