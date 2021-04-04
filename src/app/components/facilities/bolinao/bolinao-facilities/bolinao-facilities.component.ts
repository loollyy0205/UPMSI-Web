import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bolinao-facilities',
  templateUrl: './bolinao-facilities.component.html',
  styleUrls: ['./bolinao-facilities.component.css']
})
export class BolinaoFacilitiesComponent implements OnInit {
  faciContent = [{title: 'RESEARCH FACILITIES', image: '../../../../assets/photos/BML-photos/3-facilities-1.jpg' ,content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet laborum ex non perferendis, necessitatibus quae, corporis ab dicta sint provident nihil. Qui necessitatibus, repudiandae molestiae similique itaque, pariatur dolore repellat dolorem, tenetur natus quas eveniet earum incidunt ratione adipisci voluptates excepturi vel accusamus modi sit hic in dignissimos fugiat? Facilis?'},
  {title: 'FIELD BASED FACILITIES', image: '../../../../assets/photos/BML-photos/4-facilities-2.jpg', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda laudantium magni doloribus ad sequi voluptates harum fugiat illo quia, voluptatem, dolores distinctio perspiciatis aliquam! Voluptatem alias debitis pariatur natus obcaecati minima dolore.'},
  {title: 'OTHER CAMPUS FACILITIES', image: '../../../../assets/photos/BML-photos/5-facilities-3.jpg', content: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius modi earum a totam expedita nihil magni commodi aliquam, illo laboriosam ad quam harum iure repudiandae?'}
];
  constructor() { }

  ngOnInit(): void {
  }

}
