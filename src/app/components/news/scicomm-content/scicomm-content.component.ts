import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scicomm-content',
  templateUrl: './scicomm-content.component.html',
  styleUrls: ['./scicomm-content.component.css']
})
export class ScicommContentComponent implements OnInit {
  giantclam = [{
    title: 'Against the Current: How the giant clams of the Philippines escaped extinction with the help of science and the community',
    author: 'By. Mia N. Judicpa & Gabrielle A. Abrahan, MSI Contributors',
    thumbnail: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1628163389/News/scicomm/01-final-header_fiyzt5.png',
    thumbnail1: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1628163390/News/scicomm/20160101-GOPR1311_mxqr5i.jpg',
    thumbnail2: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1628163388/News/scicomm/20130222-assembly_with_the_Members_nul9tf.jpg',
    thumbnail3: 'https://res.cloudinary.com/dqs7gg03v/image/upload/v1628163387/News/scicomm/20210802-coral_planting_b8vaui.jpg',
    photoContent: 'The boundaries of science, including the limits of who can participate in it, are being pushed every day. In many types of research, citizen scientists play a key role in the data gathering process and are thus deserving of as much recognition as professional scientists garner. But who exactly are citizen scientists, and can you be one of them?',
    courtesy: 'PHOTO COURTESY OF Cantaan Centennial Multi-purpose Cooperative (CCMPC)',

    locationContent: '',
    paragraph1: '',
    paragraph2: ``,
    paragraph3: ``,
    paragraph4: '',
  }];


  myArr = [];
  giantclamBool:boolean = false;


  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/News/scicomm/against-the-current-how-the-giant-clams-of-the-Philippines-escaped-extinction-with-the-help-of-science-and-the-community':
        this.myArr = this.giantclam;
        this.giantclamBool = true;
        break;
    }
  }

  moreScicomm(){
    this.router.navigate(['/News/scicomm-headlines']);
  }

  nextNews(url:string){
    this.router.navigate(['/News/scicomm/', url]).then(() => {
      window.location.reload();
    });;
  }
}
