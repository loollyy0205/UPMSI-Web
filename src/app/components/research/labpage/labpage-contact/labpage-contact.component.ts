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

  myArr = [];

  mielbool:boolean = true;
  algaeBool:boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/marine-molecular-biology-lab'){
      this.myArr = this.mmlb;
    }else if(this.router.url === '/Research/laboratories/marine-invertebrate-ecology-lab'){
      this.myArr = this.miel;
      this.mielbool = false;
    }else if(this.router.url === '/Research/laboratories/microbial-oceanography-lab'){
      this.myArr = this.mol;
    }else if(this.router.url === '/Research/laboratories/algal-eco-physiology-lab'){
      this.myArr = this.algae;
      this.algaeBool = false;
    }
  }

}
