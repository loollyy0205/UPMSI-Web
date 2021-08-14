import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labpage-contact',
  templateUrl: './labpage-contact.component.html',
  styleUrls: ['./labpage-contact.component.css']
})
export class LabpageContactComponent implements OnInit {
  mmlb = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628151417/Research/Laboratories/Conaco_MMBL/MMBL_logo_j1fzkk.png',
    email: 'Email: cconaco@msi.upd.edu.ph',
  }];

  miel = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212365/Research/Laboratories/Juinio-Me%C3%B1ez_MIEL/MIEL_Logo_nqwuxk.png',
    room: 'Room 235',
    tel: 'Contact no.: (632) 981-8500 local 2908',
    email: 'Email: ajmenez@msi.upd.edu.ph / majm.lab@gmail.com '
  }];

  mol = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212508/Research/Laboratories/Onda_MOLab/2._Logo_ueteea.png',
    tel: 'Phone: +63 2 8 981 8500 local 2916',
    email: 'Email: microocelab@msi.upd.edu.ph'
  }];

  algae = [{
    logo2: 'https://res.cloudinary.com/upmsi/image/upload/v1628212560/Research/Laboratories/Roleda-Algal-Eco-Lab/0_AlgaE_lab_logo_hi-res_dbunqu.png',
    tel: 'Contact no.: (63 02) 8991 8500',
    email: 'Email: algalecolab@msi.upd.edu.ph'
  }];

  CoRE = [{
    logo2: 'https://res.cloudinary.com/upmsi/image/upload/v1628148249/Research/Laboratories/Cabaitan_CoRELab/CoRE_Lab_logo_version_7___lzgxpt.png',
    room: 'Coral Reef Ecology Laboratory',
    email: 'Email: pcabaitan@msi.upd.edu.ph'
  }];

  OCCO = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628151851/Research/Laboratories/David_OCCO/OCCO_Lab_logo_-_colored_vkp6ut.png',
    room: 'Rm 344,',
    tel: 'Contact no.: +6327 219-1118 / +639178370182',
    email: 'Email: ltdavid@msi.upd.edu.ph'
  }];

  MMEEL = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628152837/Research/Laboratories/Gotanco_MMEEL/2_official_mmeel_logo_tqrlbh.png',
    room: 'Rm 108,',
    tel: '+63 2 8981 8500 ext 2912',
    email: 'Email: mmeel@msi.upd.edu.ph'
  }];

  oasis = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628211774/Research/Laboratories/Jaraula_OASIS/OASIS_Logo_Colored_xab7os.png',
    tel: 'Contact no.: (02) 8981-8500 loc 2907',
    email: 'Email: oasisgeochemistrylab@gmail.com'
  }];

  imbbe = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212431/Research/Laboratories/MVB%20Rodriguez_IMBiBE/2._IMBiBE_logo_hyjcti.png',
    room: 'Rm. 270, 268 and 117,',
    email: 'Email: imbibelab@msi.upd.edu.ph'
  }];

  mbl = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628212996/Research/Laboratories/San-Diego-McGlone_MBL/2_Logo/MBLlogo_F_jicjrf.png',
    tel: 'Contact No: +632 922 3944',
    email: 'Email: mlmcglone@msi.upd.edu.ph'
  }];

  mpl = [{
    logo: 'https://res.cloudinary.com/upmsi/image/upload/v1628213231/Research/Laboratories/Santianez_MarinePhycoLab/logo-marine-phycology-lab_pmnoyw.png',
    tel: 'Contact no.: (63 02) 8922 3958',
    email: 'Email: marinephycolab@msi.upd.edu.ph'
  }];

  biome = [{
    logo2: 'https://res.cloudinary.com/upmsi/image/upload/v1628215906/Research/Laboratories/Yniguez_BiOME/BiOME_logo_official_a2iipz.jpg',
    tel: 'Contact no.: +63 2 922-3962',
    email: 'Email: atyniguez@msi.upd.edu.ph'
  }];

  marinePharma = [{

    tel: 'Contact no.: +63917-636-3614',
    room: 'Rm 309/365',
    email: 'Email: lsreyes@msi.upd.edu.ph'
  }];

  ecoDynamics = [{
    logo3: 'https://res.cloudinary.com/upmsi/image/upload/v1628927297/Research/Laboratories/Yap_EDLab/0-logo_ypohmh_qtso3w.png',
    email: 'Email: helentyap@yahoo.com',
    tel: 'Contact no.: 02-8922 3959',
  }];

  pbbl = [{
    logo3: 'https://res.cloudinary.com/upmsi/image/upload/v1628216118/Research/Laboratories/Yu_PBBL/01-pbbl-logo-hi-res_hqgjh1.png',
    email: 'Email: pbbl@msi.upd.edu.ph',
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
    }else if(this.router.url === '/Research/laboratories/marine-pharmacognosy-laboratory'){
      this.myArr = this.marinePharma;
    }else if(this.router.url === '/Research/laboratories/ecosystem-dynamics'){
      this.myArr = this.ecoDynamics;
    }else if(this.router.url === '/Research/laboratories/protein-biochemistry-and-biotechnology-laboratory'){
      this.myArr = this.pbbl;
    }
  }

}
