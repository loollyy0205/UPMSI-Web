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
  readMore:boolean = false;
  photos1 = [{image: '../../../../assets/photos/news1.jpeg'},
  {image: '../../../../assets/photos/news2.jpeg'},
  {image: '../../../../assets/photos/news3.jpeg'},
  {image: '../../../../assets/photos/news1.jpeg'},
  ];

  faciContent = [{title: 'RESEARCH FACILITIES', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum ex non perferendis, necessitatibus quae, corporis ab dicta sint provident nihil. Qui necessitatibus, repudiandae molestiae similique itaque, pariatur dolore repellat dolorem, tenetur natus quas eveniet earum incidunt ratione adipisci voluptates excepturi vel accusamus modi sit hic in dignissimos fugiat? Facilis?'},
    {title: 'FIELD BASED FACILITIES', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda laudantium magni doloribus ad sequi voluptates harum fugiat illo quia, voluptatem, dolores distinctio perspiciatis aliquam! Voluptatem alias debitis pariatur natus obcaecati minima dolore.'},
    {title: 'OTHER CAMPUS FACILITIES', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius modi earum a totam expedita nihil magni commodi aliquam, illo laboriosam ad quam harum iure repudiandae?'}
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
