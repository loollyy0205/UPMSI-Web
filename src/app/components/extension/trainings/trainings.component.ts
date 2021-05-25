import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainings',
  templateUrl: './trainings.component.html',
  styleUrls: ['./trainings.component.css']
})
export class TrainingsComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

  newsContent(){
    this.router.navigate(['/News/content']);
  }

}
