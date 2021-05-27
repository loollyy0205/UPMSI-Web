import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-outreach',
  templateUrl: './community-outreach.component.html',
  styleUrls: ['./community-outreach.component.css']
})
export class CommunityOutreachComponent implements OnInit {

  news=[
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2FCO%2F01-seminars.png?alt=media&token=42736cde-1969-41ce-9eff-a1b996894526", title: `Seminars`, content: `Scientists and members of the academe from around the world are invited regularly as keynote speakers to discuss a range of marine science topics and issues.`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2FCO%2F02-workshops.png?alt=media&token=51b4cbd9-b5e0-4e3f-8f53-282d1916b737", title: `Workshops`, content: `With members of the community and local governments as participants, workshops are conducted to disseminate information and educate the public on science-based practices.`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2FCO%2F03-media-appearance.png?alt=media&token=510333ca-85ca-43f5-883e-3c7857c33dae", title: `Media Appearance`, content: `Various prominent members of MSI have guested in news segments and have been featured in articles as resource persons. This is beneficial for projects they head, especially in raising awareness and public support.`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2FCO%2F04-technical-advice.png?alt=media&token=5c730c56-8d09-4b40-a50f-c7730dbfa4d2", title: `Technical Advice`, content: `The institute provides consultancy services to various schools, organizations, and agencies that seek the expertise of its members.`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2FCO%2F05-campus-tours.png?alt=media&token=266dc78d-0641-4a61-b91c-81566b04d23c", title: `Campus Tours`, content: `High school students from both private and public schools are given a tour around MSI campus so they can learn more about its culture, student life, facilities, programs, and courses offered by the institution.`},
    {image: "https://firebasestorage.googleapis.com/v0/b/upmsi-d03af.appspot.com/o/extension%2FCO%2F06-internships.png?alt=media&token=a6c74227-7d15-4a38-9af4-962760fb3538", title: `Internships`, content: `Students that are interested in marine science are taken in as interns ​by the institution. They participate in educational activities, exposure trips, and lectures.`},

  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  newsContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/News/content', 'filipino-scientist-makes-history-by-reaching-the-3rd-deepest-spot-on-earth']);
        break;
      case 1:
        this.router.navigate(['/News/content', 'UPMSI-scientists-receive-accolades-from-NAST']);
        break;
      case 2:
        this.router.navigate(['/News/content', 'all-about-the-giant-clam']);
        break;
      case 3:
        this.router.navigate(['/News/content', 'NARFleet-is-on-its-way-to-prowl-Philippine-waters']);
        break;
    }

  }
}
