import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  researchOpp=[
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1647946483/News/Announcements%20Icons/f2f-thumbnail-modified_pigs31.png", title: "GPS para sa F2F", content: 'Gabay sa pag-aalaga sa sarili sa face-to-face class activities.'},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1647509486/News/Announcements%20Icons/thumbnail-modified_bz3mwl.png", title: "The Call for Abstract Submissions for the 3rd Graduate Student Research Conference", content: 'The Call for Abstract Submissions for the 3rd Graduate Student Research Conference is now open.'},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1638436114/News/Announcements%20Icons/EDG_Icon_zo9iey.png", title: "A tribute to EDG", content: 'On his second death anniversary, we honor the man behind the UP Marine Science Institute (UP MSI) by remembering ome of his notable contributions...'},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1636436433/News/Announcements%20Icons/Icon_tohvww.png", title: "Statement of the University of the Philippines-Marine Science Institute (UPMSI) on Lingayen Gulf Offshore Mining", content: 'Seabed magnetite mining threatens Lingayen Gulf. The proposed mining project plans to start in the second half of 2022...'},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1632464161/News/Announcements%20Icons/Announcements_Icon_1_zvfgi3.png", title: "Statement of the University of the Philippines-Marine Science Institute (UPMSI) on coral restoration technologies", content: 'Coral restoration is the process of assisting the recovery of a portion of a reef ecosystem that has been degraded...'},
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
        this.router.navigate(['/News/Announcement', 'ftf']);
        break;
      case 1:
        this.router.navigate(['/News/Announcement', 'Call-for-Abstract-Submissions']);
        break;
      case 2:
        this.router.navigate(['/News/Announcement', 'A-tribute-to-EDG']);
        break;
      case 3:
        this.router.navigate(['/News/Announcement', 'Statement-of-the-UPMSI-on-Lingayen-Gulf-Offshore-Mining']);
        break;
      case 4:
        this.router.navigate(['/News/Announcement', 'Statement-of-the-UPMSI-on-coral-restoration-technologies']);
        break;
      case 5:
        this.router.navigate(['/News/Announcement', 'a-letter-for-Dr.-Ed-Gomez-on-his-first-death-anniversary']);
        break;
      case 6:
        this.router.navigate(['/News/Announcement', 'UPMSI-official-statement-on-DENR-claims']);
        break;
      case 7:
        this.router.navigate(['/News/Announcement', 'UPMSI-official-statement-on-the-addition-of-Dolomite-Sand-to-Manila-Bay']);
        break;
      case 8:
        this.router.navigate(['/News/Announcement', 'the-UPMSI-is-home-to-two-new-professors-emeriti']);
        break;
    }
  }
}
 