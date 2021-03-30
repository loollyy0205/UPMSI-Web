import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-labpage',
  templateUrl: './labpage.component.html',
  styleUrls: ['./labpage.component.css']
})
export class LabpageComponent implements OnInit {
  gallery = [
    {image: '../../../../assets/photos/biological-lab/1_gallery_Plankton ecology.jpg'},
    {image: '../../../../assets/photos/biological-lab/3_gallery_Field sampling.JPG'},
    {image: '../../../../assets/photos/biological-lab/4_gallery_Plankton community experiments.png'},
    {image: '../../../../assets/photos/biological-lab/5_gallery_Developing tools and models.jpg'},
    {image: '../../../../assets/photos/biological-lab/6_gallery_Impacts on fisheries.jpg'},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoResearch(){
    this.router.navigate(['/Research/laboratories']);
  }

}
