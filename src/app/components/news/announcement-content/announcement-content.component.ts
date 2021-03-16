import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-announcement-content',
  templateUrl: './announcement-content.component.html',
  styleUrls: ['./announcement-content.component.css']
})
export class AnnouncementContentComponent implements OnInit {
  readMore:boolean = false;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoAnnouncement(){
    this.router.navigate(['News/Announcement']);
  }

}
