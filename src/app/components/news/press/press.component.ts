import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-press',
  templateUrl: './press.component.html',
  styleUrls: ['./press.component.css']
})
export class PressComponent implements OnInit {
  news=[
    {image: "../../../assets/photos/press-coverage/thumbnail-01.jpg", title: "Dr. Deo Florence Onda, unang Pinoy na nakarating sa Emden Deep, na ikatlong... | Saksi", content: 'Few have been brave enough to venture the depths of the oceans. This year, microbial oceanographer Dr. Deo Florence L. Onda made...'},
    {image: "../../../../assets/photos/press-coverage/thumbnail-02.jpg", title: "Test of human limitations: UP scientist poised to be 1st Filipino to reach 3rd deepest spot on Earth", content: 'Four scientists from the UPMSI have been recognized for their work by the National Academy of Science and Technology...'},
    {image: "../../../../assets/photos/press-coverage/thumbnail-03.jpg", title: "Pinoy scientist, gagawa ng kasaysayan sa pagsisid sa '3rd deepest spot' sa mundo | NXT", content: 'In the waters of Silaqui Island in Bolinao, Pangasinan, one could never miss the giant clams. The UPMSI Bolinao Marine Laboratory (BML) currently cultures four...'},
    {image: "../../../../assets/photos/press-coverage/thumbnail-04.jpg", title: "Dr. Deo Florence Onda to make history as 1st Filipino to reach 3rd deepest spot on Earth | 24 Oras", content: 'The National Academic Research Fleet (NARFleet) is set to embark on its first expedition. The program aims...'},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/press-coverage-healines', 'Dr.-Deo-Florence-Onda-unang-pinoy-na-nakarating-sa-emden-deep']);
        break;
      case 1:
        this.router.navigate(['/News/press-coverage-healines', 'test-of-human-limitations-UP-scientist-poised-to-be-1st-filipino-to-reach-3rd-deepest-spot-on-earth']);
        break;
      case 2:
        this.router.navigate(['/News/press-coverage-healines', `pinoy-scientist-gagawa-ng-kasaysayan-sa pagsisid-sa-'3rd deepest spot'-sa-mundo`]);
        break;
      case 3:
        this.router.navigate(['/News/press-coverage-healines', 'Dr.-Deo-Florence-Onda-to-make-history-as-1st-filipino-to-reach-3rd-deepest-spot-on-eart.']);
        break;
    }
  }

}
