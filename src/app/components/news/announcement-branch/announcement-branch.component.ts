import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-branch',
  templateUrl: './announcement-branch.component.html',
  styleUrls: ['./announcement-branch.component.css']
})
export class AnnouncementBranchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoAnnouncement(){
    this.router.navigate(['/News/Announcement', 'a-letter-for-Dr.-Ed-Gomez-on-his-first-death-anniversary']);
  }
  gotoAnnouncement1(){
    this.router.navigate(['/News/Announcement', 'UPMSI-official-statement-on-DENR-claims']);
  }
  gotoAnnouncement2(){
    this.router.navigate(['/News/Announcement', 'UPMSI-official-statement-on-the-addition-of-Dolomite-Sand-to-Manila-Bay']);
  }
  gotoAnnouncement3(){
    this.router.navigate(['/News/Announcement', 'the-UPMSI-is-home-to-two-new-professors-emeriti']);
  }
}
