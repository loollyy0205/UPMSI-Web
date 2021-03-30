import { FacilitiesDialogComponent } from './../facilities-dialog/facilities-dialog.component';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadFetchService } from 'src/app/shared/upload-fetch.service';

@Component({
  selector: 'app-bolinao',
  templateUrl: './bolinao.component.html',
  styleUrls: ['./bolinao.component.css']
})
export class BolinaoComponent implements OnInit {
  margin:number = -370;
  readMore:boolean = false;
  photos1 = [{image: '../../../../assets/photos/BML-photos/8-hlights-1.jpg', lab: 'ENVIRONMENT', title: 'Bolinao, sanctuary for raising the giant clams'},
  {image: '../../../../assets/photos/BML-photos/1-banner-photo-highlights-2.jpg', lab: 'FACILITIES', title: 'The 5-hectare Bolinao Marine Lab Complex'},
  {image: '../../../../assets/photos/BML-photos/9-hlights-3.JPG', lab: 'COMMUNITY', title: 'BML honors its building staff'},
  {image: '../../../../assets/photos/BML-photos/9-hlights-4.jpg', lab: 'RESEARCH', title: 'Three boats launched for the MSI fieldwork to take place BML'},
  ];

  faciContent = [{title: 'RESEARCH FACILITIES', image: '../../../../assets/photos/BML-photos/3-facilities-1.jpg' ,content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum ex non perferendis, necessitatibus quae, corporis ab dicta sint provident nihil. Qui necessitatibus, repudiandae molestiae similique itaque, pariatur dolore repellat dolorem, tenetur natus quas eveniet earum incidunt ratione adipisci voluptates excepturi vel accusamus modi sit hic in dignissimos fugiat? Facilis?'},
    {title: 'FIELD BASED FACILITIES', image: '../../../../assets/photos/BML-photos/4-facilities-2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda laudantium magni doloribus ad sequi voluptates harum fugiat illo quia, voluptatem, dolores distinctio perspiciatis aliquam! Voluptatem alias debitis pariatur natus obcaecati minima dolore.'},
    {title: 'OTHER CAMPUS FACILITIES', image: '../../../../assets/photos/BML-photos/5-facilities-3.jpg', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius modi earum a totam expedita nihil magni commodi aliquam, illo laboriosam ad quam harum iure repudiandae?'}
  ];


  constructor(public dialog: MatDialog, private upl:UploadFetchService, private router:Router) { }

  ngOnInit(): void {
  }

  openDialog(imgSrc){
    this.dialog.open(FacilitiesDialogComponent, {
      width: '550px',
      height: '610px',
      data: {
        imgSrc: imgSrc
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
    this.router.navigate(['/Facilities']);
  }
}
