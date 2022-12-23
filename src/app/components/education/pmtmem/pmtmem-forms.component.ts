import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pmtmem-forms',
  templateUrl: './pmtmem-forms.component.html',
  styleUrls: ['./pmtmem-forms.component.css']
})
export class PmtmemFormsComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;

   acadCont = [
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650510301/Academics/pm-tmem/1_2_nalr4z.jpg', title: 'UP Diliman', content: 'Marine Science Institute, College of Science'},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650510297/Academics/pm-tmem/2_iuhj1j.jpg', title: 'UP Los Baños', content: `Graduate School, College of Forestry and Natural Resources, and School of Environmental Science and Management`},
    {img: 'https://res.cloudinary.com/upmsi/image/upload/v1650510298/Academics/pm-tmem/3_2_wxgo8g.jpg', title: 'UP Visayas', content: `Institute of Fisheries Policy and Development Studies, College of Fisheries and Ocean Sciences`},
    ]

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
