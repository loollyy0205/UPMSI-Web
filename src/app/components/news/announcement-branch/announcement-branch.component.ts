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
    this.router.navigate(['/News/Announcement', 'Marine-Scientific-Research']);
  }

  gotoAnnouncement1(){
    this.router.navigate(['/News/Announcement', 'tft']);
  }

  gotoAnnouncement2(){
    this.router.navigate(['/News/Announcement', 'Call-for-Abstract-Submissions']);
  }
  gotoAnnouncement3(){
    this.router.navigate(['/News/Announcement', 'A-tribute-to-EDG']);
  }
}
