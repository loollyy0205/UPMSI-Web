import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labpage-contact',
  templateUrl: './labpage-contact.component.html',
  styleUrls: ['./labpage-contact.component.css']
})
export class LabpageContactComponent implements OnInit {
  mmlb = [{
    logo: 'https://dc592.4shared.com/img/W3MJJDETea/s24/179ac81d748/MMBL_logo?async&rand=0.33033745831565375',
    email: 'Email: cconaco@msi.upd.edu.ph',
  }];

  miel = [{
    logo: 'https://dc592.4shared.com/img/UXVa4VLsea/s24/179ac808f28/MIEL_Logo?async&rand=0.7027315813783175',
    room: 'Room 235',
    tel: 'Tel. no.: (632) 981-8500 local 2908',
    email: 'Email: ajmenez@msi.upd.edu.ph / majm.lab@gmail.com '
  }];

  mol = [{
    logo: 'https://dc592.4shared.com/img/oqoaYNfriq/s24/179ac7dd3f0/2_Logo?async&rand=0.9916611130663846',
    tel: 'Phone: +63 2 8 981 8500 local 2916',
    email: 'Email: microocelab@msi.upd.edu.ph'
  }];

  algae = [{
    logo2: 'https://dc592.4shared.com/img/49qxAylBea/s24/179ac7e7fd0/0_AlgaE_lab_logo_hi-res?async&rand=0.23334327280584444',
    tel: 'Tel. no.: (63 02) 8991 8500',
    email: 'Email: algalecolab@msi.upd.edu.ph'
  }];

  CoRE = [{
    logo2: 'https://dc570.4shared.com/img/6yOkqphiea/s24/179e56c0038/CoRE_Lab_logo_version_7__?async&rand=0.5529220824293584',
    room: 'Coral Reef Ecology Laboratory',
    email: 'Email: pcabaitan@msi.upd.edu.ph'
  }];

  OCCO = [{
    logo: 'https://dc570.4shared.com/img/z4JW2PGXea/s24/179e59e85d0/OCCO_Lab_logo_-_colored?async&rand=0.9107429452790894',
    room: 'Rm 344,',
    tel: 'Tel. no.: +6327 219-1118 / +639178370182',
    email: 'Email: ltdavid@msi.upd.edu.ph'
  }];

  MMEEL = [{
    logo: 'https://dc570.4shared.com/img/7mvu_c5dea/s24/179e6c064d8/2_official_mmeel_logo?async&rand=0.035765982982655764',
    room: 'Rm 108,',
    tel: '+63 2 8981 8500 ext 2912',
    email: 'Email: mmeel@msi.upd.edu.ph'
  }];

  oasis = [{
    logo: 'https://dc570.4shared.com/img/vykwcEP0iq/s24/179e6ce4788/OASIS_Logo_Colored?async&rand=0.3396722751313206',
    tel: 'Tel. no.: (02) 8981-8500 loc 2907',
    email: 'Email: oasisgeochemistrylab@gmail.com'
  }];

  imbbe = [{
    logo: 'https://dc570.4shared.com/img/-wl26qHIiq/s24/179e7093960/2_IMBiBE_logo?async&rand=0.11372596475990937',
    room: 'Rm. 270, 268 and 117,',
    email: 'Email: imbibelab@msi.upd.edu.ph'
  }];

  mbl = [{
    logo: 'https://dc570.4shared.com/img/WehzBd6kea/s24/179e70c65e0/MBLlogo_F?async&rand=0.7480877507135706',
    tel: 'Tel. No: +632 922 3944',
    email: 'Email: mlmcglone@msi.upd.edu.ph'
  }];

  mpl = [{
    logo: 'https://dc570.4shared.com/img/nne_EGJBiq/s24/179e71b2f08/logo-marine-phycology-lab?async&rand=0.44681208196961486',
    tel: 'Tel. no.: (63 02) 8922 3958',
    email: 'Email: marinephycolab@msi.upd.edu.ph'
  }];

  biome = [{
    logo2: 'https://dc570.4shared.com/img/-FZ7AQI6iq/s24/179e7280fe8/BiOME_logo_official?async&rand=0.5985281752795979',
    tel: 'Tel. no.: +63 2 922-3962',
    email: 'Email: atyniguez@msi.upd.edu.ph'
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
