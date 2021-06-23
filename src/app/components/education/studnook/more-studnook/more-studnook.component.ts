import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-studnook',
  templateUrl: './more-studnook.component.html',
  styleUrls: ['./more-studnook.component.css']
})
export class MoreStudNookComponent implements OnInit {
  vacancies= [
  /**
  edited: changed writter to writers in 1st article
  */
    {image: '../../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0611_ManzanoG landscape.jpg', title: 'Thesis Defense | Geminne G. Manzano', date:'June 11, 2021'},
    {image: '../../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0615_CasanovaJ landscape.jpg', title: 'Thesis Defense | Jannelle R. Casanova', date:'June 15, 2021'},
    {image: '../../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0616_IsahR landscape.jpg', title: 'Thesis Defense | Raffi Isah', date:'June 16, 2021'},
    {image: '../../../../../assets/photos/Graduate Students_ Nook/Thesis_defense_FloresPF_2021-0618 landscape.jpg', title: 'Thesis Defense | Paul Caesar Flores', date:'June 18, 2021'},
    {image: '../../../../../assets/photos/Graduate Students_ Nook/Thesis defense_2021-0622_Gernato landscape.jpg', title: 'Thesis Defense | Erika Grace M. Gernato', date:'June 22, 2021'},
    ]
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moreContent(i){
    switch(i) {
      case 0:
        this.router.navigate(['/Academics/studnook', 'thesis-defense-geminne-manzano']);
        break;
      case 1:
        this.router.navigate(['/Academics/studnook', 'thesis-defense-jannelle-casanova']);
        break;
      case 2:
        this.router.navigate(['/Academics/studnook', 'thesis-defense-raffi-isah']);
        break;
      case 3:
        this.router.navigate(['/Academics/studnook', 'thesis-defense-paul-flores']);
        break;
      case 4:
        this.router.navigate(['/Academics/studnook', 'thesis-defense-erika-gernato']);
        break;
    }
  }

}
