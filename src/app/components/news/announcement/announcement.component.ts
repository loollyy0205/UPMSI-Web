import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  researchOpp=[
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/Announcement%2FAnnouncement-01-i.png?alt=media&token=43d69637-84c3-4da6-bfdf-e012b8e8eadb", title: "A letter for Dr. Ed Gomez on his first death anniversary", content: 'Today, we pause from our seemingly harried life because of the COVID-19 pandemic and remember you with much gratitude for your extraordinary contributions and the rich legacy you leave us behind.'},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/Announcement%2FAnnouncement-02-i.png?alt=media&token=46972b9b-4f17-41c6-9e14-a443cfb680e4", title: "UPMSI Official Statement on DENR Claims", content: 'This is to clarify the statement made by Department of Environment and Natural Resources (DENR) Undersecretary Benny Antiporda accusing the University of the Philippines Marine Science Institute (UPMSI)...'},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/Announcement%2FAnnouncement-03-i.png?alt=media&token=ee0064a3-447e-4b48-89c2-086639fa9b34", title: "UPMSI Official Statement on the Addition of Dolomite Sand to Manila Bay", content: 'The UPMSI believes that the use of crushed dolomite sand will not help solve the environmental problems in Manila Bay. Read more about the implications of transferring...'},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/Announcement%2FAnnouncement-04-i.png?alt=media&token=e99f1cbc-6546-4275-88df-2f6847be72c2", title: "The UPMSI is home to two new Professors Emeriti", content: 'The UPMSI congratulates Dr. Maria Lourdes San Diego-McGlone, a pioneering chemical oceanographer, and Dr. Gisela P. Concepcion, a leading figure in natural products chemistry, for being conferred as Professors...'},
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
        this.router.navigate(['/News/Announcement', 'UPMSI-official-statement-on-the-addition-of-dolomite-sand-to-manila-bay']);
        break;
      case 3:
        this.router.navigate(['/News/Announcement', 'the-UPMSI-is-home-to-two-new-professors-emeriti']);
        break;
    }
  }
}
