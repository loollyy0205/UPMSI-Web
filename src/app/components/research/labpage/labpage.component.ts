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

  CoRE = [
    {viewing: 'Coral Reef Ecology Laboratory (CoRE)',
    photoBanner: 'https://dc570.4shared.com/img/RrL5E-I7iq/s24/179e56be0f8/01_updated-cabaitan-banner?async&rand=0.9438869069030624',
    bannerLogo2: 'https://dc687.4shared.com/img/6yOkqphiea/s24/179e56c0038/CoRE_Lab_logo_version_7__?async&rand=0.8271782214286196',
    title: 'Coral Reef Ecology Laboratory (CoRE)',
    content: 'The Coral Reef Ecology Laboratory (CoRE) is interested in investigating the vital population processes and key reef processes that influence the dynamics of coral and reef fish communities to gain insights on how reef communities respond and recover from a disturbance, which are essential in the advancement of reef conservation and restoration initiatives. Specific areas of research include:',
    labHighBanner: 'https://dc570.4shared.com/img/0j8ZfIr1ea/s24/179e5858760/a_lab_highlight?async&rand=0.8680960545253322',
    labHighlight: 'Survival and sexual maturity of sexually propagated Acropora verweyi corals four years after outplantation.',
    labAuthor: 'Charlon Ligson & Patrick Cabaitan',
    labDate: 'February 2021',
    labLink1: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/rec.13363?af=R',
  }
  ];

  OCCO = [
    {viewing: 'Ocean Color and Coastal Oceanography Laboratory (OCCO)',
    photoBanner: 'https://dc570.4shared.com/img/zXEBLuBDea/s24/179e59e6e60/Banner_photo?async&rand=0.651456751783841',
    bannerLogo: 'https://dc610.4shared.com/img/z4JW2PGXea/s24/179e59e85d0/OCCO_Lab_logo_-_colored?async&rand=0.9030129394222164',
    title: 'Ocean Color and Coastal Oceanography Laboratory (OCCO)',
    content: 'The Ocean Color and Coastal Oceanography Laboratory (OCCO Lab) explores the interactions between ocean physics, climate change, and coastal ecosystems primarily through quantitative modelling, remote sensing, and GIS techniques. OCCO Lab also actively contributes to science communication in the Philippines by developing products that equip ordinary Filipinos with knowledge of climate resilience and our marine resources.',
    labHighBanner: 'https://dc610.4shared.com/img/5P0xdE60ea/s24/179e59e7a18/OCCO_Lab_highlight?async&rand=0.10306838701154564',
    labHighlight: 'Matyag: State of Coastal Habitats in the Six Philippine Marine Biogeographic Regions',
    labAuthor: 'David, et al.,',
    labDate: '2020',
  }];

  MMEEL = [
    {viewing: 'Marine Molecular Ecology and Evolution Laboratory',
    photoBanner: 'https://dc570.4shared.com/img/-DbddU00ea/s24/179e6c05920/01-updated-gotanco-banner?async&rand=0.48134488393573993',
    bannerLogo: 'https://dc570.4shared.com/img/7mvu_c5dea/s24/179e6c064d8/2_official_mmeel_logo?async&rand=0.7327986814828873',
    title: 'Marine Molecular Ecology and Evolution Laboratory',
    content: 'Research at the Marine Molecular Ecology and Evolution Laboratory explores biological diversity, ecology, and evolution in the sea. We primarily use genomic approaches to uncover diversity, patterns of distribution and population connectivity to gain insight into the origins and drivers of neutral and adaptive divergence across the seascape. We look for ways to apply our work to marine resource management, conservation, and the development of genomics-based tools and technologies for aquaculture.',
    labHighBanner: 'https://dc570.4shared.com/img/iIBQJG-Cea/s24/179e6c07c48/pacuta?async&rand=0.13177488539106985',
    labHighlight: 'Recent research from the lab used molecular methods to revisit the taxonomic identification of a coral species complex, Pocillopora damicornis, characterized by extensive phenotypic plasticity which confounds accurate species identification.',
    labAuthor: 'Torres, et al.,',
    labDate: 'December 2018',
    labLink1: 'https://www.researchgate.net/publication/327121925_Rarity_of_the_common_coral_Pocillopora_damicornis_in_the_western_Philippine_archipelago',
  }];

  oasis = [
    {viewing: 'Organic and Stable Isotope (OASIS) Geochemistry Laboratory',
    photoBanner: 'https://dc570.4shared.com/img/t2yJQXSUiq/s24/179e6ce3400/01-jaraula-banner?async&rand=0.3862118150040157',
    bannerLogo: 'https://dc570.4shared.com/img/CTXV37_riq/s24/179e6ce43a0/OASIS_Logo_B_W?async&rand=0.7078141780478917',
    title: 'Organic and Stable Isotope (OASIS) Geochemistry Laboratory',
    content: 'The Organic and Stable Isotope Geochemistry Laboratory (OASIS Geochem lab) of the UP Marine Science Institute was established and headed by Dr. Caroline Marie B. Jaraula in January 4, 2016. OASIS is currently focused on characterizing persistent organic pollutants; tracking their distribution, behavior, and interactions in coastal systems and how they change across physico-chemical gradients. These pollutants include antibiotics, pesticides, plasticizers, flame retardants, etc. The lab also does work on finding mangrove, microbe, and mariculture biomarkers and elemental proxies, only to name a few, but generally geochemically characterizing the environment, present and/or past. The lab is equipped to isolate, quantify, and identify organic matter and lipids from living organisms, sediments, as well as water and fossil fuel; and serves as research grounds for interested high school, undergraduate, and graduate students, as well as postdoctoral researchers.',
    labHighBanner: 'https://dc570.4shared.com/img/iIBQJG-Cea/s24/179e6c07c48/pacuta?async&rand=0.13177488539106985',
    labHighlight: 'Synthetic, unintentionally toxic organic compounds that do not degrade easily in the environment. They accumulate in human and animal tissues, disrupt their natural biological pathways, and potentially cause cancer',
    labAuthor: 'Loganathan & Masunaga',
    labDate: '2015',
  }];

  imbbe = [
    {viewing: 'Interactions of Marine Bionts, and Benthic Ecology (IMBiBE) Laboratory',
    photoBanner: 'https://dc570.4shared.com/img/rGnBhR6fea/s24/179e6e51f30/01-updated-rodriguez-banner?async&rand=0.485305588417015',
    bannerLogo: 'https://dc570.4shared.com/img/ErdV5IFcea/s24/179e7093190/2_IMBiBE_logo_w?async&rand=0.2680850349735471',
    title: 'Interactions of Marine Bionts, and Benthic Ecology (IMBiBE) Laboratory',
    content: 'The Interactions of Marine Bionts, and Benthic Ecology (IMBiBE) Laboratory is a research group based at the Marine Science Institute, College of Science, University of the Philippines Diliman. IMBiBE indulges you to know more about the biology and ecology of marine organisms and their interaction with the environment. We are particularly interested in understanding how varying levels of threats from environmental change affect the reproductive, physiological and behavioral responses of coral reef organisms, such as corals, sponges, and fishes. Central to this goal are long-term monitoring of reef sites, biodiversity resource assessments, and experiments done in natural setting.',
    labHighBanner: 'https://dc570.4shared.com/img/gAqbOpeoiq/s24/179e6e65f80/7_IMBiBE_highlight_photo?async&rand=0.2841356879729051',
    labHighlight: 'Sexual reproduction in the soft coral Lobophytum schoedei in Bolinao‐Anda Reef Complex, Pangasinan, northwestern Philippines.',
    labAuthor: 'Baran, et al.,',
    labDate: 'April 2021',
    labLink1: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/ivb.12316',
    site: 'https://imbibelab.wixsite.com/researchlab',
  }];

  mbl = [
    {viewing: 'Marine Biogeochemistry Laboratory (MBGCL)',
    photoBanner: 'https://dc570.4shared.com/img/dleTxc_5ea/s24/179e70ea418/Banner_MBGCL__1_?async&rand=0.800598643155318',
    bannerLogo: 'https://dc570.4shared.com/img/WehzBd6kea/s24/179e70c65e0/MBLlogo_F?async&rand=0.21396958560788004',
    title: 'Marine Biogeochemistry Laboratory (MBGCL)',
    content: 'Environmental stressors are linked with each other and they can have a significant impact on the ecosystem. Increased nutrients from anthropogenic activities (e.g. mariculture, domestic inputs) bring about eutrophication that can lead to blooms of algae that are either toxic or non-toxic, and fish kills.  Decomposition of dead blooms and other organic matter will utilize/deplete dissolved oxygen resulting in anoxia or hypoxia and release carbon dioxide.  Elevated carbon dioxide will decrease seawater pH and create acidic conditions that are detrimental to corals.  Ocean warming will increase respiration rates, cause coral bleaching resulting in poor coral health. Determining how these factors interact with one another can help in mitigating their impact on the environment.',
    labHighBanner: 'https://dc570.4shared.com/img/_Ljwpq5xiq/s24/179e70b0a38/P5310075-01?async&rand=0.5708915077153822',
    labHighlight: 'Spatio-temporal trends of pH, pCO2 and related parameters under DOST-PCAARRD Coastal Acidification Program',
    labLink1: 'https://chemoce.wixsite.com/marinebiogeochemlab/research-projects',
    site: 'https://chemoce.wixsite.com/marinebiogeochemlab',
  }];

  mpl = [
    {viewing: 'Marine Phycology Laboratory',
    photoBanner: 'https://dc570.4shared.com/img/x_Arygi6ea/s24/179e719c3c0/01-updated-santianez-banner?async&rand=0.05340356381224054',
    bannerLogo: 'https://dc570.4shared.com/img/nne_EGJBiq/s24/179e71b2f08/logo-marine-phycology-lab?async&rand=0.23453132405531107',
    title: 'Marine Phycology Laboratory',
    content: 'We actively work on the biology of seaweeds, especially their biodiversity, systematics, life history, and reproduction. We also dabble on algal community ecology, gravitating towards understanding the ecology of canopy-forming seaweeds such as Sargassum. Other research done by our team includes floristics, marine phytogeography, and molecular phylogenetics. Moreover, we conduct applied phycological research, with special reference to seaweed farming (i.e., mass cultivation of carrageenan-producing seaweeds Kappaphycus, Eucheuma, and Halymenia). Currently, we are scaling up on our efforts in harnessing underutilized seaweed resources such as the red seaweed Asparagopsis taxiformis and the green seaweeds Ulva by developing novel and/or locally adapted cultivation technologies for large-scale biomass production. This is to support the call of the seaweed industry to diversify our seaweed products.',
    labHighBanner: 'https://dc570.4shared.com/img/qOeqRW3Eea/s24/179e71aa268/4-gallery-Halymenia-culture?async&rand=0.27788235683871254',
    labHighlight: 'Updated checklist of the benthic marine macroalgae of the Philippines',
    labLink1: 'https://philjournalsci.dost.gov.ph/104-vol-150-s1/1336-updated-checklist-of-the-benthic-marine-macroalgae-of-the-philippines',
    labAuthor: 'Lastimoso, et al.,',
    labDate: 'January 2021',
  }];

  biome = [
    {viewing: 'Biological Oceanography and Modeling of Ecosystem (BiOME) laboratory',
    photoBanner: 'https://dc570.4shared.com/img/y9mN9CDJiq/s24/179e726cbb0/01-yniguez-banner?async&rand=0.5204618173021303',
    bannerLogo2: 'https://dc570.4shared.com/img/-FZ7AQI6iq/s24/179e7280fe8/BiOME_logo_official?async&rand=0.20081096082085326',
    title: 'Biological Oceanography and Modeling of Ecosystem (BiOME) laboratory',
    content: 'The BiOME lab is generally interested in understanding how marine ecosystem patterns and processes emerge from the local interactions of individual organisms. Specifically, our research is centered around understanding the dynamics of the base of the food web of ocean ecosystems, especially the phytoplankton, how these are affected by anthropogenic and natural factors, and how these effects can cascade up to our fisheries.  Through an arsenal of field, laboratory and modelling approaches, we hope to obtain a better handle on issues such as changes in productivity and ecosystem conditions. One main approach is the use of computational models integrating empirical data across oceanographic scales and disciplines in order to tease out the mechanisms driving populations and ecosystems, as well as to help provide decision-support systems for natural resource conservation and management. Beyond research, the lab is actively involved in promoting better appreciation and understanding of the oceans and science at various levels: from high school kids to graduate students.',
    labHighBanner: 'https://dc570.4shared.com/img/UhqLjbDMiq/s24/179e72adea8/Lab_highlight__1_?async&rand=0.11338262229787044',
    labHighlight: 'Characterizing the vertical phytoplankton distribution in the Philippine Sea off the northeastern coast of Luzon',
    labLink1: 'https://www.sciencedirect.com/science/article/abs/pii/S027277142100175X',
    labAuthor: 'Cordero, et al.,',
    labDate: 'March 2021',
    site: 'https://biomeph.com',
  }];

  CoREbool:boolean = false;
  myArr = [];

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
    }else if(this.router.url === '/Research/laboratories/coral-reef-ecology-laboratory'){
      this.myArr = this.CoRE;
      this.CoREbool= true;
    }else if(this.router.url === '/Research/laboratories/the-ocean-color-and-coastal-oceanography-laboratory'){
      this.myArr = this.OCCO;
    }else if(this.router.url === '/Research/laboratories/marine-molecular-ecology-and-evolution-laboratory'){
      this.myArr = this.MMEEL;
    }else if(this.router.url === '/Research/laboratories/organic-and-stable-isotope-geochemistry'){
      this.myArr = this.oasis;
    }else if(this.router.url === '/Research/laboratories/Interactions-of-Marine-Bionts-and-Benthic-Ecosystems'){
      this.myArr = this.imbbe;
    }else if(this.router.url === '/Research/laboratories/Marine-Biogeochemistry-Laboratory'){
      this.myArr = this.mbl;
    }else if(this.router.url === '/Research/laboratories/Marine-Phycology-Laboratory'){
      this.myArr = this.mpl;
    }else if(this.router.url === '/Research/laboratories/Biological-Oceanography-and-Modeling-of-Ecosystem-laboratory'){
      this.myArr = this.biome;
    }
  }

  gotoResearch(){
    this.router.navigate(['/Research/laboratories']);
  }

}
