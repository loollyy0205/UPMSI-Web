import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labpage-gallery',
  templateUrl: './labpage-gallery.component.html',
  styleUrls: ['./labpage-gallery.component.css']
})
export class LabpageGalleryComponent implements OnInit {
  mmlb = [{
    gallery: [
      {image: 'https://dc592.4shared.com/img/HwCb_6veea/s24/179ac811010/gallery01_collection?async&rand=0.4847414938579431', title: 'Collection'},
      {image: 'https://dc592.4shared.com/img/41TxxFBkiq/s24/179ac812b68/gallery02_lemon_sponge?async&rand=0.2983379212914343', title: 'Lemon Sponge'},
      {image: 'https://dc592.4shared.com/img/AS0YfrYLiq/s24/179ac813720/gallery03_moon_sponge?async&rand=0.013704681663322393', title: 'Moon Sponge'},
      {image: 'https://dc592.4shared.com/img/_ov7mzKNiq/s24/179ac815278/gallery04_spicules?async&rand=0.28731584842960145', title: 'Spicules'},
      {image: 'https://dc592.4shared.com/img/DY_Q1tWrea/s24/179ac815660/gallery05_sponge_larvae?async&rand=0.07241193602042828', title: 'Sponge Larvae Clam'},
      {image: 'https://dc592.4shared.com/img/_A7vUclaiq/s24/179ac816dd0/gallery06_spawning?async&rand=0.20967131045693943', title: 'Spawning'},
      {image: 'https://dc592.4shared.com/img/cnBXR6r_ea/s24/179ac8171b8/gallery07_giant_clam?async&rand=0.9104723698405224', title: 'Giant Clam'},
      {image: 'https://dc592.4shared.com/img/EdXQiqGwiq/s24/179ac8194e0/gallery08_hatchery?async&rand=0.004589303202227724', title: 'Hatchery'},
      {image: 'https://dc592.4shared.com/img/j8jJwwo6ea/s24/179ac81a868/gallery09_clam_juvenile?async&rand=0.843608766704607', title: 'Clam Juvenile'},
      {image: 'https://dc592.4shared.com/img/61RW0UHbiq/s24/179ac81b420/gallery10_coral_juvenile?async&rand=0.6059688692818099', title: 'Coral Juvenile'},
    ],
    pi: 'https://dc596.4shared.com/img/dzISGSGCea/s24/179ac810c28/cecilia?async&rand=0.9885364433133528',
    piName: 'Cecilia Conaco, PhD',
    degree: 'Associate Professor',
    aboutPi: 'Cecilia is interested in the regulatory networks that control gene expression dynamics underlying the ability of many marine organisms to rapidly respond and adapt to their environment. She is also fascinated by neuronal development and early animal evolution. ',
  }];

  miel = [{
    gallery: [
      {image: 'https://dc527.4shared.com/img/NVn8ENemea/s24/179ac7ff2e8/gallery_1?async&rand=0.12394945658451206'},
      {image: 'https://dc592.4shared.com/img/251xGHRSiq/s24/179ac800670/gallery_2?async&rand=0.8021948575382807'},
      {image: 'https://dc592.4shared.com/img/4B1ExrDQea/s24/179ac800e40/gallery_3?async&rand=0.6007368914689513'},
      {image: 'https://dc592.4shared.com/img/x3ycnk23ea/s24/179ac8025b0/gallery_4__1_?async&rand=0.6136173948242247'},
      {image: 'https://dc592.4shared.com/img/5IrVxyrAiq/s24/179ac803938/gallery_5?async&rand=0.3687143748319526'},
      {image: 'https://dc592.4shared.com/img/rwQwKoR9iq/s24/179ac804108/gallery_6?async&rand=0.9285246351532579'},
      {image: 'https://dc527.4shared.com/img/hN5zwcm6ea/s24/179ac805490/gallery_7?async&rand=0.0936580468814614'},
      {image: 'https://dc527.4shared.com/img/5GXFvG9ziq/s24/179ac806818/gallery_8?async&rand=0.5243450982692706'},
      {image: 'https://dc592.4shared.com/img/EWesjf6Miq/s24/179ac806fe8/gallery_9?async&rand=0.8209489900245752'},
      {image: 'https://dc592.4shared.com/img/iuO2ioJ2ea/s24/179ac7ff6d0/gallery_10?async&rand=0.8496289912503652'},
     ],
    pi: 'https://dc527.4shared.com/img/PIHmuSOziq/s24/179ac809310/PI_profile?async&rand=0.26899173507183005',
    piName: 'Marie Antonette Juinio-Meñez, Ph.D.',
    aboutPi: 'Dr. Marie Antonette Juinio-Meñez obtained her Ph.D. in Biological Sciences from the University of Rhode Island, USA. Her research interests include invertebrate biology, larval ecology and recruitment, benthic ecology, and population genetics specifically on the culture and fisheries management of invertebrates, community-based coastal resources management, stock restoration and environmental governance.',
  }];

  mol = [{
    gallery: [
      {image: 'https://dc592.4shared.com/img/tECBvB8jea/s24/179ac7ddbc0/4_Gallery__Deployment_of_the_N?async&rand=0.47876752829729163'},
      {image: 'https://dc592.4shared.com/img/DGD1M7coea/s24/179ac7de390/4_Gallery__Diatoms_and_dinofla?async&rand=0.11260800568969409'},
      {image: 'https://dc592.4shared.com/img/N0SVAFblea/s24/179ac7def48/4_Gallery__Phytoplankton_sampl?async&rand=0.7625938232413922'},
      {image: 'https://dc588.4shared.com/img/lfkTU2aaea/s24/179ac7df718/4_Gallery__Red_Algae__Florideo?async&rand=0.49888022260764653'},
      {image: 'https://dc592.4shared.com/img/loMYWnIWea/s24/179ac7e02d0/4_Gallery__Transect_for_Macrop?async&rand=0.7647380229505292'},
  ],
    pi: 'https://dc592.4shared.com/img/EeKeoTgOea/s24/179ac7e1658/6_PI_Profile_Photo__Dr_Deo_Flo?async&rand=0.3014815868037075',
    piName: 'Deo Florence L. Onda, PhD',
    aboutPi: 'Deo is known for being the first Filipino to descend into the Emden Deep in the Philippine Trench. Determined to find sustainable solutions to the climate change issues affecting the world’s oceans through ecology, his work centres on further understanding the diversity, ecology, distribution, and responses of microbial communities to these changing conditions.',
  }];

  algae = [{
    gallery: [
      {image: 'https://dc592.4shared.com/img/zKWEtqDzea/s24/179ac7e9740/Fieldwork_GOPR0125_2?async&rand=0.853475269841401'},
      {image: 'https://dc592.4shared.com/img/pJVbc8fviq/s24/179ac7e9f10/Genebank_IMG_7516?async&rand=0.9776698932913332'},
      {image: 'https://dc588.4shared.com/img/9Mf2JftTiq/s24/179ac7ea2f8/Outdoor_landbased_nursery_GOPR?async&rand=0.4865700438276872'},
      {image: 'https://dc592.4shared.com/img/gvSnp_yiea/s24/179ac7eaac8/Outdoor_landbased_nursery_IMG_?async&rand=0.6052106749996042'},
      {image: 'https://dc592.4shared.com/img/MbiAjg82iq/s24/179ac7edd90/Outdoor_landbased_nursery_IMG_?async&rand=0.4988312245474775'},
      {image: 'https://dc527.4shared.com/img/WGWOqWVyiq/s24/179ac7ef8e8/Outdoor_landbased_nursery_IMG_?async&rand=0.8445437240443976'},
      {image: 'https://dc527.4shared.com/img/N3XDKaTDea/s24/179ac7f27c8/Seaweeds_in_natural_habitat_RI?async&rand=0.563747432008205'},
      {image: 'https://dc592.4shared.com/img/KMeqpLzOiq/s24/179ac7f5a90/Spore_culture_IMG_8969?async&rand=0.7095174779079796'},
      {image: 'https://dc592.4shared.com/img/7oLjA9hRea/s24/179ac7f2bb0/Spore_cultures_IMG_6358?async&rand=0.9577913064330437'},
      {image: 'https://dc592.4shared.com/img/4lyqjQ52ea/s24/179ac7f3380/Spore_cultures_IMG_6459?async&rand=0.9754724172736313'},
      {image: 'https://dc592.4shared.com/img/InSJkFohea/s24/179ac7f3b50/Spore_cultures_IMG_7183?async&rand=0.32107548356593485'},
      {image: 'https://dc527.4shared.com/img/ZwSVmFHhiq/s24/179ac7f3f38/Spore_cultures_IMG_7204?async&rand=0.8252385225060757'},
     ],
    pi: 'https://dc588.4shared.com/img/fibRCuGBea/s24/179ac7e87a0/3_PI_MYRoleda?async&rand=0.12911580764776476',
    piName: 'Michael Y. Roleda, Dr. rer. nat. ',
    degree: 'Professor IV',
    aboutPi: 'Dr. Michael Y. Roleda obtained his Doctorate degree in Natural Sciences (Biology) in Germany. He is currently the Deputy Director for Facilities and Resources in the institute. His research interests are algal stress physiology, applied phycology, ecophysiology, productivity, marine flora biodiversity, cultivation, photobiology, and photochemistry.',
  }];


  mielbool: boolean = true;
  mmblbool: boolean = true;



  myArr = [];


  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/marine-molecular-biology-lab'){
      this.myArr = this.mmlb;
      this.mielbool = false;
    }else if(this.router.url === '/Research/laboratories/marine-invertebrate-ecology-lab'){
      this.myArr = this.miel;
    }else if(this.router.url === '/Research/laboratories/microbial-oceanography-lab'){
      this.myArr = this.mol;
    }else if(this.router.url === '/Research/laboratories/algal-eco-physiology-lab'){
      this.myArr = this.algae;
    }

  }
}
