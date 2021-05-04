import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-msi-staff',
  templateUrl: './admin-msi-staff.component.html',
  styleUrls: ['./admin-msi-staff.component.css']
})
export class AdminMsiStaffComponent implements OnInit {
  panelOpenState:boolean =false;
  panelOpenState1:boolean =false;
  panelOpenState2:boolean =false;

  constructor() { }

  ngOnInit(): void {
  }

}
