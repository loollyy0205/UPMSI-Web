import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-labpage-contact',
  templateUrl: './labpage-contact.component.html',
  styleUrls: ['./labpage-contact.component.css']
})
export class LabpageContactComponent implements OnInit {
  mmlb = [{
    logo: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2FMMBL_logo_black.png?alt=media&token=3b2396cf-9dfe-488f-ab30-e22cf711bd76',
    email: 'Email: cconaco@msi.upd.edu.ph',
  }];

  miel = [{
    logo: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2FMIEL%20Logo.png?alt=media&token=566f0d1c-14a0-425c-bbfb-1ca23e2f3b25',
    room: 'Room 235',
    tel: 'Tel. no.: (632) 981-8500 local 2908',
    email: 'Email: ajmenez@msi.upd.edu.ph / majm.lab@gmail.com '
  }];

  mol = [{
    logo: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F2.%20Logo.png?alt=media&token=38f49cf0-0b5b-4ab3-a4f2-7ba9da15e3ae',
    tel: 'Phone: +63 2 8 981 8500 local 2916',
    email: 'Email: microocelab@msi.upd.edu.ph'
  }];

  myArr = [];

  mielbool:boolean = true;

  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/marine-molecular-biology-lab'){
      this.myArr = this.mmlb;
    }else if(this.router.url === '/Research/laboratories/marine-invertebrate-ecology-lab'){
      this.myArr = this.miel;
      this.mielbool = false;
    }else if(this.router.url === '/Research/laboratories/microbial-oceanography-lab'){
      this.myArr = this.mol;
    }
  }

}
