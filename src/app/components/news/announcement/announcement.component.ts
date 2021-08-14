import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  researchOpp=[
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147111/News/Announcements%20Icons/anc1_supmp6.png", title: "A letter for Dr. Ed Gomez on his first death anniversary", content: 'Today, we pause from our seemingly harried life because of the COVID-19 pandemic and remember you with much gratitude for your extraordinary contributions and the rich legacy you leave us behind.'},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147108/News/Announcements%20Icons/anc2_okxsof.png", title: "UPMSI Official Statement on DENR Claims", content: 'This is to clarify the statement made by Department of Environment and Natural Resources (DENR) Undersecretary Benny Antiporda accusing the University of the Philippines Marine Science Institute (UPMSI)...'},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147108/News/Announcements%20Icons/anc3_uxb1qu.png", title: "UPMSI Official Statement on the Addition of Dolomite Sand to Manila Bay", content: 'The UPMSI believes that the use of crushed dolomite sand will not help solve the environmental problems in Manila Bay. Read more about the implications of transferring...'},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1628147109/News/Announcements%20Icons/anc4_m1m6ni.png", title: "The UPMSI is home to two new Professors Emeriti", content: 'The UPMSI congratulates Dr. Maria Lourdes San Diego-McGlone, a pioneering chemical oceanographer, and Dr. Gisela P. Concepcion, a leading figure in natural products chemistry, for being conferred as Professors...'},
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  announcementContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/Announcement', 'a-letter-for-Dr.-Ed-Gomez-on-his-first-death-anniversary']);
        break;
      case 1:
        this.router.navigate(['/News/Announcement', 'UPMSI-official-statement-on-DENR-claims']);
        break;
      case 2:
        this.router.navigate(['/News/Announcement', 'UPMSI-official-statement-on-the-addition-of-Dolomite-Sand-to-Manila-Bay']);
        break;
      case 3:
        this.router.navigate(['/News/Announcement', 'the-UPMSI-is-home-to-two-new-professors-emeriti']);
        break;
    }
  }
}
