import { MuseumDialogComponent } from './museum-dialog/museum-dialog.component';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-museum-exhibits',
  templateUrl: './museum-exhibits.component.html',
  styleUrls: ['./museum-exhibits.component.css']
})
export class MuseumExhibitsComponent implements OnInit {
  photos1 = [
    {image: 'https://dc697.4shared.com/img/oTYxCAE7iq/s24/179c0e17e50/MMNC_1?async&rand=0.6643130394157113'},
    {image: 'https://dc697.4shared.com/img/UsrJcsX0ea/s24/179c0e1d828/MMNC_2?async&rand=0.31679214422403423'},
    {image: 'https://dc697.4shared.com/img/YnTs_enKiq/s24/179c0e1fb50/MMNC_3?async&rand=0.14883576197329718'},
    {image: 'https://dc697.4shared.com/img/8xmnWSBGiq/s24/179c0e20320/MMNC_4?async&rand=0.8450561386251914'},
    {image: 'https://dc697.4shared.com/img/HQ8C0OFHea/s24/179c0e216a8/MMNC_5?async&rand=0.2006305219028548'},
    {image: 'https://dc697.4shared.com/img/nQzEdaaviq/s24/179c0e22648/MMNC_6?async&rand=0.08488666950558388'},
    {image: 'https://dc697.4shared.com/img/3yOGTNGpiq/s24/179c0e23db8/MMNC_7?async&rand=0.8761504621594625'},
    {image: 'https://dc697.4shared.com/img/_624uRwjiq/s24/179c0e25528/MMNC_8?async&rand=0.8973715381182115'},
    {image: 'https://dc697.4shared.com/img/Z0CDYW_Gea/s24/179c0e268b0/MMNC_9?async&rand=0.4674313600859785'},
    {image: 'https://dc697.4shared.com/img/5-uvaZDeea/s24/179c0e18a08/MMNC_10?async&rand=0.7428046670894128'},
    {image: 'https://dc697.4shared.com/img/sXqN8rsZea/s24/179c0e195c0/MMNC_11?async&rand=0.7032778847706613'},
    {image: 'https://dc697.4shared.com/img/ozguwF9jea/s24/179c0e19d90/MMNC_12?async&rand=0.9423118806901869'},
    {image: 'https://dc697.4shared.com/img/f4HDn2V3ea/s24/179c0e1b118/MMNC_13?async&rand=0.33121980074006907'},
    {image: 'https://dc697.4shared.com/img/7Ah8LFNniq/s24/179c0e1b500/MMNC_14?async&rand=0.9101988435487813'},
    {image: 'https://dc697.4shared.com/img/9BX-fkO1ea/s24/179c0e1bcd0/MMNC_15?async&rand=0.7416987419560312'},
    {image: 'https://dc697.4shared.com/img/FKJ7Owx-iq/s24/179c0e1c0b8/MMNC_16?async&rand=0.36059546869890924'},
    {image: 'https://dc697.4shared.com/img/4B5GfOGvea/s24/179c0e1c888/MMNC_17?async&rand=0.8333035953166261'},
    {image: 'https://dc697.4shared.com/img/z2K27ggdea/s24/179c0e1d058/MMNC_18?async&rand=0.5404541507740444'},
    {image: 'https://dc697.4shared.com/img/XRZ8OQx-ea/s24/179c0e1d828/MMNC_19?async&rand=0.9944165505483833'},
    {image: 'https://dc697.4shared.com/img/0WP3ku2wiq/s24/179c0e1dff8/MMNC_20?async&rand=0.3523538331406204'},
    {image: 'https://dc697.4shared.com/img/Z8fHmVqhea/s24/179c0e1e7c8/MMNC_21?async&rand=0.22569449124880503'},
    {image: 'https://dc697.4shared.com/img/oXNrP3Soiq/s24/179c0e1ebb0/MMNC_22?async&rand=0.060370853404537295'},
    {image: 'https://dc697.4shared.com/img/WJGT11JXiq/s24/179c0e1ef98/MMNC_23?async&rand=0.15187550351061385'},
    {image: 'https://dc697.4shared.com/img/Ugfh9oQdea/s24/179c0e1f380/MMNC_24?async&rand=0.06157590743943642'},
    {image: 'https://dc697.4shared.com/img/PCXpdAm1iq/s24/179c0e1f768/MMNC_25?async&rand=0.22705558811469229'},
  ];

  constructor(public dialog: MatDialog, private router:Router) { }

  ngOnInit(): void {
  }

  openDialog(imgSrc, i){
    this.dialog.open(MuseumDialogComponent, {
      height: '65%',
      width: 'auto',
      data: {
        imgSrc: imgSrc, i
      }
    });
  }

  mmnc() {
    this.router.navigate(['/Resources/museum-&-exhibits', 'Mobile-Marine-and-Naval-Centrum'])
  }
}
