import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-more-vacancies',
  templateUrl: './more-vacancies.component.html',
  styleUrls: ['./more-vacancies.component.css']
})
export class MoreVacanciesComponent implements OnInit {
  vacancies= [
    {image: '../../../../../assets/photos/sampleImage1.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage2.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage3.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage1.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage2.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage3.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage1.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage2.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
    {image: '../../../../../assets/photos/sampleImage3.jpg', title: 'Marine Scientist', date:'March 16, 2021'},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
