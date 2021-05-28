import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-community-outreach',
  templateUrl: './community-outreach.component.html',
  styleUrls: ['./community-outreach.component.css']
})
export class CommunityOutreachComponent implements OnInit {

  news=[
    {image: "https://dc729.4shared.com/img/YnD8Acc7iq/s24/179b15ebe98/01-seminars?async&rand=0.44719001370157874", title: `Seminars`, content: `Scientists and members of the academe from around the world are invited regularly as keynote speakers to discuss a range of marine science topics and issues.`},
    {image: "https://dc729.4shared.com/img/UjG0jhWgiq/s24/179b15ec280/02-workshops?async&rand=0.49645296518358095", title: `Workshops`, content: `With members of the community and local governments as participants, workshops are conducted to disseminate information and educate the public on science-based practices.`},
    {image: "https://dc729.4shared.com/img/Xxxo8GMJiq/s24/179b15ec668/03-media-appearance?async&rand=0.167097825401322", title: `Media Appearance`, content: `Various prominent members of MSI have guested in news segments and have been featured in articles as resource persons. This is beneficial for projects they head, especially in raising awareness and public support.`},
    {image: "https://dc729.4shared.com/img/O07seQN1ea/s24/179b15eca50/04-technical-advice?async&rand=0.6804603319104243", title: `Technical Advice`, content: `The institute provides consultancy services to various schools, organizations, and agencies that seek the expertise of its members.`},
    {image: "https://dc729.4shared.com/img/_QqUrJ-iea/s24/179b15ed220/05-campus-tours?async&rand=0.4203553122505084", title: `Campus Tours`, content: `High school students from both private and public schools are given a tour around MSI campus so they can learn more about its culture, student life, facilities, programs, and courses offered by the institution.`},
    {image: "https://dc585.4shared.com/img/dtyFkXkNiq/s24/179b15ed608/06-internships?async&rand=0.7187967885651012", title: `Internships`, content: `Students that are interested in marine science are taken in as interns ​by the institution. They participate in educational activities, exposure trips, and lectures.`},

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
