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
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151452/Research/Laboratories/Conaco_MMBL/gallery07_giant_clam_dlxld5.jpg', title: 'Collection'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151448/Research/Laboratories/Conaco_MMBL/gallery01_collection_aghzqk.jpg', title: 'Lemon Sponge'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151447/Research/Laboratories/Conaco_MMBL/highlight_heliopora_overgrowing_other_corals_yfyqnx.jpg', title: 'Moon Sponge'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151426/Research/Laboratories/Conaco_MMBL/gallery03_moon_sponge_fgoe39.jpg', title: 'Spicules'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151413/Research/Laboratories/Conaco_MMBL/gallery08_hatchery_kifdkh.jpg', title: 'Sponge Larvae Clam'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151409/Research/Laboratories/Conaco_MMBL/gallery10_coral_juvenile_hwj1rk.jpg', title: 'Spawning'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151403/Research/Laboratories/Conaco_MMBL/gallery05_sponge_larvae_inxwjp.jpg', title: 'Giant Clam'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151401/Research/Laboratories/Conaco_MMBL/gallery09_clam_juvenile_dxzmim.jpg', title: 'Hatchery'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151379/Research/Laboratories/Conaco_MMBL/gallery02_lemon_sponge_vlej8f.jpg', title: 'Clam Juvenile'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151325/Research/Laboratories/Conaco_MMBL/gallery06_spawning_jky1c7.jpg', title: 'Coral Juvenile'},
    ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628151323/Research/Laboratories/Conaco_MMBL/cecilia_s59qsf.jpg',
    piName: 'Cecilia Conaco, PhD',
    degree: 'Associate Professor',
    aboutPi: 'Cecilia is interested in the regulatory networks that control gene expression dynamics underlying the ability of many marine organisms to rapidly respond and adapt to their environment. She is also fascinated by neuronal development and early animal evolution. ',
  }];

  miel = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212340/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_8_t8mvx6.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212331/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_5_mas1zv.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212328/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_1_j3fwpb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212395/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_9_o7dfpr.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212388/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_6_r0beuk.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212388/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_10_w99bdb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212386/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_4_1_cw8td4.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212384/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_7_debpvz.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212358/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_3_rtc97i.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212346/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/gallery_2_kydp8z.jpg'},
      
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628212373/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/PI_profile_fvvgrx.jpg',
    piName: 'Marie Antonette Juinio-Meñez, Ph.D.',
    aboutPi: 'Dr. Marie Antonette Juinio-Meñez obtained her Ph.D. in Biological Sciences from the University of Rhode Island, USA. Her research interests include invertebrate biology, larval ecology and recruitment, benthic ecology, and population genetics specifically on the culture and fisheries management of invertebrates, community-based coastal resources management, stock restoration and environmental governance.',
  }];

  mol = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212518/Research/Laboratories/Onda_MOLab/4._Gallery_Deployment_of_the_Niskin_Bottle_Water_Sampler_zd0udm.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212526/Research/Laboratories/Onda_MOLab/4._Gallery_Diatoms_and_dinoflagellate_on_plastic_surface_qxvzkq.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212529/Research/Laboratories/Onda_MOLab/4._Gallery_Red_Algae_Florideophyceae_on_plastics_exposed_in_the_marine_environment_xpqsla.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212530/Research/Laboratories/Onda_MOLab/4._Gallery_Phytoplankton_sample_collection_n07c54.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212530/Research/Laboratories/Onda_MOLab/4._Gallery_Transect_for_Macroplastics_survey_hbheb8.jpg'},
  ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628212520/Research/Laboratories/Onda_MOLab/6._P.I._Profile_Photo_Dr._Deo_Florence_L._Onda_cb6lqz.jpg',
    piName: 'Deo Florence L. Onda, PhD',
    aboutPi: 'Deo is known for being the first Filipino to descend into the Emden Deep in the Philippine Trench. Determined to find sustainable solutions to the climate change issues affecting the world’s oceans through ecology, his work centres on further understanding the diversity, ecology, distribution, and responses of microbial communities to these changing conditions.',
  }];

  algae = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212570/Research/Laboratories/Roleda-Algal-Eco-Lab/Fieldwork_GOPR0125_2_rkod2o.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212565/Research/Laboratories/Roleda-Algal-Eco-Lab/Genebank_IMG_7516_tpywwf.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212573/Research/Laboratories/Roleda-Algal-Eco-Lab/Outdoor_landbased_nursery_GOPR9498_vhtxc8.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212639/Research/Laboratories/Roleda-Algal-Eco-Lab/Spore_cultures_IMG_7204_rqkajn.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212598/Research/Laboratories/Roleda-Algal-Eco-Lab/Spore_cultures_IMG_6358_vkulj4.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212591/Research/Laboratories/Roleda-Algal-Eco-Lab/Spore_cultures_IMG_6459_qmsk85.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212585/Research/Laboratories/Roleda-Algal-Eco-Lab/Seaweeds_in_natural_habitat_RIMG0114_tziwej.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212583/Research/Laboratories/Roleda-Algal-Eco-Lab/Spore_culture_IMG_8969_eus2kr.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212669/Research/Laboratories/Roleda-Algal-Eco-Lab/Outdoor_landbased_nursery_IMG_6190_2_ns2hsk.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212667/Research/Laboratories/Roleda-Algal-Eco-Lab/Outdoor_landbased_nursery_IMG_7991_epfjub.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212651/Research/Laboratories/Roleda-Algal-Eco-Lab/Outdoor_landbased_nursery_IMG_6205_emrejz.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212598/Research/Laboratories/Roleda-Algal-Eco-Lab/Spore_cultures_IMG_7183_lajdgc.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628933146/Research/Laboratories/Roleda-Algal-Eco-Lab/18-Michael_Y_Roleda_copy_qgvjbj.jpg',
    piName: 'Michael Y. Roleda, Dr. rer. nat. ',
    degree: 'Professor IV',
    aboutPi: 'Dr. Michael Y. Roleda obtained his Doctorate degree in Natural Sciences (Biology) in Germany. He is currently the Deputy Director for Facilities and Resources in the institute. His research interests are algal stress physiology, applied phycology, ecophysiology, productivity, marine flora biodiversity, cultivation, photobiology, and photochemistry.',
  }];

  CoRE = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148903/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/7_noae_spvcdj.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148901/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/8_DSC06177_gs7kqs.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148645/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/28_P3180274_hmybjx.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148644/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/32_PLDT_Project_4_Calaguas_Island_Fish_Sanctuary_yuvi2d.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148635/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/25_Spawning_macro_2_erdtby.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148634/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/27_Spawning_collection_1_ryrj7h.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148634/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/31_PLDT_Project_4_San_Antonio_Marine_Sanctuary_Tinambac_CamSur_lxsj8m.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148587/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/19_DSC00866_te9xt8.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148585/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/30_coral_monitoring_rwlw1j.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148568/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/29_Larval_reseeding_pl0i0v.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148549/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/26_A._tenuis_gravid_colony_wcw0ye.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148539/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/24_P7091099_uvvged.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148538/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/16_Giant_Clam_Culture_Training_Workshop_dz9o27.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148531/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/10_Fish_macro_1_spjlyj.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148510/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/17_IMG_0356_ljlrcb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148503/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/23_Mantle_clipping_Camiguin_sx9638.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148496/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/22_T._gigas_gonad_biopsy_m2axfd.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148467/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/21_Giant_clam_monitoring_jfr0b3.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148466/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/14_Fisheries_survey_1_weijfb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148455/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/20_Hatchery_epxdbe.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148450/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/18_NSTW_z3x6gh.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148447/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/15_Survey_action_3_cy2bch.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148440/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/11_P8259590_gskpy1.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148438/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/6_P6210212_qursvg.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148428/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/13_Drupella_yeuysx.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148407/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/12_Drupella2_s3hrs6.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148405/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/1_Reefscape_4_xqvzut.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148390/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/9_Cassis_tqbqaa.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148385/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/4_Coral_zwnzud.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148381/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/5_P2155318_nqfutu.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628148379/Research/Laboratories/Cabaitan_CoRELab/4.%20Gallery%20photos/2_Balingasay_bleaching_survey_2_xie57y.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628148250/Research/Laboratories/Cabaitan_CoRELab/5._P._Cabaitan_ne8g1l.jpg',
    piName: 'Patrick C. Cabaitan, Ph.D.',
    degree: 'Associate Professor',
    aboutPi: 'Dr. Patrick Cabaitan obtained his Doctorate degree in Marine Science at the University of Ryukyus, Okinawa, Japan in 2012 and did his post-doctoral research fellowship at National University of Singapore in 2015. He currently works as an Associate Professor at the Marine Science Institute, University of the Philippines-Diliman. His research interests include reef community and restoration ecology.',
  }];

  OCCO = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151651/Research/Laboratories/David_OCCO/1_Fish-i_imaging_survey_dive_2019_-_1_gdyuvb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151631/Research/Laboratories/David_OCCO/1_Fish-i_imaging_survey_dive_2019_-_2_dau8dr.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151648/Research/Laboratories/David_OCCO/1_Fish-i_imaging_survey_dive_2019_-_4_fabk56.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151635/Research/Laboratories/David_OCCO/1_Fish-i_imaging_survey_dive_2019_-_3_morusp.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151722/Research/Laboratories/David_OCCO/2_Visayan_Sea_Cruise_of_the_HAB_Project_2019_-_1_rxaj01.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151732/Research/Laboratories/David_OCCO/2_Visayan_Sea_Cruise_of_the_HAB_Project_2019_-_2_zh8rf0.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151733/Research/Laboratories/David_OCCO/2_Visayan_Sea_Cruise_of_the_HAB_Project_2019_-_3_wmux0t.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151759/Research/Laboratories/David_OCCO/3_PN_UP-MSI_MSR_Mission_in_Ta%C3%B1on_Strait_2017_-_1_nkrgq0.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151761/Research/Laboratories/David_OCCO/5_Resilience__Survive_and_Thrive___an_educational_tabletop_card_game_yeei6b.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151772/Research/Laboratories/David_OCCO/3_PN_UP-MSI_MSR_Mission_in_Ta%C3%B1on_Strait_2017_-_2_gjbwtb.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151774/Research/Laboratories/David_OCCO/3_PN_UP-MSI_MSR_Mission_in_Ta%C3%B1on_Strait_2017_-_3_sr1jkk.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151779/Research/Laboratories/David_OCCO/4_The_Mobile_Marine_and_Naval_Centrum_MMNC_-_2_g9bbsx.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151800/Research/Laboratories/David_OCCO/4_The_Mobile_Marine_and_Naval_Centrum_MMNC_-_1_dtexz2.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151805/Research/Laboratories/David_OCCO/6_Resilience_Survive_and_Thrive_teaching_demo_wkvcr9.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628151806/Research/Laboratories/David_OCCO/4_The_Mobile_Marine_and_Naval_Centrum_MMNC_-_3_nvoowc.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628151855/Research/Laboratories/David_OCCO/OCCO_Principal_Investigator_scuzg7.jpg',
    piName: 'Laura T. David, Ph.D.',
    aboutPi: 'Dr. David is a Professor and Director of the University of the Philippines Marine Science Institute (UP-MSI). Recognized as one of the country’s pioneers in Ocean Remote Sensing, her research includes using remote sensing and numerical modelling to explore how ocean physics influences the distribution and state of ocean flora and fauna. Her expertise is being tapped regionally to assist in matters related to climate change vulnerability and adaptation. She is currently the Chair of the CHED Technical Committee in Marine Science, a member of the National Panel of Technical Experts of the Climate Change Commission, and a member of the International Scientific Steering Committee of GEO Blue Planet and Future Earth Coasts.',
  }];

  MMEEL = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628152922/Research/Laboratories/Gotanco_MMEEL/4_Gallery%20Photos/IMG_2913_kjhyaq.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628152915/Research/Laboratories/Gotanco_MMEEL/4_Gallery%20Photos/P4290605_fhz4oi.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628152915/Research/Laboratories/Gotanco_MMEEL/4_Gallery%20Photos/DSCN6201_moqkp5.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628152908/Research/Laboratories/Gotanco_MMEEL/4_Gallery%20Photos/P4280128_y699w0.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628152908/Research/Laboratories/Gotanco_MMEEL/4_Gallery%20Photos/P5166368_pcohu9.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628152888/Research/Laboratories/Gotanco_MMEEL/4_Gallery%20Photos/DSCN5499_jz3hst.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628152875/Research/Laboratories/Gotanco_MMEEL/4_Gallery%20Photos/DSC05140_shatx6.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628933009/Research/Laboratories/Gotanco_MMEEL/07-Rachel_June_R_Gotanco_PhD_ickopz.jpg',
    piName: 'Rachel Ravago-Gotanco, Ph.D.',
    aboutPi: 'Dr. Ravago-Gotanco applies her background in molecular biology, biotechnology, and marine science to advance research on ecology and evolution in the oceans. She is particularly interested in exploring the ecological and evolutionary drivers of diversification and divergence in marine populations using genomic data, phylogeographic, population- and seascape-genomics approaches. She is also interested in the application of genomics-enabled tools and technologies to cultured populations of marine organisms, to support improved and sustainable aquaculture.',
  }];

  oasis = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212298/Research/Laboratories/Jaraula_OASIS/Field%20photos/10_wyefn3.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212265/Research/Laboratories/Jaraula_OASIS/Field%20photos/Tubb_cruise_team_with_TMO_photo_used_in_palawan_news_-_photo_credits_to_Belay_giuhmx.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212264/Research/Laboratories/Jaraula_OASIS/Field%20photos/South_atoll_sampling_-_credits_to_Belay_z17kxb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212257/Research/Laboratories/Jaraula_OASIS/Field%20photos/Tubbataha_ranger_station_view_from_MR_Panata_-_credits_to_Belay_sde6r2.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212254/Research/Laboratories/Jaraula_OASIS/Field%20photos/Tubbataha_RNP_-_credits_to_Belay_jfxhg6.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212243/Research/Laboratories/Jaraula_OASIS/Field%20photos/Tubbataha_water_sampling_-_credits_to_Angel_v1q5qr.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212206/Research/Laboratories/Jaraula_OASIS/Field%20photos/JOIDES_trip_2018-_credits_to_Zarina_juc0jd.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212204/Research/Laboratories/Jaraula_OASIS/Field%20photos/South_Atoll_light_house_-_credits_to_Ryoichi_m19rvd.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212173/Research/Laboratories/Jaraula_OASIS/Field%20photos/Puka_beach_Boracay_-_credits_to_Ryoichi_meazgx.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212172/Research/Laboratories/Jaraula_OASIS/Field%20photos/MR_Panata_in_Tubbataha_-_credits_to_Mishel_qhixme.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212170/Research/Laboratories/Jaraula_OASIS/Field%20photos/OSM_2020_2_glwpnw.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212165/Research/Laboratories/Jaraula_OASIS/Field%20photos/Rangers_in_patrol_boat_going_back_to_their_station_-_credits_to_Mishel_tcgutr.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212154/Research/Laboratories/Jaraula_OASIS/Field%20photos/JOIDES_trip_2018_-_credits_to_Zarina_b8wjsu.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212145/Research/Laboratories/Jaraula_OASIS/Field%20photos/OSM_conference_2020_ddj9dx.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212124/Research/Laboratories/Jaraula_OASIS/Field%20photos/Mabini_trip_2018_bln56z.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212116/Research/Laboratories/Jaraula_OASIS/Field%20photos/MSI_Christmas_party_2019_vn6pn4.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212116/Research/Laboratories/Jaraula_OASIS/Field%20photos/OSM_2020_1_ntfavv.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212105/Research/Laboratories/Jaraula_OASIS/Field%20photos/9_ijkalh.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212083/Research/Laboratories/Jaraula_OASIS/Field%20photos/12_h8s4ju.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212083/Research/Laboratories/Jaraula_OASIS/Field%20photos/Bulabog_beach_Boracay_-_credits_to_Mishel_ftfnbd.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212041/Research/Laboratories/Jaraula_OASIS/Field%20photos/Boracay_-_credits_to_Mishel_pcan6u.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212037/Research/Laboratories/Jaraula_OASIS/Field%20photos/ASV_with_PCG_patrol_boat_at_Boracay_-_credits_to_Mishel_rmopwe.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212008/Research/Laboratories/Jaraula_OASIS/Field%20photos/8_bfnke9.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212008/Research/Laboratories/Jaraula_OASIS/Field%20photos/ASV_at_Caticlan_port_-_ctto_cqyj3u.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212006/Research/Laboratories/Jaraula_OASIS/Field%20photos/ASV_retrieval_at_Boracay_-_ctto_cdkyzd.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212005/Research/Laboratories/Jaraula_OASIS/Field%20photos/7_jt0er5.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212002/Research/Laboratories/Jaraula_OASIS/Field%20photos/11_xhekoj.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628211999/Research/Laboratories/Jaraula_OASIS/Field%20photos/3_qjzihq.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628211946/Research/Laboratories/Jaraula_OASIS/Field%20photos/4_rqdn9d.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628211922/Research/Laboratories/Jaraula_OASIS/Field%20photos/5_sh84pv.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628211919/Research/Laboratories/Jaraula_OASIS/Field%20photos/1_hmmgko.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628211905/Research/Laboratories/Jaraula_OASIS/Field%20photos/2_hvrxnv.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628211879/Research/Laboratories/Jaraula_OASIS/Field%20photos/6_twsd5n.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628930054/Research/Laboratories/Jaraula_OASIS/09-Caroline_Marie_B_Jaraula_Ph_gzjdzu.jpg',
    piName: 'Caroline Marie B. Jaraula, Ph.D.',
    degree: 'Assistant Professor',
  }];

  imbbe = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212469/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBIBE_Gallery_photo_8_aqj1tc.bmp'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212462/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBiBE_Gallery_photo_3_lawhh9.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212460/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBiBE_Gallery_photo_1_wyfvyb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212459/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBiBE_Gallery_photo_4_hnqjr8.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212455/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBiBE_Gallery_photo_6_b0ve64.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212440/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBiBE_Gallery_photo_7_cofqzn.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212434/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBiBE_Gallery_photo_5_k9pth9.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212434/Research/Laboratories/MVB%20Rodriguez_IMBiBE/4._IMBiBE_Gallery_photo_2_iggskb.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628930989/Research/Laboratories/MVB%20Rodriguez_IMBiBE/17-Maria_Vanessa_B_Rodriguez_P_koce8s.jpg',
    piName: 'Maria Vanessa B. Rodriguez, Ph.D.',
    aboutPi: 'Dr. Maria Vanessa Rodriguez obtained her Doctoral Degree in Marine and Environmental Science at the University of the Ryukyus in Okinawa, Japan. She currently works as an Assistant Professor at the Marine Science Institute. Her academic and research interests include: coral reef ecology, coral and sponge reproduction, and coral recruitment, physiology, and restoration. ',
  }];

  mbl = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213097/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/SetPic_In_situ_Nutrient_Experiment_SetUp_wegtcj.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213089/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/SetPic_Indoor_OAT_Indoor_pH-temperature_setup__DSC06456_cbdytq.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213086/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/DSC04923_y05e6i.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213071/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/SetPic_Outdoor_Ocean_Acidification_SetUp_IMG_2243_x2xsxa.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213064/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/DSC04929_awnxxo.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213059/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/DSC04936_b6ld1v.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213051/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/SetPic_Nutrient_Experiment_Action_Pic_MG_4724_hfwdex.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213017/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/P3249693_qqibua.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213014/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/Picture2_ystw9j.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213014/Research/Laboratories/San-Diego-McGlone_MBL/4_Gallery%20Photos/Cha_helps_in_preservation_of_sorted_organisms_v0c69e.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628213138/Research/Laboratories/San-Diego-McGlone_MBL/5-6_Primary%20Investigator/Malou_San_Diego-McGlone_a488wz.jpg',
    piName: 'Ma. Lourdes S. McGLone, Ph.D.',
    aboutPi: 'The Marine Biogeochemistry Laboratory is headed by Dr. Maria Lourdes San Diego-McGlone, a Full Professor at the UP Marine Science Institute. She obtained her Ph.D. in Chemical Oceanography at the Old Dominion University in Norfolk, Virginia. The research interest of the lab is to examine environmental stressors and their impact on coastal systems.  Among these stressors are increased nutrients, ocean warming, and low pH.',
  }];

  mpl = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213272/Research/Laboratories/Santianez_MarinePhycoLab/5-gallery-culture_mhnmn9.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213270/Research/Laboratories/Santianez_MarinePhycoLab/2-gallery-Asparagopsis-biology_nq1ysn.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213239/Research/Laboratories/Santianez_MarinePhycoLab/3-gallery-Halimeda-biodiversity_mgidtl.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213239/Research/Laboratories/Santianez_MarinePhycoLab/4-gallery-Halymenia-culture_thro4u.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213239/Research/Laboratories/Santianez_MarinePhycoLab/1-gallery-Sargassum-ecology_now0l1.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628213253/Research/Laboratories/Santianez_MarinePhycoLab/profile-photo-santianez_hu0moh.jpg',
    piName: 'Wilfred John E. Santiañez, Ph.D. ',
    aboutPi: 'Dr. Wilfred John E. Santiañez obtained his Ph.D. in Natural History Sciences (Biodiversity) from Hokkaido University in Sapporo, Japan where he worked on the systematics of the brown algal family Scytosiphonaceae. He is currently the Collections Manager of the Gregorio T. Velasquez Phycological Herbarium (MSI), the largest algal herbarium in the tropical western Pacific. He is interested in various aspects of seaweed research including seaweed diversity, biology, ecology, and cultivation.',
  }];

  biome = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216082/Research/Laboratories/Yniguez_BiOME/2_gallery_Harmful_algal_blooms1_g5ssxl.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628215920/Research/Laboratories/Yniguez_BiOME/3_gallery_Field_sampling_cn7otc.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628215917/Research/Laboratories/Yniguez_BiOME/4_gallery_Plankton_community_experiments_npbnjc.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628215890/Research/Laboratories/Yniguez_BiOME/6_gallery_Impacts_on_fisheries_kawfjk.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628215887/Research/Laboratories/Yniguez_BiOME/5_gallery_Developing_tools_and_models_yh6zbo.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628215883/Research/Laboratories/Yniguez_BiOME/1_gallery_Plankton_ecology_u5ylze.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628215912/Research/Laboratories/Yniguez_BiOME/Yniguez_profile_photo_pniz3k.jpg',
    piName: 'Aletta T. Yñiguez, Ph.D.',
    aboutPi: 'Dr. Aletta Yñiguez is an Associate Professor at the Marine Science Institute, University of the Philippines in Diliman. She obtained her Ph.D. from the Rosenstiel School of Marine and Atmospheric Science (RSMAS), University of Miami in Florida with the support of Fulbright and Maytag scholarships. She is also the Chair of the UP Puerto Galera Biodiversity and Environmental Research and Outreach Center. She is interested in population and ecosystem dynamics, plankton ecology, harmful algal blooms, fisheries, human impacts on marine ecosystems, ecological modelling.',
  }];

  marinePharma = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212780/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/Salvador-Reyes_Extraction_bcfnid.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212776/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/dissecting_snails_nsqmhs.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212773/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/Chem_analysis_bqgzms.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212762/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/Cell_culture_2_h4kji5.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212754/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/shipworm_vavwyb.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212747/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/Salvador-Reyes_Cell_culture_j9xhji.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212740/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/Salvador-Reyes_Chemistry_ewyexp.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212732/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/Microorganisms_x9fpbl.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212722/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/DDHP_group_photo_bb48uh.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212720/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/Chem_analysis2_pmkeec.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212692/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/blue_sponge_mariculture2_ektyd1.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628212723/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/highlight_2-_differentiating_alexandrium_species_copy_uat9rp.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628212693/Research/Laboratories/Salvador-Reyes_Marine%20Pharmaco/2x2-Salvador-Reyes_tysysm.jpg',
    piName: 'Dr. Lilibeth A. Salvador-Reyes',
    aboutPi: 'Dr. Lilibeth Salvador-Reyes is an Associate Professor and UP Scientist I at the Marine Science Institute (UP MSI). She joined the UP MSI in 2013 under the Balik PhD program of the University of the Philippines. She was awarded the Kilmer Prize by the American Society of Pharmacognosy and American Pharmaceutical Association in 2012 and Outstanding Young Scientist by the National Academy of Science and Technology in 2019.',
  }];

  ecoDynamics = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213646/Research/Laboratories/Yap_EDLab/03-gallery-Attachment_2_Yap_HT_A_Labao_wpae2b.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213652/Research/Laboratories/Yap_EDLab/3.7-gallery-G5_Yap_HT_Ecosystem_Dynamics_Discussions_with_local_community_about_need_for_marine_protected_area_goaevi.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213674/Research/Laboratories/Yap_EDLab/3.6-gallery-G4_Yap_HT_Ecosystem_Dynamics_Raymond_Dizon_releasing_green_turtle_hatchlings_vn2jkt.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213675/Research/Laboratories/Yap_EDLab/3.1-gallery-Attachment_3_Yap_HT_EL_Dingkuhn_ghmccv.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213680/Research/Laboratories/Yap_EDLab/3.9-gallery-G7_Yap_HT_Ecosystem_Dynamics_Jonathan_Locqueville_MSc_student_exploring_terrain_kisu2h.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213680/Research/Laboratories/Yap_EDLab/04-gallery-G8_Yap_HT_Ecosystem_Dynamics_Jonathan_Locqueville_MSc_student_learning_from_the_community_nlptvw.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213685/Research/Laboratories/Yap_EDLab/4.1-gallery-G9_Yap_HT_Ecosystem_Dynamics_Elsa_Ligaya_Dingkuhn_demonstrating_principles_of_organic_rice_farming_l6c1zy.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213710/Research/Laboratories/Yap_EDLab/3.4-gallery-G1_Yap_HT_Ecosystem_Dynamics_MSI_team_in_Abra_de_Ilog_gg6g6d.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213710/Research/Laboratories/Yap_EDLab/3.3-gallery-Attachment_5_Yap_HT_His_Excellency_Thierry_Mathou_former_ambassador_of_France_to_the_Philippines_sxrtd6.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213713/Research/Laboratories/Yap_EDLab/3.8-gallery-G6_Yap_HT_Ecosystem_Dynamics_Teaching_school_children_about_waste_management_s6fvdu.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213717/Research/Laboratories/Yap_EDLab/4.2-gallery-G10_Yap_HT_Ecosystem_Dynamics_Students_from_the_University_of_the_Philippines_LB_ayhxok.jpg'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628213724/Research/Laboratories/Yap_EDLab/3.5-gallery-G3_Yap_HT_Ecosystem_Dynamics_Collecting_data_about_fisheries_sfctb5.jpg'},
     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628213720/Research/Laboratories/Yap_EDLab/P.I-profile-photo_gakgng.jpg',
    piName: 'Dr. Helen T. Yap',
    aboutPi: 'Helen T. Yap, Professor of Marine Science, graduated in 1979 from the University of the Philippines - Diliman (BSc Marine Biology, magna cum laude), and obtained her doctorate in 1987 from the Wilhelm-Pieck University in Rostock, the German Democratic Republic.',
  }];

  pbbl = [{
    gallery: [
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216149/Research/Laboratories/Yu_PBBL/Gallery_photo_7_pmc2nt.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216146/Research/Laboratories/Yu_PBBL/Gallery_photo_9_anlfby.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216143/Research/Laboratories/Yu_PBBL/Gallery_photo_6_zw3euf.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216137/Research/Laboratories/Yu_PBBL/Gallery_photo_3_iikwbp.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216137/Research/Laboratories/Yu_PBBL/Gallery_photo_8_zjxud2.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216126/Research/Laboratories/Yu_PBBL/Gallery_photo_2_djnopj.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216121/Research/Laboratories/Yu_PBBL/Gallery_Photo_1_d6e6xh.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216120/Research/Laboratories/Yu_PBBL/Gallery_photo_5_zz5ved.png'},
      {image: 'https://res.cloudinary.com/upmsi/image/upload/v1628216119/Research/Laboratories/Yu_PBBL/Gallery_photo_4_ndwpzs.jpg'},

     ],
    pi: 'https://res.cloudinary.com/upmsi/image/upload/v1628216118/Research/Laboratories/Yu_PBBL/5-PIPhoto_pvm7av.jpg',
    piName: 'Dr. Eizadora Yu',
    aboutPi: 'Eiza is currently a professor at the Marine Science Institute and the Associate Dean for Mentoring, Academic Progress and Advancement at the College of Science in UP Diliman. She acquired her Ph.D. in Biochemistry and Molecular Biology at the University of Maryland, Baltimore County, USA. She also worked as a Postdoctoral Fellow and a Senior Member of the Technical Staff at the Sandia National Laboratories in Livermore, California, USA. She is interested in the use of microbial enzymes and other biomolecules for biotechnology and health applications. She also conducts research on the application of advanced mass spectrometric methods for the proteomic and metabolomic characterization of biomolecules from target microorganisms and for structural studies of RNA, protein-nucleic acid, and protein-protein complexes.',
  }];

  myArr = [];

  cellToShow:number = 3;
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
    }else if(this.router.url === '/Research/laboratories/marine-pharmacognosy-laboratory'){
      this.myArr = this.marinePharma;
    }else if(this.router.url === '/Research/laboratories/ecosystem-dynamics'){
      this.myArr = this.ecoDynamics;
    }else if(this.router.url === '/Research/laboratories/protein-biochemistry-and-biotechnology-laboratory'){
      this.myArr = this.pbbl;
    }

    let x = window.matchMedia("(max-width: 756px)");

    if (x.matches) { // If media query matches
      this.cellToShow = 2;
    }
  }
}
