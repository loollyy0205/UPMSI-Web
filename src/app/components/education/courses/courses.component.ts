import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion;
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;
  panelOpenState4:boolean =false;

  panelOpenState6:boolean =false;
  panelOpenState7:boolean =false;
  panelOpenState8:boolean =false;
  panelOpenState9:boolean =false;

  panelOpenState10:boolean =false;
  panelOpenState11:boolean =false;
  panelOpenState12:boolean =false;
  panelOpenState13:boolean =false;

  panelOpenState14:boolean =false;
  panelOpenState15:boolean =false;
  panelOpenState16:boolean =false;
  panelOpenState17:boolean =false;
  panelOpenState18:boolean =false;

  panelOpenState19:boolean =false;
  panelOpenState20:boolean =false;
  panelOpenState21:boolean =false;
  panelOpenState22:boolean =false;

  panelOpenState23:boolean =false;
  panelOpenState24:boolean =false;
  panelOpenState25:boolean =false;
  panelOpenState26:boolean =false;
  constructor() { }

  ngOnInit(): void {
  }

}
