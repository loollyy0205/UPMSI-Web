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
      {image: 'https://dc570.4shared.com/img/0HAdy1oQiq/s24/179d2bd06d0/Spore_cultures_IMG_6358__2_?async&rand=0.6526363768527443'},
      {image: 'https://dc592.4shared.com/img/4lyqjQ52ea/s24/179ac7f3380/Spore_cultures_IMG_6459?async&rand=0.9754724172736313'},
      {image: 'https://dc570.4shared.com/img/JZGH7A2cea/s24/179d2bd1e40/Spore_cultures_IMG_7183__2_?async&rand=0.25269479703709985'},
      {image: 'https://dc570.4shared.com/img/FDuw1Ntriq/s24/179d2bd2de0/Spore_cultures_IMG_7204__2_?async&rand=0.45436351025829036'},
     ],
    pi: 'https://dc588.4shared.com/img/fibRCuGBea/s24/179ac7e87a0/3_PI_MYRoleda?async&rand=0.12911580764776476',
    piName: 'Michael Y. Roleda, Dr. rer. nat. ',
    degree: 'Professor IV',
    aboutPi: 'Dr. Michael Y. Roleda obtained his Doctorate degree in Natural Sciences (Biology) in Germany. He is currently the Deputy Director for Facilities and Resources in the institute. His research interests are algal stress physiology, applied phycology, ecophysiology, productivity, marine flora biodiversity, cultivation, photobiology, and photochemistry.',
  }];

  CoRE = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/B1TlNC3Diq/s24/179e56c0420/1_Reefscape_4?async&rand=0.22781456064172545'},
      {image: 'https://dc741.4shared.com/img/SN0oosO3ea/s24/179e56cbfa0/2_Balingasay_bleaching_survey_?async&rand=0.9016288186282262'},
      {image: 'https://dc570.4shared.com/img/1d3B0Flrea/s24/179e59108b0/3_MCE_Apo_reef?async&rand=0.3930417435134368'},
      {image: 'https://dc570.4shared.com/img/vIUrP8yEiq/s24/179e56d9a60/4_Coral?async&rand=0.3476628063495677'},
      {image: 'https://dc570.4shared.com/img/wL4XkdHgea/s24/179e56daa00/5_P2155318?async&rand=0.8955837470471804'},
      {image: 'https://dc741.4shared.com/img/HR2mRY3-ea/s24/179e56db1d0/6_P6210212?async&rand=0.11675746815873356'},
      {image: 'https://dc570.4shared.com/img/R_O_qFeiea/s24/179e56dc170/7_noae?async&rand=0.008541581469352577'},
      {image: 'https://dc396.4shared.com/img/p3Fx8ykJea/s24/179e56e2318/8_DSC06177?async&rand=0.9419668833300288  '},
      {image: 'https://dc570.4shared.com/img/-nMxIEQ8iq/s24/179e56e4e10/9_Cassis?async&rand=0.04961824404157089'},
      {image: 'https://dc741.4shared.com/img/z596NqZDea/s24/179e56c13c0/10_Fish_macro_1?async&rand=0.7777046237618108'},
      {image: 'https://dc570.4shared.com/img/msOUnpqhea/s24/179e56c2f18/11_P8259590?async&rand=0.8377463956467772'},
      {image: 'https://dc741.4shared.com/img/qLrnI5NSiq/s24/179e56c3eb8/12_Drupella2?async&rand=0.642882074205386'},
      {image: 'https://dc741.4shared.com/img/tOX1JbYSea/s24/179e56c42a0/13_Drupella?async&rand=0.2577915429646851'},
      {image: 'https://dc741.4shared.com/img/_beaiMe2iq/s24/179e56c5240/14_Fisheries_survey_1?async&rand=0.7125921635911896'},
      {image: 'https://dc570.4shared.com/img/CiewjgA2ea/s24/179e56c5df8/15_Survey_action_3?async&rand=0.25227137982153836'},
      {image: 'https://dc570.4shared.com/img/-tk5R3Yoea/s24/179e56c69b0/16_Giant_Clam_Culture_Training?async&rand=0.2254807722088914'},
      {image: 'https://dc570.4shared.com/img/pKXuFX5Rea/s24/179e56c88f0/17_IMG_0356?async&rand=0.30934515135005825'},
      {image: 'https://dc741.4shared.com/img/lxXZBHXQiq/s24/179e56c94a8/18_NSTW?async&rand=0.9478431363491471'},
      {image: 'https://dc741.4shared.com/img/rP4oqtiiiq/s24/179e56c9c78/19_DSC00866?async&rand=0.3835203497344122'},
      {image: 'https://dc741.4shared.com/img/UDQHS_mpea/s24/179e56cc770/20_Hatchery?async&rand=0.33460006357139616'},
      {image: 'https://dc570.4shared.com/img/8tH5z9sQea/s24/179e56cd328/21_Giant_clam_monitoring?async&rand=0.5682699265817253'},
      {image: 'https://dc741.4shared.com/img/8mocOefEea/s24/179e56cdaf8/22_T_gigas_gonad_biopsy?async&rand=0.060994600555766665'},
      {image: 'https://dc570.4shared.com/img/gqzRyBpkea/s24/179e56ce2c8/23_Mantle_clipping_Camiguin?async&rand=0.5347017152326821'},
      {image: 'https://dc741.4shared.com/img/wAqckjLMiq/s24/179e56cf268/24_P7091099?async&rand=0.36012170990543924'},
      {image: 'https://dc570.4shared.com/img/Ve0sfsz1iq/s24/179e56d05f0/25_Spawning_macro_2?async&rand=0.3067640784914034'},
      {image: 'https://dc570.4shared.com/img/vIedlw12ea/s24/179e56d2918/26_A_tenuis_gravid_colony_?async&rand=0.6011720352664216'},
      {image: 'https://dc741.4shared.com/img/QxcqOLiUea/s24/179e56d30e8/27_Spawning_collection_1?async&rand=0.9580540816188967'},
      {image: 'https://dc741.4shared.com/img/FYXIFr9Riq/s24/179e56d4858/28_P3180274?async&rand=0.2649266940851147'},
      {image: 'https://dc741.4shared.com/img/y1qXp5WNea/s24/179e56d6798/29_Larval_reseeding?async&rand=0.7757233902896248'},
      {image: 'https://dc741.4shared.com/img/ZUw_TAu_ea/s24/179e56d7350/30_coral_monitoring?async&rand=0.5578961426326161'},
      {image: 'https://dc570.4shared.com/img/5huhdA20ea/s24/179e56d7f08/31_PLDT_Project_4_San_Antonio_?async&rand=0.5892648541442702'},
      {image: 'https://dc570.4shared.com/img/-ocOLLETea/s24/179e56d8ea8/32_PLDT_Project_4_Calaguas_Isl?async&rand=0.5667939893044387'},
     ],
    pi: 'https://dc570.4shared.com/img/Ngq8lPZMea/s24/179e56be8c8/5_P_Cabaitan?async&rand=0.7296222922479139',
    piName: 'Patrick C. Cabaitan, Ph.D.',
    degree: 'Associate Professor',
    aboutPi: 'Dr. Patrick Cabaitan obtained his Doctorate degree in Marine Science at the University of Ryukyus, Okinawa, Japan in 2012 and did his post-doctoral research fellowship at National University of Singapore in 2015. He currently works as an Associate Professor at the Marine Science Institute, University of the Philippines-Diliman. His research interests include reef community and restoration ecology.',
  }];

  OCCO = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/_PjnzZxkiq/s24/179e59d2640/_1__Fish-i_imaging_survey_dive?async&rand=0.6969110119056292'},
      {image: 'https://dc543.4shared.com/img/kU5eAVLkiq/s24/179e59d31f8/_1__Fish-i_imaging_survey_dive?async&rand=0.14244647217011175'},
      {image: 'https://dc543.4shared.com/img/T4NL96Ddiq/s24/179e59d35e0/_1__Fish-i_imaging_survey_dive?async&rand=0.44237886701088325'},
      {image: 'https://dc570.4shared.com/img/H0Szm4kxea/s24/179e59d3db0/_1__Fish-i_imaging_survey_dive?async&rand=0.9109133167536725'},
      {image: 'https://dc570.4shared.com/img/lPKsikj2ea/s24/179e59d8018/_2__Visayan_Sea_Cruise_of_the_?async&rand=0.3528558920855789'},
      {image: 'https://dc570.4shared.com/img/ZK1Xw-G5iq/s24/179e59d9788/_2__Visayan_Sea_Cruise_of_the_?async&rand=0.1891319169953103'},
      {image: 'https://dc610.4shared.com/img/_pg-Gce8iq/s24/179e59db6c8/_2__Visayan_Sea_Cruise_of_the_?async&rand=0.04796056750843536'},
      {image: 'https://dc570.4shared.com/img/xxEuHKzCiq/s24/179e59dce38/_3__PN_UP-MSI_MSR_Mission_in_T?async&rand=0.9920663544140094'},
      {image: 'https://dc570.4shared.com/img/N7pU6aGIiq/s24/179e59ded78/_3__PN_UP-MSI_MSR_Mission_in_T?async&rand=0.6854304516583416'},
      {image: 'https://dc570.4shared.com/img/a-k1QZHoea/s24/179e59e04e8/_3__PN_UP-MSI_MSR_Mission_in_T?async&rand=0.547236307800332'},
      {image: 'https://dc570.4shared.com/img/M1esicj2ea/s24/179e59e1870/_4__The_Mobile_Marine_and_Nava?async&rand=0.27053325166031317'},
      {image: 'https://dc610.4shared.com/img/_g6vB_5kiq/s24/179e59e2428/_4__The_Mobile_Marine_and_Nava?async&rand=0.22748910794844446'},
      {image: 'https://dc610.4shared.com/img/_g6vB_5kiq/s24/179e59e2428/_4__The_Mobile_Marine_and_Nava?async&rand=0.22748910794844446'},
      {image: 'https://dc570.4shared.com/img/-4qyiLkMiq/s24/179e59e3b98/_5__Resilience__Survive_and_Th?async&rand=0.6495657380491573'},
      {image: 'https://dc570.4shared.com/img/HkcSCHpRea/s24/179e59e3f80/_6__Resilience_Survive_and_Thr?async&rand=0.4284714531645515'},
     ],
    pi: 'https://dc610.4shared.com/img/0bZ_ODeUiq/s24/179e59e89b8/OCCO_Principal_Investigator?async&rand=0.9443033067076487',
    piName: 'Laura T. David, Ph.D.',
    aboutPi: 'Dr. David is a Professor and Director of the University of the Philippines Marine Science Institute (UP-MSI). Recognized as one of the country’s pioneers in Ocean Remote Sensing, her research includes using remote sensing and numerical modelling to explore how ocean physics influences the distribution and state of ocean flora and fauna. Her expertise is being tapped regionally to assist in matters related to climate change vulnerability and adaptation. She is currently the Chair of the CHED Technical Committee in Marine Science, a member of the National Panel of Technical Experts of the Climate Change Commission, and a member of the International Scientific Steering Committee of GEO Blue Planet and Future Earth Coasts.',
  }];

  MMEEL = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/lKAJsWSyea/s24/179e6c0ab28/DSC05140?async&rand=0.19024397500400725'},
      {image: 'https://dc570.4shared.com/img/7kfX7oWcea/s24/179e6c0b6e0/DSCN5499?async&rand=0.6410492097890188'},
      {image: 'https://dc570.4shared.com/img/1Oi4X_rqea/s24/179e6c0ddf0/DSCN6201?async&rand=0.31842378019391404'},
      {image: 'https://dc570.4shared.com/img/x9f9fptfea/s24/179e6c0fd30/IMG_2913?async&rand=0.31643893041481896'},
      {image: 'https://dc570.4shared.com/img/Eub-6DJYea/s24/179e6c12c10/P4280128?async&rand=0.8015783790945152'},
      {image: 'https://dc570.4shared.com/img/u_k9tmZyea/s24/179e6c14380/P4290605?async&rand=0.44464897265939474'},
      {image: 'https://dc570.4shared.com/img/Z_Ppc0Nuiq/s24/179e6c15af0/P5166368?async&rand=0.5819443651029024'},
     ],
    pi: 'https://dc570.4shared.com/img/TUhDNp7nea/s24/179e6c06ca8/RRGotanco_Photo?async&rand=0.6876975213287444',
    piName: 'Rachel Ravago-Gotanco, Ph.D.',
    aboutPi: 'Dr. Ravago-Gotanco applies her background in molecular biology, biotechnology, and marine science to advance research on ecology and evolution in the oceans. She is particularly interested in exploring the ecological and evolutionary drivers of diversification and divergence in marine populations using genomic data, phylogeographic, population- and seascape-genomics approaches. She is also interested in the application of genomics-enabled tools and technologies to cultured populations of marine organisms, to support improved and sustainable aquaculture.',
  }];

  oasis = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/RYIshK4viq/s24/179e6ce5b10/1_online?async&rand=0.6771540466105284'},
      {image: 'https://dc570.4shared.com/img/xMTLSwn_ea/s24/179e6cf4958/2_online?async&rand=0.26719349897968003'},
      {image: 'https://dc570.4shared.com/img/1dc8X_sqea/s24/179e6cf7c20/3_online?async&rand=0.27978289502116094'},
      {image: 'https://dc570.4shared.com/img/iShkkDMMea/s24/179e6cfaee8/4_online?async&rand=0.2874137509695798'},
      {image: 'https://dc570.4shared.com/img/ghjGE9RRiq/s24/179e6cfd5f8/5_online?async&rand=0.524900142256147'},
      {image: 'https://dc570.4shared.com/img/kq0mqihyea/s24/179e6d000f0/6_online?async&rand=0.3371078490763284'},
      {image: 'https://dc570.4shared.com/img/43Fbitegea/s24/179e6d02030/7_online?async&rand=0.9460573355387429'},
      {image: 'https://dc570.4shared.com/img/GIULXwDaiq/s24/179e6d052f8/8_online?async&rand=0.14482659168318746'},
      {image: 'https://dc570.4shared.com/img/GIULXwDaiq/s24/179e6d052f8/8_online?async&rand=0.14482659168318746'},
      {image: 'https://dc570.4shared.com/img/GIULXwDaiq/s24/179e6d052f8/8_online?async&rand=0.14482659168318746'},
      {image: 'https://dc570.4shared.com/img/Ut2X8yaJiq/s24/179e6cec0a0/11_online?async&rand=0.5041326660303131'},
      {image: 'https://dc570.4shared.com/img/Ut2X8yaJiq/s24/179e6cec0a0/11_online?async&rand=0.5041326660303131'},
      {image: 'https://dc570.4shared.com/img/Ut2X8yaJiq/s24/179e6cec0a0/11_online?async&rand=0.5041326660303131'},
      {image: 'https://dc570.4shared.com/img/9vMDNu7Dea/s24/179e6d0e768/ASV_retrieval_at_Boracay_-_ctt?async&rand=0.09481410282883695'},
      {image: 'https://dc570.4shared.com/img/9vMDNu7Dea/s24/179e6d0e768/ASV_retrieval_at_Boracay_-_ctt?async&rand=0.09481410282883695'},
      {image: 'https://dc570.4shared.com/img/-dObbvuKiq/s24/179e6d102c0/Boracay_-_credits_to_Mishel?async&rand=0.21517414853299965'},
      {image: 'https://dc570.4shared.com/img/gi3fYyLGea/s24/179e6d11a30/Bulabog_beach_Boracay_-_credit?async&rand=0.9936223567525062'},
      {image: 'https://dc570.4shared.com/img/gi3fYyLGea/s24/179e6d11a30/Bulabog_beach_Boracay_-_credit?async&rand=0.9936223567525062'},
      {image: 'https://dc570.4shared.com/img/5EyOeboLea/s24/179e6d177f0/JOIDES_trip_2018-_credits_to_Z?async&rand=0.7931581662765019'},
      {image: 'https://dc570.4shared.com/img/wegpBS3Aea/s24/179e6d1c610/Mabini_trip_2018?async&rand=0.1034523344106395'},
      {image: 'https://dc570.4shared.com/img/rM1HryCyea/s24/179e6d20490/MR_Panata_in_Tubbataha_-_credi?async&rand=0.36021358391950575'},
      {image: 'https://dc570.4shared.com/img/Nuif8mfJiq/s24/179e6d223d0/MSI_Christmas_party_2019?async&rand=0.18381052150511445'},
      {image: 'https://dc570.4shared.com/img/vAJWShapea/s24/179e6d23758/OSM_2020_1_?async&rand=0.725963567791551'},
      {image: 'https://dc570.4shared.com/img/-iYnyBhkea/s24/179e6d23f28/OSM_2020_2_?async&rand=0.6610780059903083'},
      {image: 'https://dc570.4shared.com/img/zSbiq_fiea/s24/179e6d25a80/OSM_conference_2020?async&rand=0.8256808238712536'},
      {image: 'https://dc570.4shared.com/img/L3VkXMwaea/s24/179e6d26e08/Puka_beach_Boracay_-_credits_t?async&rand=0.556459898172101'},
      {image: 'https://dc570.4shared.com/img/tc3YIOGCiq/s24/179e6d29518/Rangers_in_patrol_boat_going_b?async&rand=0.9778980796625061'},
      {image: 'https://dc570.4shared.com/img/GFXQjREgea/s24/179e6d2a0d0/South_Atoll_light_house_-_cred?async&rand=0.20612648171514558'},
      {image: 'https://dc570.4shared.com/img/YqOq0aiHiq/s24/179e6d2cfb0/South_atoll_sampling_-_credits?async&rand=0.4731570145586792'},
      {image: 'https://dc570.4shared.com/img/evtnJp3miq/s24/179e6d30660/Tubb_cruise_team_with_TMO_phot?async&rand=0.4537955791742081'},
      {image: 'https://dc570.4shared.com/img/_6I9AtJkiq/s24/179e6d33928/Tubbataha_ranger_station_view_?async&rand=0.1826561856026654'},
      {image: 'https://dc570.4shared.com/img/_6I9AtJkiq/s24/179e6d33928/Tubbataha_ranger_station_view_?async&rand=0.1826561856026654'},
      {image: 'https://dc570.4shared.com/img/kaudOVeoea/s24/179e6d3b240/Tubbataha_water_sampling_-_cre?async&rand=0.563393904919085'},
     ],
    pi: 'https://dc570.4shared.com/img/V2qlPZwoea/s24/179e6ce3fb8/CJ_photo?async&rand=0.9979707936622921',
    piName: 'Caroline Marie B. Jaraula, Ph.D.',
    degree: 'Assistant Professor',
  }];

  imbbe = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/hRmI4Amciq/s24/179e6e52ed0/4_IMBiBE_Gallery_photo_1?async&rand=0.7864403640124404'},
      {image: 'https://dc570.4shared.com/img/7JLDgrRLea/s24/179e6e532b8/4_IMBiBE_Gallery_photo_2?async&rand=0.6587767870738321'},
      {image: 'https://dc570.4shared.com/img/KauEUCRFiq/s24/179e6e536a0/4_IMBiBE_Gallery_photo_3?async&rand=0.5640577188097211'},
      {image: 'https://dc570.4shared.com/img/wpETrpFiea/s24/179e6e54258/4_IMBiBE_Gallery_photo_4?async&rand=0.8186818691259925'},
      {image: 'https://dc570.4shared.com/img/QwwfsnLOiq/s24/179e6e54e10/4_IMBiBE_Gallery_photo_5?async&rand=0.47893634224696835'},
      {image: 'https://dc570.4shared.com/img/0tIPjqEwea/s24/179e6e61160/4_IMBiBE_Gallery_photo_6?async&rand=0.1553714834757003'},
      {image: 'https://dc570.4shared.com/img/GkA7hUY1ea/s24/179e6e61930/4_IMBiBE_Gallery_photo_7?async&rand=0.81535154304813'},
      {image: 'https://dc570.4shared.com/img/x8ciu4fziq/s24/179e6e62100/4_IMBIBE_Gallery_photo_8?async&rand=0.23143205617786622'},
     ],
    pi: 'https://dc570.4shared.com/img/LGlZBQW6ea/s24/179e6e64428/5_PI_IMBiBE_Profile_photo?async&rand=0.2954028587963302',
    piName: 'Maria Vanessa B. Rodriguez, Ph.D.',
    aboutPi: 'Dr. Maria Vanessa Rodriguez obtained her Doctoral Degree in Marine and Environmental Science at the University of the Ryukyus in Okinawa, Japan. She currently works as an Assistant Professor at the Marine Science Institute. Her academic and research interests include: coral reef ecology, coral and sponge reproduction, and coral recruitment, physiology, and restoration. ',
  }];

  mbl = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/pAS56iIIea/s24/179e70b3918/Cha_helps_in_preservation_of_s?async&rand=0.4956759077470423'},
      {image: 'https://dc570.4shared.com/img/qF8a78ZIea/s24/179e70b3d00/DSC04923?async&rand=0.6625939704277977'},
      {image: 'https://dc570.4shared.com/img/NdTFcPRKea/s24/179e70b6be0/DSC04929?async&rand=0.9917166431442876'},
      {image: 'https://dc570.4shared.com/img/0BZMNE99ea/s24/179e70b8b20/DSC04936?async&rand=0.9440798339528214'},
      {image: 'https://dc570.4shared.com/img/1kgAstQiiq/s24/179e70ba678/P3249693?async&rand=0.7827812154615439'},
      {image: 'https://dc570.4shared.com/img/oG7KO8mEiq/s24/179e70bae48/Picture2?async&rand=0.9877898418721542'},
      {image: 'https://dc570.4shared.com/img/d3Ci90vJiq/s24/179e70bb230/SetPic_In_situ_Nutrient_Experi?async&rand=0.142411955076712'},
      {image: 'https://dc570.4shared.com/img/rbGOU5TViq/s24/179e70bf498/SetPic_Indoor_OAT__Indoor_pH-t?async&rand=0.9390149306454108'},
      {image: 'https://dc570.4shared.com/img/xrzQauouea/s24/179e70c2b48/SetPic_Nutrient_Experiment_Act?async&rand=0.3753414992249813'},
      {image: 'https://dc570.4shared.com/img/VCkNsGTyiq/s24/179e70c46a0/SetPic_Outdoor_Ocean_Acidifica?async&rand=0.1683430352384676'},
     ],
    pi: 'https://dc570.4shared.com/img/GZUDGjlSea/s24/179e70b3148/Malou_San_Diego-McGlone?async&rand=0.3902962605726288',
    piName: 'Ma. Lourdes S. McGLone, Ph.D.',
    aboutPi: 'The Marine Biogeochemistry Laboratory is headed by Dr. Maria Lourdes San Diego-McGlone, a Full Professor at the UP Marine Science Institute. She obtained her Ph.D. in Chemical Oceanography at the Old Dominion University in Norfolk, Virginia. The research interest of the lab is to examine environmental stressors and their impact on coastal systems.  Among these stressors are increased nutrients, ocean warming, and low pH.',
  }];

  mpl = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/Gb4oPDxUea/s24/179e719d748/1-gallery-Sargassum-ecology?async&rand=0.588450276648931'},
      {image: 'https://dc570.4shared.com/img/RNTqa7heiq/s24/179e71a0240/2-gallery-Asparagopsis-biology?async&rand=0.09524356929975797'},
      {image: 'https://dc570.4shared.com/img/xXfK_W8Jea/s24/179e71a67d0/3-gallery-Halimeda-biodiversit?async&rand=0.47640312880066005'},
      {image: 'https://dc570.4shared.com/img/qOeqRW3Eea/s24/179e71aa268/4-gallery-Halymenia-culture?async&rand=0.30716755204565027'},
      {image: 'https://dc570.4shared.com/img/TBgjgbMLiq/s24/179e71abdc0/5-gallery-culture?async&rand=0.35551398076844287'},
     ],
    pi: 'https://dc570.4shared.com/img/DChwsrPOiq/s24/179e71b3ac0/profile-photo-santianez?async&rand=0.6430260604211044',
    piName: 'Wilfred John E. Santiañez, Ph.D. ',
    aboutPi: 'Dr. Wilfred John E. Santiañez obtained his Ph.D. in Natural History Sciences (Biodiversity) from Hokkaido University in Sapporo, Japan where he worked on the systematics of the brown algal family Scytosiphonaceae. He is currently the Collections Manager of the Gregorio T. Velasquez Phycological Herbarium (MSI), the largest algal herbarium in the tropical western Pacific. He is interested in various aspects of seaweed research including seaweed diversity, biology, ecology, and cultivation.',
  }];

  biome = [{
    gallery: [
      {image: 'https://dc570.4shared.com/img/6tvObZDeiq/s24/179e726db50/1_gallery_Plankton_ecology?async&rand=0.7613679849835118'},
      {image: 'https://dc570.4shared.com/img/oCL_eNdfiq/s24/179e726eed8/2_gallery_Harmful_algal_blooms?async&rand=0.8790488889858552'},
      {image: 'https://dc570.4shared.com/img/Kx-BpP6Nea/s24/179e7273528/3_gallery_Field_sampling?async&rand=0.800710382379372'},
      {image: 'https://dc570.4shared.com/img/l89Ci5kMea/s24/179e7275468/4_gallery_Plankton_community_e?async&rand=0.8139498222973824'},
      {image: 'https://dc570.4shared.com/img/l89Ci5kMea/s24/179e7275468/4_gallery_Plankton_community_e?async&rand=0.8139498222973824'},
      {image: 'https://dc570.4shared.com/img/NkScLuuDea/s24/179e7280430/6_gallery_Impacts_on_fisheries?async&rand=0.4935086139507856'},
     ],
    pi: 'https://dc570.4shared.com/img/4CsijYv2ea/s24/179e7282b40/Yniguez_profile_photo?async&rand=0.3483205482693055',
    piName: 'Aletta T. Yñiguez, Ph.D.',
    aboutPi: 'Dr. Aletta Yñiguez is an Associate Professor at the Marine Science Institute, University of the Philippines in Diliman. She obtained her Ph.D. from the Rosenstiel School of Marine and Atmospheric Science (RSMAS), University of Miami in Florida with the support of Fulbright and Maytag scholarships. She is also the Chair of the UP Puerto Galera Biodiversity and Environmental Research and Outreach Center. She is interested in population and ecosystem dynamics, plankton ecology, harmful algal blooms, fisheries, human impacts on marine ecosystems, ecological modelling.',
  }];

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
}
