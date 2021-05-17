import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-complex-subpage',
  templateUrl: './complex-subpage.component.html',
  styleUrls: ['./complex-subpage.component.css']
})
export class ComplexSubpageComponent implements OnInit {

  isReadMore = true
  isReadMore2 = true
  isReadMore3 = true
  isReadMore4 = true
  isReadMore5 = true

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showText() {
    this.isReadMore = !this.isReadMore;
  }

  showText2() {
    this.isReadMore2 = !this.isReadMore2;
  }

  showText3() {
    this.isReadMore3 = !this.isReadMore3;
  }

  showText4() {
    this.isReadMore4 = !this.isReadMore4;
  }

  showText5() {
    this.isReadMore5 = !this.isReadMore5;
  }

 gotoBML(){
  this.router.navigate(['/Facilities/bolinao-marine-lab']);
}

// complex = [
//   {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fbml%2F8-complex-main-lab.jpg?alt=media&token=69c4c8c4-2cca-408b-a5c6-ba23a5023473', title: 'RESEARCH FACILITIES',
//   content: `The project-based and communal labs are located at the main laboratory building. There is an algal culture room used regularly for the culture of micro-algae as food for larvae and juveniles of marine organisms that is being reared in the hatchery. Communal equipment like ovens, freezers, refrigerators, and autoclaves are placed at the Hot and Cold room in the second floor of the building. There are also communal equipment placed in the two Instrument rooms at the first and second floor such as stereo, compound, inverted and epiflourescence microscopes, analytical balances, microtomes, multi-parameters, centrifuges. are located at the Instrument room. Researchers are required to fill out the log books provided, before and after use, aside from the reservation form that they need to accomplish. Audio visual room, seminar room, classrooms and view deck serves as a venue for summer classes, trainings and workshops conducted at BML. A recreational area at the back of the main laboratory building is also used for BML official parties. Beside it is a Wet Lab used as an extension lab for researchers working with water and sediment samples, at the same time a venue for lab aides to work on their DIY setups.`,
//   content2: ` A wet and dry museum on the 3rd floor of the main building houses special collections of giant clams and hard corals collected within the Bolinao-Anda Reef Complex and various sampling sites of MSI researchers around the Philippines. Highlighted in the collections of dry museum are the giant clam shells from Solomon Islands, one of the first broodstocks of the giant clams in Silaki Ocean Nursery; the largest Hippoppus hippopus in the world with shell length of 53.9 cm and the Hippopus hippopous giant clam shell with a pearl from the Silaki Ocean Nursery. The wet museum, established in 2012 with the help of some local interns, consists of pelagic and deep sea fish collections from various sampling sites in the Philippines. The collections are properly stored in ethanol solution. Visitors from different institutions are being toured at the BML museum before the COVID-19 pandemic. Occasionally, some collections are also brought in exhibit areas where BML is requested to present.`},
//   {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fbml%2F8.2-complex-admin-bldg.jpg?alt=media&token=0cf44330-48dd-4115-a601-70cbcc607bbe', title: 'OTHER CAMPUS FACILITIES', content: `The BML campus maintains an on-site library, museums for fish, clam, and coral collections, classrooms, conference facilities, and housing for students and researchers.`},
//   {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fbml%2F8.3-complex-housing-dorm-units.jpg?alt=media&token=b70c932d-a72b-43b2-bdc6-a5b57979a151', title: 'FIELD-BASED FACILITIES', content: `The biodiversity of Bolinao and its surrounding waters makes BML an ideal location for marine science research. Field-based facilities include the giant clam ocean nursery and sea cucumber sea ranch. Continuous monitoring systems record environmental parameters at various sites.`},
//   {img: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/facilities%2Fbml%2F8.4-complex-outdoor-hatchery.JPG?alt=media&token=cffc30ce-ade7-4cef-a3b3-713985622c93', title: 'OTHER CAMPUS FACILITIES', content: `The BML campus maintains an on-site library, museums for fish, clam, and coral collections, classrooms, conference facilities, and housing for students and researchers.`},
// ]
}
