import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-areas-of-research',
  templateUrl: './areas-of-research.component.html',
  styleUrls: ['./areas-of-research.component.css']
})
export class AreasOfResearchComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  laboratories() {
    this.router.navigate(['/Research/laboratories']);
  }
}
