import { FacilitiesDialogComponent } from './../facilities-dialog/facilities-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-bolinao',
  templateUrl: './bolinao.component.html',
  styleUrls: ['./bolinao.component.css']
})
export class BolinaoComponent implements OnInit {
  margin:number = -370;
  readMore:boolean = false;
  photos1 = [{image: 'https://dc570.4shared.com/img/cgoN9rwZea/s24/179d5fb1300/9-highlight-1?async&rand=0.9399459513050967', lab: 'EDUCATION', title: 'Firsthand experience with marine animals'},
  {image: 'https://dc570.4shared.com/img/oisq_MWdiq/s24/179d5faf3c0/92-hilight-2?async&rand=0.8155523549824943', lab: 'RESEARCH', title: 'Research inside and outside the lab'},
  {image: 'https://dc570.4shared.com/img/gj6p_CWJea/s24/179d5faff78/93-hilight-3?async&rand=0.8276041688905851', lab: 'EXTENSION/OUTREACH', title: 'Webinars in a world changed by a pandemic'},
  {image: 'https://dc570.4shared.com/img/99RUCjiRea/s24/179d5fb0b30/94-highlight-4?async&rand=0.022180321961587257', lab: 'COMMUNITY', title: 'Building strong communities'},
  ];

  faciContent = [{title: 'RESEARCH FACILITIES', image: '../../../../assets/photos/BML-photos/3-facilities-1.jpg' ,content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum ex non perferendis, necessitatibus quae, corporis ab dicta sint provident nihil. Qui necessitatibus, repudiandae molestiae similique itaque, pariatur dolore repellat dolorem, tenetur natus quas eveniet earum incidunt ratione adipisci voluptates excepturi vel accusamus modi sit hic in dignissimos fugiat? Facilis?'},
    {title: 'FIELD BASED FACILITIES', image: '../../../../assets/photos/BML-photos/4-facilities-2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda laudantium magni doloribus ad sequi voluptates harum fugiat illo quia, voluptatem, dolores distinctio perspiciatis aliquam! Voluptatem alias debitis pariatur natus obcaecati minima dolore.'},
    {title: 'OTHER CAMPUS FACILITIES', image: '../../../../assets/photos/BML-photos/5-facilities-3.jpg', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius modi earum a totam expedita nihil magni commodi aliquam, illo laboriosam ad quam harum iure repudiandae?'}
  ];

  cellToShow:number = 3;


  constructor(public dialog: MatDialog, private upl:UploadFetchService, private router:Router) { }

  ngOnInit(): void {
    let x = window.matchMedia("(max-width: 768px)");

    if (x.matches) { // If media query matches
      this.cellToShow = 2;
      // this.height = 'auto';
    }
  }

  openDialog(imgSrc, bmlName){
    this.dialog.open(FacilitiesDialogComponent, {
      width: 'auto',
      height: 'auto',
      data: {
        imgSrc: imgSrc,
        title: bmlName
      }
    });
  }

  allPhotos(title, photos){
    const name = (<HTMLParagraphElement>title.target).innerText;
    // console.log({name, photos})

    this.upl.sendData({name,photos});
    this.router.navigate(['/Extension/gallery/images'])

  }
  gotoFacilities(){
    this.router.navigate(['/Facilities/puerto-galera-station']);
  }
}
