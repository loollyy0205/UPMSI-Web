import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-based-ra',
  templateUrl: './project-based-ra.component.html',
  styleUrls: ['./project-based-ra.component.css']
})
export class ProjectBasedRAComponent implements OnInit {
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;
  panelOpenState3:boolean =false;
  panelOpenState4:boolean =false;
  panelOpenState5:boolean =false;
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
  panelOpenState27:boolean =false;
  panelOpenState28:boolean =false;
  panelOpenState29:boolean =false;
  panelOpenState30:boolean =false;
  panelOpenState31:boolean =false;
  panelOpenState32:boolean =false;
  panelOpenState33:boolean =false;
  constructor() { }

  scrollUp(event){
    setTimeout(() => {
      this.scroll(event.path[3].attributes[1].nodeValue);
    }, 400);
  }

  scroll(id) {
    let el = document.getElementById(id);
    el.scrollIntoView(true);
  }
  ngOnInit(): void {
  }

}
