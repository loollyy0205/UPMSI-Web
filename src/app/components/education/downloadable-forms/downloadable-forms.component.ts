import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-downloadable-forms',
  templateUrl: './downloadable-forms.component.html',
  styleUrls: ['./downloadable-forms.component.css']
})
export class DownloadableFormsComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
