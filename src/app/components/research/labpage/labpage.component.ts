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
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628151350/Research/Laboratories/Conaco_MMBL/01-UPDATED-conaco-banner_err9qe.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628151416/Research/Laboratories/Conaco_MMBL/MMBL_logo_white_pivimj.png',
    title: 'MARINE MOLECULAR BIOLOGY LABORATORY',
    content: 'The Marine Molecular Biology Laboratory explores the genomic complement of marine organisms to reveal the keys to their success in different ecological niches and to gain insights into the origin and evolution of animal diversity and complexity. Research areas include gene expression dynamics, evolution and development, and marine symbiosis.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628151447/Research/Laboratories/Conaco_MMBL/highlight_heliopora_overgrowing_other_corals_yfyqnx.jpg',

    labLink1: 'https://www.nature.com/articles/s41598-018-26718-5',
    labLink2: 'https://peerj.com/articles/7785/',
    labAuthor: 'Guzman, et al.,',
    labDate: '2019',
    site: 'https://cconaco.wixsite.com/mmbl',

  }
  ];

  miel = [
    {viewing: 'Marine Invertebrate Ecology Laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212330/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/01-updated-menez-banner_lq0ex6.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212365/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/MIEL_Logo_nqwuxk.png',
    title: 'The Marine Invertebrate Ecology Laboratory',
    site: 'https://sites.google.com/view/inverts-upmsi/home?authuser=0',
    content: 'The Marine Invertebrate Ecology Laboratory focuses on understanding the basic biology and ecology of high value marine invertebrates to develop a model invertebrate management system which supports sustainable aquaculture, increases invertebrate natural stocks and provides high-value products to fishers. This is to augment capture production and rebuild natural stocks of exploited marine invertebrates. Our research is geared towards expanding options for sustainable and competitive mariculture industry which provides equitable economic benefits to various stakeholders (e.g., fishers, growers, processors, traders, etc.) while maintaining the productivity and biodiversity of commercially important invertebrate fishery resources in the country.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212362/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/lab-highlight_gji5qy.png',
    labHighlight: 'Identification of Priority Sites to Support Management of Commercially Important Sea Cucumber Species by Applying Infomap and Habitat Filters to Larval Dispersal Data',
    labLink1: 'https://www.frontiersin.org/articles/10.3389/fmars.2020.571712/full',
    labAuthor: 'Deauna, et al.,',
    labDate: 'January 2021',
  }
  ];

  mol = [
    {viewing: 'Microbial Oceanography Laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212514/Research/Laboratories/Onda_MOLab/01-updated-onda-banner_dnbzss.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212508/Research/Laboratories/Onda_MOLab/2._Logo_ueteea.png',
    title: 'Microbial Oceanography Laboratory',
    fbpage: 'https://www.facebook.com/microoce.ph',
    labLink1: '/News/content/filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth',
    content: 'Understanding host-symbiont interactions, microbial biogeography, diversity, dynamics and trophic interactions, plastics-microbes interactions, and consequences of changing conditions using -omics approaches (genomics, transcriptomics and metagenomics), other molecular methods and advanced techniques in confocal laser scanning microscopy',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212526/Research/Laboratories/Onda_MOLab/7._Lab_highlight_Photo_Dr._Deo_Onda_before_the_descend_to_the_Emden_Deep_w749op.jpg',
    labHighlight: 'In 2020, Dr. Deo Florence L. Onda, head of the Microbial Oceanography Laboratory, was invited to dive down Emden Deep with record-holder Victor Vescovo. Dr. Onda is the first Filipino and second human to reach the depths of the third deepest point on Earth.',
  }
  ];

  algae = [
    {viewing: 'Algal Ecophysiology Laboratory (AlgaE)',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212564/Research/Laboratories/Roleda-Algal-Eco-Lab/01-updated-roleda-banner_tpzqmp.jpg',
    bannerLogo2: 'https://res.cloudinary.com/upmsi/image/upload/v1628212560/Research/Laboratories/Roleda-Algal-Eco-Lab/0_AlgaE_lab_logo_hi-res_dbunqu.png',
    title: 'Algal Ecophysiology Laboratory (AlgaE)',
    content: 'AlgaE Lab research activities focus on the study of the biology, biochemistry, and ecophysiology of tropical marine macroalgae. Research on the growth, physiology, and biochemical performance of economically and ecologically important microalgal species will help us better understand their biological responses to environmental stress and changing ocean chemistry. We also investigate the important role of light and photosynthesis in algal growth by looking at gene expression under different environmental conditions.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212561/Research/Laboratories/Roleda-Algal-Eco-Lab/Epiphytes_IMG_6395_zuloh4.jpg',

    labAuthor: 'Roleda, et al.,',
    labDate: 'March 2021',
    labLink1: 'https://www.e-algae.org/journal/view.php?number=2935#:~:text=Although%20the%20present%20study%20evaluated,the%20Philippines%20still%20harbor%20unutilized',
    labLink2: 'https://www.sciencedirect.com/science/article/abs/pii/S0269749120360322',

    labAuthor2: 'Narvarte, et al.,',
    labDate2: '2020',
    site: 'https://algalecolab.weebly.com',
    /**
    edited13 : edited the author and date
    */
  }
  ];

  CoRE = [
    {viewing: 'Coral Reef Ecology Laboratory (CoRE)',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628148250/Research/Laboratories/Cabaitan_CoRELab/01_updated-cabaitan-banner_meql6a.jpg',
    bannerLogo2: 'https://res.cloudinary.com/upmsi/image/upload/v1628148249/Research/Laboratories/Cabaitan_CoRELab/CoRE_Lab_logo_version_7___lzgxpt.png',
    title: 'Coral Reef Ecology Laboratory (CoRE)',
    content: 'The Coral Reef Ecology Laboratory (CoRE) is interested in investigating the vital population processes and key reef processes that influence the dynamics of coral and reef fish communities to gain insights on how reef communities respond and recover from a disturbance, which are essential in the advancement of reef conservation and restoration initiatives. Specific areas of research include:',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628148250/Research/Laboratories/Cabaitan_CoRELab/a._lab_highlight_i13gsh.png',
    labHighlight: 'Survival and sexual maturity of sexually propagated Acropora verweyi corals four years after outplantation.',
    labAuthor: 'Charlon Ligson & Patrick Cabaitan',
    labDate: 'February 2021',
    labLink1: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/rec.13363?af=R',
  }
  ];

  OCCO = [
    {viewing: 'Ocean Color and Coastal Oceanography Laboratory (OCCO)',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628151870/Research/Laboratories/David_OCCO/Banner_photo_jbbptj.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628151851/Research/Laboratories/David_OCCO/OCCO_Lab_logo_-_colored_vkp6ut.png',
    title: 'Ocean Color and Coastal Oceanography Laboratory (OCCO)',
    content: 'The Ocean Color and Coastal Oceanography Laboratory (OCCO Lab) explores the interactions between ocean physics, climate change, and coastal ecosystems primarily through quantitative modelling, remote sensing, and GIS techniques. OCCO Lab also actively contributes to science communication in the Philippines by developing products that equip ordinary Filipinos with knowledge of climate resilience and our marine resources.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628151870/Research/Laboratories/David_OCCO/OCCO_Lab_highlight_x4xqjr.jpg',
    labHighlight: 'Matyag: State of Coastal Habitats in the Six Philippine Marine Biogeographic Regions',
    labAuthor: 'David, et al.,',
    labDate: '2020',
  }];

  MMEEL = [
    {viewing: 'Marine Molecular Ecology and Evolution Laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628152828/Research/Laboratories/Gotanco_MMEEL/01-updated-gotanco-banner_qnkqhl.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628152837/Research/Laboratories/Gotanco_MMEEL/2_official_mmeel_logo_tqrlbh.png',
    title: 'Marine Molecular Ecology and Evolution Laboratory',
    content: 'Research at the Marine Molecular Ecology and Evolution Laboratory explores biological diversity, ecology, and evolution in the sea. We primarily use genomic approaches to uncover diversity, patterns of distribution and population connectivity to gain insight into the origins and drivers of neutral and adaptive divergence across the seascape. We look for ways to apply our work to marine resource management, conservation, and the development of genomics-based tools and technologies for aquaculture.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628153791/Research/Laboratories/Gotanco_MMEEL/7_LabHighlightPhotos/pacuta_pp7eki.png',

    labAuthor: 'Torres, et al.,',
    labDate: 'December 2018',
    site: 'https://mmeel-upmsi.weebly.com',
    labLink1: 'https://www.researchgate.net/publication/327121925_Rarity_of_the_common_coral_Pocillopora_damicornis_in_the_western_Philippine_archipelago',
  }];

  oasis = [
    {viewing: 'Organic and Stable Isotope (OASIS) Geochemistry Laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628211777/Research/Laboratories/Jaraula_OASIS/01-jaraula-banner_vqr2ji.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628211774/Research/Laboratories/Jaraula_OASIS/OASIS_Logo_Colored_xab7os.png',
    title: 'Organic and Stable Isotope (OASIS) Geochemistry Laboratory',
    fbpage: 'https://www.facebook.com/upmsioasisgeochemlab/',
    content: 'The Organic and Stable Isotope Geochemistry Laboratory (OASIS Geochem lab) of the UP Marine Science Institute was established and headed by Dr. Caroline Marie B. Jaraula in January 4, 2016. OASIS is currently focused on characterizing persistent organic pollutants; tracking their distribution, behavior, and interactions in coastal systems and how they change across physico-chemical gradients. These pollutants include antibiotics, pesticides, plasticizers, flame retardants, etc. The lab also does work on finding mangrove, microbe, and mariculture biomarkers and elemental proxies, only to name a few, but generally geochemically characterizing the environment, present and/or past. The lab is equipped to isolate, quantify, and identify organic matter and lipids from living organisms, sediments, as well as water and fossil fuel; and serves as research grounds for interested high school, undergraduate, and graduate students, as well as postdoctoral researchers.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628926310/Research/Laboratories/Jaraula_OASIS/pacuta_bc8nml.png',
    labHighlight: 'Synthetic, unintentionally toxic organic compounds that do not degrade easily in the environment. They accumulate in human and animal tissues, disrupt their natural biological pathways, and potentially cause cancer',
    labAuthor: 'Loganathan & Masunaga',
    labDate: '2015',
  }];

  imbbe = [
    {viewing: 'Interactions of Marine Bionts, and Benthic Ecology (IMBiBE) Laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212467/Research/Laboratories/MVB%20Rodriguez_IMBiBE/rodriguez-banner-logo_hkbvaz.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212431/Research/Laboratories/MVB%20Rodriguez_IMBiBE/2._IMBiBE_logo_w_qqdh5e.png',
    title: 'Interactions of Marine Bionts, and Benthic Ecology (IMBiBE) Laboratory',
    content: 'The Interactions of Marine Bionts, and Benthic Ecology (IMBiBE) Laboratory is a research group based at the Marine Science Institute, College of Science, University of the Philippines Diliman. IMBiBE indulges you to know more about the biology and ecology of marine organisms and their interaction with the environment. We are particularly interested in understanding how varying levels of threats from environmental change affect the reproductive, physiological and behavioral responses of coral reef organisms, such as corals, sponges, and fishes. Central to this goal are long-term monitoring of reef sites, biodiversity resource assessments, and experiments done in natural setting.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212457/Research/Laboratories/MVB%20Rodriguez_IMBiBE/7._IMBiBE_highlight_photo_nnperh.jpg',
    labHighlight: 'Sexual reproduction in the soft coral Lobophytum schoedei in Bolinao‐Anda Reef Complex, Pangasinan, northwestern Philippines.',
    labAuthor: 'Baran, et al.,',
    labDate: 'April 2021',
    labLink1: 'https://onlinelibrary.wiley.com/doi/abs/10.1111/ivb.12316',
    site: 'https://imbibelab.wixsite.com/researchlab',
  }];

  mbl = [
    {viewing: 'Marine Biogeochemistry Laboratory (MBGCL)',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212901/Research/Laboratories/San-Diego-McGlone_MBL/1_Banner%20Photo/Banner_MBGCL_yzwxu3.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212996/Research/Laboratories/San-Diego-McGlone_MBL/2_Logo/MBLlogo_F_jicjrf.png',
    title: 'Marine Biogeochemistry Laboratory (MBGCL)',
    content: 'Environmental stressors are linked with each other and they can have a significant impact on the ecosystem. Increased nutrients from anthropogenic activities (e.g. mariculture, domestic inputs) bring about eutrophication that can lead to blooms of algae that are either toxic or non-toxic, and fish kills.  Decomposition of dead blooms and other organic matter will utilize/deplete dissolved oxygen resulting in anoxia or hypoxia and release carbon dioxide.  Elevated carbon dioxide will decrease seawater pH and create acidic conditions that are detrimental to corals.  Ocean warming will increase respiration rates, cause coral bleaching resulting in poor coral health. Determining how these factors interact with one another can help in mitigating their impact on the environment.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628213184/Research/Laboratories/San-Diego-McGlone_MBL/7_Highlight%20Photos/P5310075-01_mzauzq.jpg',
    labHighlight: 'Spatio-temporal trends of pH, pCO2 and related parameters under DOST-PCAARRD Coastal Acidification Program',
    labLink1: 'https://chemoce.wixsite.com/marinebiogeochemlab/research-projects',
    site: 'https://chemoce.wixsite.com/marinebiogeochemlab',
  }];

  mpl = [
    {viewing: 'Marine Phycology Laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628213239/Research/Laboratories/Santianez_MarinePhycoLab/1-gallery-Sargassum-ecology_now0l1.jpg',
    bannerLogo: 'https://res.cloudinary.com/upmsi/image/upload/v1628213231/Research/Laboratories/Santianez_MarinePhycoLab/logo-marine-phycology-lab_pmnoyw.png',
    title: 'Marine Phycology Laboratory',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628213239/Research/Laboratories/Santianez_MarinePhycoLab/4-gallery-Halymenia-culture_thro4u.jpg',
    labHighlight: 'Updated checklist of the benthic marine macroalgae of the Philippines',

    labLink1: 'https://www.sciencedirect.com/science/article/abs/pii/S027277142100175X',
    labAuthor: 'Lastimoso and Santiañez',
    labDate: '(2021)',
    site: 'https://marinephycolab.netlify.app/',
    /**
    edited12 : edited the author, date and site. deledted the content
    */

  }];

  biome = [
    {viewing: 'Biological Oceanography and Modeling of Ecosystem (BiOME) laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628215886/Research/Laboratories/Yniguez_BiOME/01-yniguez-banner_ilpqmq.jpg',
    bannerLogo2: 'https://res.cloudinary.com/upmsi/image/upload/v1628215906/Research/Laboratories/Yniguez_BiOME/BiOME_logo_official_a2iipz.jpg',
    title: 'Biological Oceanography and Modeling of Ecosystem (BiOME) laboratory',
    content: 'The BiOME lab is generally interested in understanding how marine ecosystem patterns and processes emerge from the local interactions of individual organisms. Specifically, our research is centered around understanding the dynamics of the base of the food web of ocean ecosystems, especially the phytoplankton, how these are affected by anthropogenic and natural factors, and how these effects can cascade up to our fisheries.  Through an arsenal of field, laboratory and modelling approaches, we hope to obtain a better handle on issues such as changes in productivity and ecosystem conditions. One main approach is the use of computational models integrating empirical data across oceanographic scales and disciplines in order to tease out the mechanisms driving populations and ecosystems, as well as to help provide decision-support systems for natural resource conservation and management. Beyond research, the lab is actively involved in promoting better appreciation and understanding of the oceans and science at various levels: from high school kids to graduate students.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628215909/Research/Laboratories/Yniguez_BiOME/Lab_highlight_hklyvx.jpg',
    labHighlight: 'Characterizing the vertical phytoplankton distribution in the Philippine Sea off the northeastern coast of Luzon',
    labLink1: 'https://www.sciencedirect.com/science/article/abs/pii/S027277142100175X',
    labAuthor: 'Cordero, et al.,',
    labDate: 'March 2021',
    site: 'https://www.biomeph.com',
    /**
    edited12 : edited the site
    */

  }];

  marinePharma = [{
    viewing: 'Marine Pharmacognosy Laboratory',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212700/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/01-updated-salvador-reyes-banner_ke45tw.jpg',
    title: 'Marine Pharmacognosy Laboratory',
    content: 'Natural products are evolutionarily optimized and validated starting points for the development of valuable products for biomedical and industrial applications. Hence, natural products, particularly from marine organisms, can be dubbed as ‘blue gold’.',
    content1: 'Our work at the Marine Science Institute can be subdivided into three broad domains- natural products-initiated drug discovery, establishment of new methodologies to address the supply issue of natural products and characterization of marine toxins and venoms. Our main focus is on the discovery of natural products from marine organisms such as bacteria cyanobacteria, sponges and mollusks. We are part of two drug discovery consortia in the Philippines: Discovery and Development of Health Products (DDHP) and the Philippine Mollusk Symbiont-International Cooperative Biodiversity Group (PMS-ICBG). Both these projects aim to develop antibiotics, anticancer, and anti-pain agents from molecules produced by marine organisms from the Philippines. In addition, we also spearheaded the assessment of the biotechnological uses of less-studied organisms from the Philippines such as cyanobacteria and the antimalarial activity assessment of marine microorganisms from the Philippines.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628212716/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/highlight_1-Xestospongia_mariculture_copy_qxoec1.jpg',
    labHighlight: 'Mariculture Potential of Renieramycin-producing Philippine Blue Sponge Xestospongia sp. (Porifera: Haplosclerida)',
    labLink1: 'https://www.sciencedirect.com/science/article/abs/pii/S0044848618306331',
    labAuthor: 'Santiago, et al.,',
    labDate: 'March 2019',
  }];

  ecoDynamics = [{
    viewing: 'Ecosystem Dynamics Laboratory',
    bannerLogo3: 'https://res.cloudinary.com/upmsi/image/upload/v1628927297/Research/Laboratories/Yap_EDLab/0-logo_ypohmh_qtso3w.png',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628213650/Research/Laboratories/Yap_EDLab/01-yap-banner_ypd8h9.jpg',
    title: 'Ecosystem Dynamics Laboratory',
    content: 'Habitats are interconnected via material and energy flows, constituting one ecosystem in which the human component is embedded. It is not realistic to compartmentalize research approaches along thematic lines, or along boundaries such a terrestrial, marine or freshwater. At the lab we recognize that all disciplines are essential, covering biology, physics, chemistry and geology along with human psychology and the social sciences. A complex systems approach, with its essential underpinning of mathematical modeling, is the hallmark of the lab, its participating students and its collaborators.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628213728/Research/Laboratories/Yap_EDLab/6.1-lab-hilight-photoAttachment_4_Yap_HT_A_Wagner_dubuuc.jpg',
    labHighlight: 'Using deep-belief networks to understand propensity for livelihood change in a rural coastal community to further conservation',
    labLink1: 'https://pubmed.ncbi.nlm.nih.gov/32144796/',
    labAuthor: 'Labao, et al.,',
    labDate: 'August 2020',
  }];

  pbbl = [{
    viewing: 'The Protein Biochemistry and Biotechnology Laboratory',
    bannerLogo2: 'https://res.cloudinary.com/upmsi/image/upload/v1628216118/Research/Laboratories/Yu_PBBL/01-pbbl-logo-hi-res_hqgjh1.png',
    photoBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628216143/Research/Laboratories/Yu_PBBL/banner_photo_ix1mju.png',
    title: 'The Protein Biochemistry and Biotechnology Laboratory',
    content: 'Our lab pursues research on the discovery and structural characterization of biomolecules primarily by mass spectrometry-based approaches (metabolomics and proteomics) as well as traditional biochemical techniques. We hope that our discoveries will shed light on biochemical adaptations, mechanisms, and find applications in health and functional biomaterials.',
    labHighBanner: 'https://res.cloudinary.com/upmsi/image/upload/v1628216118/Research/Laboratories/Yu_PBBL/7-Highlight_rms9za.png',
    labHighlight: `Ericka Itang's paper based on her MS thesis was published in Marine Drugs.  She is a research associate and alumna of the lab (MS Chemistry, 2019).`,
    // labLink1: 'https://pubmed.ncbi.nlm.nih.gov/32144796/',
    // labAuthor: 'Labao, et al.,',
    labDate: 'October 2020',
    site: 'https://sites.google.com/up.edu.ph/pbbl-upd/home '
  }];

  CoREbool:boolean = false;
  mplbool:boolean = false;
  MMEELbool:boolean = false;
  algaebool:boolean = false;
  mmlbbool:boolean = false;
  myArr = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/marine-molecular-biology-lab'){
      this.myArr = this.mmlb;
      this.mmlbbool= true;
    }else if(this.router.url === '/Research/laboratories/marine-invertebrate-ecology-lab'){
      this.myArr = this.miel;
    }else if(this.router.url === '/Research/laboratories/microbial-oceanography-lab'){
      this.myArr = this.mol;
    }else if(this.router.url === '/Research/laboratories/algal-eco-physiology-lab'){
      this.myArr = this.algae;
      this.algaebool= true;
    }else if(this.router.url === '/Research/laboratories/coral-reef-ecology-laboratory'){
      this.myArr = this.CoRE;
      this.CoREbool= true;
    }else if(this.router.url === '/Research/laboratories/the-ocean-color-and-coastal-oceanography-laboratory'){
      this.myArr = this.OCCO;
    }else if(this.router.url === '/Research/laboratories/marine-molecular-ecology-and-evolution-laboratory'){
      this.myArr = this.MMEEL;
      this.MMEELbool= true;
    }else if(this.router.url === '/Research/laboratories/organic-and-stable-isotope-geochemistry'){
      this.myArr = this.oasis;
    }else if(this.router.url === '/Research/laboratories/Interactions-of-Marine-Bionts-and-Benthic-Ecosystems'){
      this.myArr = this.imbbe;
    }else if(this.router.url === '/Research/laboratories/Marine-Biogeochemistry-Laboratory'){
      this.myArr = this.mbl;
    }else if(this.router.url === '/Research/laboratories/Marine-Phycology-Laboratory'){
      this.myArr = this.mpl;
      this.mplbool= true;
    }else if(this.router.url === '/Research/laboratories/Biological-Oceanography-and-Modeling-of-Ecosystem-laboratory'){
      this.myArr = this.biome;
    }else if(this.router.url === '/Research/laboratories/marine-pharmacognosy-laboratory'){
      this.myArr = this.marinePharma;
    }else if(this.router.url === '/Research/laboratories/ecosystem-dynamics'){
      this.myArr = this.ecoDynamics;
    }else if(this.router.url === '/Research/laboratories/protein-biochemistry-and-biotechnology-laboratory'){
      this.myArr = this.pbbl;
    }
  }

  gotoResearch(){
    this.router.navigate(['/Research/laboratories']);
  }

}
