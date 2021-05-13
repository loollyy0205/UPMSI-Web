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
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery01_collection.jpg?alt=media&token=9ef12353-4e9d-4e62-ac66-200e284e7131', title: 'Collection'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery02_lemon%20sponge.jpg?alt=media&token=48834962-34b6-4cc6-ad24-c53fe92697be', title: 'Lemon Sponge'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery03_moon%20sponge.jpg?alt=media&token=dc71120a-b26c-49c8-b875-c85495a16d56', title: 'Moon Sponge'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery04_spicules.jpg?alt=media&token=24307709-e3fe-4d7f-bc9b-9a2934831fde', title: 'Spicules'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery05_sponge%20larvae.jpg?alt=media&token=c2f349c4-4bb2-4536-8a30-9806dbcadc6e', title: 'Sponge Larvae Clam'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery06_spawning.jpg?alt=media&token=fbc2d610-094c-457f-8acd-c2b361798c40', title: 'Spawning'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery07_giant%20clam.jpg?alt=media&token=a542767d-c2f4-4e8a-9d0e-a4d9c25c6232', title: 'Giant Clam'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery08_hatchery.jpg?alt=media&token=c40ab7c8-4e19-4f11-a5db-eb961cf574e9', title: 'Hatchery'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery09_clam%20juvenile.jpg?alt=media&token=ffaabfd2-95a1-4215-87e9-5111710dbe63', title: 'Clam Juvenile'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fgallery10_coral%20juvenile.jpg?alt=media&token=880a3253-d384-4a3f-a857-738da6c20440', title: 'Coral Juvenile'},
    ],
    pi: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MMBL%2Fcecilia.jpg?alt=media&token=fa503f5d-0349-4e82-8aaa-aa7ce11cbc0a',
    piName: 'Marie Antonette Juinio-Meñez, Ph.D.',
    degree: 'Associate Professor',
    aboutPi: 'Cecilia is interested in the regulatory networks that control gene expression dynamics underlying the ability of many marine organisms to rapidly respond and adapt to their environment. She is also fascinated by neuronal development and early animal evolution. ',
  }];

  miel = [{
    gallery: [
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%201.jpg?alt=media&token=1cdadbd1-c0ae-45fc-9b20-1022cb3e830f', title: 'Gallery-01'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%202.jpg?alt=media&token=0d1821de-630d-4222-b844-9ff2387818e9', title: 'Gallery-02'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%203.jpg?alt=media&token=5acd3b0f-f619-463a-93be-62593bc65533', title: 'Gallery-03'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%204%20(1).JPG?alt=media&token=9f1aef8c-c615-4948-a2d5-818d076a927b', title: 'Gallery-04'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%205.jpg?alt=media&token=27e3bd08-9ce8-4a2c-8d90-28d192cea288', title: 'Gallery-05'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%206.jpg?alt=media&token=37461a8a-424b-4a5d-a61c-5eb67429165d', title: 'Gallery-06'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%207.jpg?alt=media&token=3b371245-8ac6-450f-a27e-058340887e8c', title: 'Gallery-07'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%208.jpg?alt=media&token=db416ddc-4874-4fc3-a737-84c6ee2c9cb5', title: 'Gallery-08'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%209.JPG?alt=media&token=568232d7-e380-4e24-bddf-1f431ba5d9f9', title: 'Gallery-09'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2Fgallery%2010.JPG?alt=media&token=4c8b3e37-e029-4eb4-91b0-dabe7b6364af', title: 'Gallery-10'},
    ],
    pi: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MIEL%2FPI%20profile.jpg?alt=media&token=61e69e3d-a38b-4e67-bf23-34f46bb156c4',
    piName: 'Marie Antonette Juinio-Meñez, Ph.D.',
    aboutPi: 'Dr. Marie Antonette Juinio-Meñez obtained her Ph.D. in Biological Sciences from the University of Rhode Island, USA. Her research interests include invertebrate biology, larval ecology and recruitment, benthic ecology, and population genetics specifically on the culture and fisheries management of invertebrates, community-based coastal resources management, stock restoration and environmental governance.',
  }];

  mol = [{
    gallery: [
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F4.%20Gallery%20(Deployment%20of%20the%20Niskin%20Bottle%20Water%20Sampler).jpg?alt=media&token=d2c5d11d-0948-47af-88f7-bb1e62b3c7ef', title: 'Deployment of the Niskin Bottle Water Sampler'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F4.%20Gallery%20(Diatoms%20and%20dinoflagellate%20on%20plastic%20surface).png?alt=media&token=b24358f1-050d-44c2-953e-7804973220e4', title: 'Diatoms and dinoflagellate on plastic surface'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F4.%20Gallery%20(Phytoplankton%20sample%20collection).jpg?alt=media&token=27cdf752-0639-429f-9e3b-e670f255be5f', title: 'Phytoplankton sample collection'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F4.%20Gallery%20(Red%20Algae%20(Florideophyceae)%20on%20plastics%20exposed%20in%20the%20marine%20environment).png?alt=media&token=3fac8586-e3b7-4a22-94dd-fdd6dfabb51d', title: 'Red Algae (Florideophyceae) on plastics exposed in the marine environment'},
      {image: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F4.%20Gallery%20(Transect%20for%20Macroplastics%20survey).jpg?alt=media&token=ef323458-4ec8-4296-a15e-382e3014cf2a', title: 'Transect for Macroplastics survey'},
  ],
    pi: 'https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/MOL%2F6.%20P.I.%20Profile%20Photo%20(Dr.%20Deo%20Florence%20L.%20Onda).jpg?alt=media&token=4ebb344f-fe8f-4e24-b7ae-bda604fbc25e',
    piName: 'Deo Florence L. Onda, PhD',
    aboutPi: 'Deo is known for being the first Filipino to descend into the Emden Deep in the Philippine Trench. Determined to find sustainable solutions to the climate change issues affecting the world’s oceans through ecology, his work centres on further understanding the diversity, ecology, distribution, and responses of microbial communities to these changing conditions.',
  }];

  mielbool: boolean = true;
  mmblbool: boolean = true;



  myArr = [];


  constructor(private router:Router) { }

  ngOnInit(): void {
    if(this.router.url === '/Research/laboratories/marine-molecular-biology-lab'){
      this.myArr = this.mmlb;
      this.mielbool = false;
    }else if(this.router.url === '/Research/laboratories/marine-invertebrate-ecology-lab'){
      this.myArr = this.miel;
    }else if(this.router.url === '/Research/laboratories/microbial-oceanography-lab'){
      this.myArr = this.mol;
    }

  }
}
