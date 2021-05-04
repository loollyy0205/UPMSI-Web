import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-institute-focus',
  templateUrl: './institute-focus.component.html',
  styleUrls: ['./institute-focus.component.css']
})
export class InstituteFocusComponent implements OnInit {
  instituteCont = [
    {img: '../../../../../assets/photos/about/about-msi/04-research-icon.jpg', title: 'RESEARCH', content: 'MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.'},
    {img: '../../../../../assets/photos/about/about-msi/05-teaching-icon.jpg', title: 'TEACHING', content: 'MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.'},
    {img: '../../../../../assets/photos/about/about-msi/06-marine-bio-icon.jpg', title: 'MARINE BIOLOGY', content: 'MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.'},
    {img: '../../../../../assets/photos/about/about-msi/07-marine-chem-icon.JPG', title: 'MARINE CHEMISTRY', content: 'MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.'},
    {img: '../../../../../assets/photos/about/about-msi/08-physical-oceanography-icon.jpg', title: 'PHYSICAL OCEANOGRAPHY', content: 'MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.'},
    {img: '../../../../../assets/photos/about/about-msi/09-marine-geology-icon.jpg', title: 'MARINE GEOLOGY', content: 'MSC served as the University’s coordinating base for marine research. In June of the same year, the first Advisory Executive Council of the Center was formed with the appointment of Dr. Edgardo D. Gomez as acting Director.'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
