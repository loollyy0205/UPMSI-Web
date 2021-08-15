import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-outreach',
  templateUrl: './community-outreach.component.html',
  styleUrls: ['./community-outreach.component.css']
})
export class CommunityOutreachComponent implements OnInit {

  news=[
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981849/Extension/01%20-%20Community%20Outreach/01-seminars_lamagv.png", title: `Seminars`, content: `Scientists and members of the academe from around the world are invited regularly as keynote speakers to discuss a range of marine science topics and issues.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981852/Extension/01%20-%20Community%20Outreach/02-workshops_zuhhv1.png", title: `Workshops`, content: `With members of the community and local governments as participants, workshops are conducted to disseminate information and educate the public on science-based practices.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981853/Extension/01%20-%20Community%20Outreach/03-media-appearance_wx6rtx.png", title: `Media Appearance`, content: `Various prominent members of MSI have guested in news segments and have been featured in articles as resource persons. This is beneficial for projects they head, especially in raising awareness and public support.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981853/Extension/01%20-%20Community%20Outreach/04-technical-advice_v2svqv.png", title: `Technical Advice`, content: `The institute provides consultancy services to various schools, organizations, and agencies that seek the expertise of its members.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981852/Extension/01%20-%20Community%20Outreach/05-campus-tours_gnznj6.png", title: `Campus Tours`, content: `High school students from both private and public schools are given a tour around MSI campus so they can learn more about its culture, student life, facilities, programs, and courses offered by the institution.`},
    {image: "https://res.cloudinary.com/upmsi/image/upload/v1627981852/Extension/01%20-%20Community%20Outreach/06-internships_wn5mnv.png", title: `Internships`, content: `Students that are interested in marine science are taken in as interns ​by the institution. They participate in educational activities, exposure trips, and lectures.`},

  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
}
