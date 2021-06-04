import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GalleryComponent } from '../../extension/gallery/gallery.component';

@Component({
  selector: 'app-facilities-dialog',
  templateUrl: './facilities-dialog.component.html',
  styleUrls: ['./facilities-dialog.component.css']
})
export class FacilitiesDialogComponent implements OnInit {
  imgSrc:string;
  bmlDialog = [
    {title: 'Firsthand experience with marine animals', content: 'The BML opens some of its areas to educational tours. The tours start with a short introduction to marine ecosystems and their importance. The hatchery follows, where visitors can observe marine animals like giant clams, sea cucumbers, and corals. Finally, in the dry and wet museum, visitors can observe several collections of Philippine marine flora and fauna. This fun learning experience enhances the knowledge of visitors and helps them develop a deeper appreciation of marine resources and  marine science research.'},
    {title: 'Research inside and outside the lab', content: 'The BML hosts locally- and internationally-funded interdisciplinary research in the fields of reproductive biology, ecology, population dynamics, marine microbiology, biotechnology, and marine natural products. These studies give rise to the development of culture techniques, stock enhancement, habitat conservation, and restoration of several marine organisms. The BML has lab- and field-based facilities, making it a strategic site to conduct community-based coastal resource management, harmful algal blooms, influence of coastal and aquaculture activities, and coastal geology and oceanography studies.'},
    {title: 'Webinars in a world changed by a pandemic', content: 'The UPMSI regularly holds seminars with scientists and members of the academe around the world as speakers. Last year, the institute hosted the webinar series, Philippine Seas, with two episodes. Speakers who were members of the MSI faculty discussed various topics from the importance of offshore reefs in Philippine Rise to emerging pollutants that pose threats to Philippine biodiversity.'},
    {title: 'Building strong communities', content: 'The BML organizes activities involving coastal communities and local government units, offering environmental education programs. These engagements are carried out to empower locals through public information seminars and forums. Among the many different topics are fish kills, jellyfish stings, climate change, conservation of marine environment, and sustainable management of resources. '},
  ]

  myArr = [];

  constructor(public dialogRef: MatDialogRef<GalleryComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    this.imgSrc = this.data.imgSrc;
    this.myArr = this.bmlDialog.filter(res => res.title === this.data.title)
  }

}
