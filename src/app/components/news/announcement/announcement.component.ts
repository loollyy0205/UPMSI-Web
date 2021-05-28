import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement',
  templateUrl: './announcement.component.html',
  styleUrls: ['./announcement.component.css']
})
export class AnnouncementComponent implements OnInit {
  researchOpp=[
    {image: "https://dc585.4shared.com/img/gYUzBezBea/s24/179b1fadf58/anc1?async&rand=0.8363466008569422", title: "A letter for Dr. Ed Gomez on his first death anniversary", content: 'Today, we pause from our seemingly harried life because of the COVID-19 pandemic and remember you with much gratitude for your extraordinary contributions and the rich legacy you leave us behind.'},
    {image: "https://dc585.4shared.com/img/TQpzO8OEea/s24/179b1fae728/anc2?async&rand=0.773104232009417", title: "UPMSI Official Statement on DENR Claims", content: 'This is to clarify the statement made by Department of Environment and Natural Resources (DENR) Undersecretary Benny Antiporda accusing the University of the Philippines Marine Science Institute (UPMSI)...'},
    {image: "https://dc585.4shared.com/img/SHFeMWdEea/s24/179b1fae728/anc3?async&rand=0.5770432354365049", title: "UPMSI Official Statement on the Addition of Dolomite Sand to Manila Bay", content: 'The UPMSI believes that the use of crushed dolomite sand will not help solve the environmental problems in Manila Bay. Read more about the implications of transferring...'},
    {image: "https://dc585.4shared.com/img/r_dyTT4Viq/s24/179b1faeb10/anc4?async&rand=0.9966121508966943", title: "The UPMSI is home to two new Professors Emeriti", content: 'The UPMSI congratulates Dr. Maria Lourdes San Diego-McGlone, a pioneering chemical oceanographer, and Dr. Gisela P. Concepcion, a leading figure in natural products chemistry, for being conferred as Professors...'},
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
