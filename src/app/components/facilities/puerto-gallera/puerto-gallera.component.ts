import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-puerto-gallera',
  templateUrl: './puerto-gallera.component.html',
  styleUrls: ['./puerto-gallera.component.css']
})
export class PuertoGalleraComponent implements OnInit {
  readMore:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoFacilities(){
    this.router.navigate(['/Facilities/pag-asa-marine-station']);
  }
}
