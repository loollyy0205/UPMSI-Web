import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studnook',
  templateUrl: './studnook.component.html',
  styleUrls: ['./studnook.component.css']
})
export class StudNookComponent implements OnInit {
  geminne = [
    {thumbnail: '../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0611_ManzanoG.jpg'}
  ]
  cassanova = [
    {thumbnail: '../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0615_CasanovaJ.jpg'}
  ]
  isah = [
    {thumbnail: '../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0616_IsahR.jpg'}
  ]
  flores = [
    {thumbnail: '../../../../assets/photos/Graduate Students_ Nook/Thesis_defense_FloresPF_2021-0618.jpg'}
  ]

  gernato = [
    {thumbnail: '../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0622_Gernato.jpg'}
  ]

  myArr = [];

  constructor(private router:Router) { }

  ngOnInit(): void {
    switch(this.router.url) {
      case '/Academics/studnook/thesis-defense-geminne-manzano':
        this.myArr = this.geminne;
        break;
      case '/Academics/studnook/thesis-defense-jannelle-casanova':
        this.myArr = this.cassanova;
        break;
      case '/Academics/studnook/thesis-defense-raffi-isah':
        this.myArr = this.isah;
        break;
      case '/Academics/studnook/thesis-defense-paul-flores':
        this.myArr = this.flores;
        break;
      case '/Academics/studnook/thesis-defense-erika-gernato':
        this.myArr = this.gernato;
        break;
    }
  }

  moreVancancies(){
    this.router.navigate(['Academics/studnook/more']);
  }
}
